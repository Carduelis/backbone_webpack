import { View } from 'backbone.marionette';
import ChildrenRender from '../misc/ChildrenRender';
import _ from 'lodash';

const IslandView = View.extend({
	className: 'k-island',
	template: _.template('<r-content></r-content>'),
	behaviors: [ChildrenRender]
});

export default IslandView;
