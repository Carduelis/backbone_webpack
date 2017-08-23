import _ from 'lodash';
import { View } from 'backbone.marionette';

const UserView = View.extend({
	className: 'b-card-link k-user',
	template: _.template(`
		<p>Loading and fetching data</p>
	`)
});

export default UserView;
