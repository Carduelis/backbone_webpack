import { View } from 'backbone.marionette';
import template from '../tmpl/root.tmpl';
import ChildrenRender from '../misc/ChildrenRender';

const Root = View.extend({
	template,
	behaviors: [ChildrenRender],
	initialize() {}
});

export default Root;
