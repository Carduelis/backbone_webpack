import { CollectionView } from 'backbone.marionette';
import Card from '../Card';
import UserView from './UserView';
import EmptyView from './EmptyView';

const UsersCardsView = CollectionView.extend({
	childView: Card,
	emptyView: EmptyView,
	className: 'b-cards-wrapper',
	childViewOptions(model) {
		return {
			shade: model.get('groupId') ? 600 : 100,
			color: model.get('color'),
			render: () => new UserView({ model })
		};
	},
	initialize({ collection }) {
		this.collection = collection;
		collection.on('ready', () => this.render());
	}
});

export default UsersCardsView;
