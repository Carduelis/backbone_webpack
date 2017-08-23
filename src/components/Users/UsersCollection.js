import { Collection, Model } from 'backbone';
import { API_URL } from '../../constants';
import dummyDefineGroupByPostId from './dummyDefineGroupByPostId';
import dummyDefineUserProfile from './dummyDefineUserProfile';

const UserModel = Model.extend({
	defaults() {
		return {
			shortName: '',
			groupName: '',
			avatarURL: '',
			phone: '',
			name: '',
			groupId: ''
		};
	}
});

const UsersCollection = Collection.extend({
	url: API_URL,
	model: UserModel,
	initialize() {
		const { app } = window;
		if (app.usersCollection) {
			this.add(app.usersCollection.models);
		} else {
			this.fetch({
				silent: true,
				error: () =>
					alert(
						'Loading data failed. See console. Be sure that you run the app on web-server'
					)
			});
		}
		this.on('sync', () => {
			app.usersCollection = this;
			app.usersCollection.models.map(model => {
				const groupData = dummyDefineGroupByPostId(model.get('postId'));
				const userData = dummyDefineUserProfile(
					model.get('name'),
					model.get('body')
				);
				model.set(Object.assign(groupData, userData));
			});
			this.trigger('ready');
		});
	}
});

export default UsersCollection;
