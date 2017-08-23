import _ from 'lodash';
import { View } from 'backbone.marionette';

const UserRowView = View.extend({
	tagName: 'tr',
	template: _.template(`
		<td class="k-table-number"><%-i+1%></td>
		<td><%-shortName%></td>
		<td><%-groupName%></td>
		<td><a class="k-phone-link" href="tel:<%=phone%>"><%=phone%></a></td>
	`),
	templateContext() {
		const { i } = this.options;
		return { i };
	}
});

export default UserRowView;
