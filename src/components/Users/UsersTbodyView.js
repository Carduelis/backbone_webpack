import { CollectionView } from 'backbone.marionette';
import UserRowView from './UserRowView';

const UsersTbodyView = CollectionView.extend({
	childView: UserRowView,
	tagName: 'tbody',
	initialize({ collection }) {
		this.collection = collection;
		collection.on('ready', () => this.render());
	},
	childViewOptions(model, i) {
		return { i };
	}
});

export default UsersTbodyView;
