import { CollectionView } from 'backbone.marionette';
import UserView from './UserView';
import EmptyView from './EmptyView';

const UsersCollectionView = CollectionView.extend({
	childView: UserView,
	emptyView: EmptyView,
	className: 'b-cards-wrapper b-cards-wrapper--grey',
	initialize({ collection }) {
		this.collection = collection;
		collection.on('ready', () => this.render());
	}
});

export default UsersCollectionView;
