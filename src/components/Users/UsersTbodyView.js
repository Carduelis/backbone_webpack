import { CollectionView } from 'backbone.marionette';
import UserRowView from './UserRowView';
import EmptyView from './EmptyView';

const UsersTbodyView = CollectionView.extend({
	childView: UserRowView,
	emptyView: EmptyView,
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
