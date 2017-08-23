import less from './less/index.less';
import Bb from 'backbone';
import Mn from 'backbone.marionette';
import $ from 'jquery';
import Router from './Router';
import Root from './components/Root';
import Header from './components/Header';
import IslandView from './components/IslandView';

var App = Mn.Application.extend({
	region: '#app',
	initialize: function() {}
});
window.app = new App();

app.on('start', (app, options) => {
	app.getRegion().show(
		new Root({
			render: {
				header: () => new Header(),
				content: () => (app.root = new IslandView({ render: () => false }))
			}
		})
	);
	app.router = new Router();
	Bb.history.start();
});
