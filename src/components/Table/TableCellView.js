import Mn from 'backbone.marionette';
import _ from 'lodash';
import ChildrenRender from '../../misc/ChildrenRender';
const TableCellView = Mn.View.extend({
	tagName: 'td',
	behaviors: [ChildrenRender],
	template: _.template('<r-content></r-content>')
});

export default TableCellView;
