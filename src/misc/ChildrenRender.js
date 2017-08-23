import Mn from 'backbone.marionette';
import RegionSetter from './RegionSetter';
import regionRender from './regionRender';
import _ from 'lodash';

const ChildrenRender = Mn.Behavior.extend({
	defaults: {
		regions: ['content']
	},
	onBeforeRender() {
		// console.log(this.getOption('regions'));
		this.view.addRegions(
			new RegionSetter(this.regions || this.getOption('regions'))
		);
	},
	initialize() {
		const { options } = this.view;
		if (typeof options.render === 'object') {
			this.regions = Object.keys(options.render);
		}
	},
	onRender(view) {
		view.children = regionRender(view.options.render, view);
	}
});
export default ChildrenRender;
