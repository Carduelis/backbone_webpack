import { CollectionView } from 'backbone.marionette';
import UserView from './UserView';

const UsersCollectionView = CollectionView.extend({
	childView: UserView,
	className: 'b-cards-wrapper b-cards-wrapper--grey',
	initialize({ collection }) {
		this.collection = collection;
		collection.on('ready', () => this.render());
	}
});

export default UsersCollectionView;
