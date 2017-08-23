import { AppRouter } from 'backbone.marionette';
import FormView from './components/FormView';
import UsersPageView from './components/Users/UsersPageView';

const controller = {
	welcome() {
		const { app } = window;
		console.log(app.root);
		app.root.children.show(new FormView());
	},
	users(params) {
		const { app } = window;
		const type = params ? params : null;
		app.root.children.show(new UsersPageView({ type }));
	}
};

const Router = AppRouter.extend({
	controller,
	appRoutes: {
		'': 'welcome',
		welcome: 'welcome',
		users: 'users',
		'users/:id': 'users'
	},
	initialize() {},

	onRoute(...rest) {}
});

export default Router;
