const path = require("path");
const webpack = require("webpack");
const SERVER_ADDRESS = "localhost";

module.exports = {
	devtool: "cheap-module-eval-source-map",
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, `../build`),
		filename: "bundle.js",
		publicPath: `http://${SERVER_ADDRESS}:3009/build`
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: ["style-loader", "css-loader?sourceMap", "less-loader?sourceMap"]
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
				use: ["json-loader"]
			},
			{
				test: /\.(tmpl)$/,
				exclude: /node_modules/,
				loader: "ejs-loader"
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				// Useful to reduce the size of client-side libraries, e.g. react
				NODE_ENV: JSON.stringify("production"),
				PLATFORM_ENV: JSON.stringify("web")
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		// new webpack.optimize.CommonsChunkPlugin("init"),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.NamedModulesPlugin()
	]
};
