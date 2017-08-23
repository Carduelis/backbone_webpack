import _ from 'lodash';
import { View } from 'backbone.marionette';

const UserView = View.extend({
	className: 'b-card-link k-user',
	template: _.template(`
		<h4 class="k-user-name"><%-shortName%></h4>
		<div class="k-user-avatar" style="background-image: url(<%-avatarURL%>);"></div>
		<p class="k-user-group"><%-groupName%></p>
		<p><a class="k-phone-link" href="tel:<%=phone%>"><%=phone%></a></p>
	`)
});

export default UserView;
