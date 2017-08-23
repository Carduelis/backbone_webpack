import Mn from 'backbone.marionette';
import _ from 'lodash';
import ChildrenRender from '../../misc/ChildrenRender';

const TableView = Mn.View.extend({
	template: _.template(`
		<r-thead></r-thead>
		<r-tbody></r-tbody>
		<r-tfoot></r-tfoot>
	`),
	tagName: 'table',
	className: 'k-table',
	behaviors: [ChildrenRender]
});

export { TableView };
