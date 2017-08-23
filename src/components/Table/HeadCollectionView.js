import { Collection } from 'backbone';
import Mn from 'backbone.marionette';
import HeadView from './HeadView';

const HeadCollectionView = Mn.CollectionView.extend({
	childView: HeadView,
	tagName: 'thead',
	initialize(options) {
		this.collection = new Collection(options.dataset);
		console.log(this.collection);
		this.render();
	}
});

export default HeadCollectionView;
