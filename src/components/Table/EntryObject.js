import Mn from 'backbone.marionette';
import { TableView } from './TableView';
import HeadCollectionView from './HeadCollectionView';

const EntryObject = Mn.Object.extend({
	initialize: function(options) {
		const { render, dataset } = options;

		if (dataset) {
			if (dataset.thead) {
				console.log(dataset);
				render.thead = () =>
					new HeadCollectionView({
						dataset: dataset.thead
					});
			}
		}

		this.view = new TableView(options);
		options.targetRegion.show(this.view);
		this.view.on('destroy', () => this.destroy());
	}
});
export default EntryObject;
