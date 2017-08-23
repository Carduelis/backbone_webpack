import _ from 'lodash';
import { View } from 'backbone.marionette';
import RegionSetter from '../../misc/RegionSetter';
import UsersCollection from './UsersCollection';
import UsersCardsView from './UsersCardsView';
import Table from '../Table';
import UsersCollectionView from './UsersCollectionView';
import UsersTbodyView from './UsersTbodyView';
import groupsTemplate from '../../tmpl/groupsTemplate.tmpl';

const UsersPageView = View.extend({
	template: _.template('<r-users></r-users>'),
	regions: new RegionSetter('users'),
	initialize() {
		this.collection = new UsersCollection();
	},
	onRender() {
		const { collection, options } = this;
		const { type } = options;
		switch (type) {
			case 'table':
				new Table({
					targetRegion: this.getRegion('users'),
					dataset: {
						thead: [
							{ title: '#' },
							{ title: 'Имя' },
							{ title: 'Группа' },
							{ title: 'Телефон' }
						]
					},
					render: {
						tbody: () => new UsersTbodyView({ collection })
					}
				});
				break;
			case 'cards':
				this.view = new UsersCardsView({ collection });
				this.getRegion('users').show(this.view);
				break;
			case 'groups': {
				const TestView = View.extend({ template: groupsTemplate });
				this.getRegion('users').show(new TestView());
				break;
			}
			default:
				this.view = new UsersCollectionView({ collection });
				this.getRegion('users').show(this.view);
				break;
		}
	}
});

export default UsersPageView;
