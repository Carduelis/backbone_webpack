import Mn from 'backbone.marionette';
import _ from 'lodash';

const HeadView = Mn.View.extend({
	tagName: 'th',
	template: _.template(`
		<%-title%>
	`)
});

export default HeadView;
