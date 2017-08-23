const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackRTLPlugin = require("webpack-rtl-plugin");
const SERVER_ADDRESS = "localhost";

module.exports = {
	devtool: "cheap-module-eval-source-map",
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, `build`),
		filename: "bundle.js",
		publicPath: "./"
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader",
							options: {
								minimize: true
								// importLoaders: 1
							}
						},
						{
							loader: "postcss-loader",
							options: {
								config: {
									path: path.join(__dirname, "postcss.config.js")
								}
							}
						},
						"less-loader"
					]
				})
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: "file-loader?name=images/[name]_[hash:3].[ext]"
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				loader: "file-loader?name=fonts/[name]_[hash:3].[ext]"
			},
			{
				test: /\.(js|ejs)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["es2015"]
						}
					}
				]
			},
			{
				test: /\.json$/,
				loader: "json-loader"
			},
			{
				test: /\.(tmpl)$/,
				exclude: /node_modules/,
				loader: "ejs-loader"
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			"process.env": {
				// Useful to reduce the size of client-side libraries, e.g. react
				NODE_ENV: JSON.stringify("production"),
				PLATFORM_ENV: JSON.stringify("web")
			}
		}),
		new ExtractTextPlugin("bundle.css"),
		new WebpackRTLPlugin()
	]
};
