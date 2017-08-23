import Mn from 'backbone.marionette';
import TableCellView from './TableCellView';

const TableRowView = Mn.CollectionView.extend({
	tagName: 'tr',
	childView: TableCellView,
	childViewOptions() {
		return {
			render: () => this.options.render
		};
	}
});

export default TableRowView;
