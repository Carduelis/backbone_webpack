/**
 * Provide with a react children ({this.children}) behavior
 * @module regionRender
 */

/**
 * The function
 * @param {function|object} render a render function, or object of render functions named as regions
 * @param {object} targetView where it renders to
 * @returns {object} if render is a function it returns content-region, if render is an object it returns an object with named regions
 * @example <caption>when first argument is a function</caption>
 * regionRender(view => new MyView(), view)
 * // returns {object} targetView with only one region: r-content
 * @example <caption>when first argument is an object</caption>
 * const render = {
 * 	header: targetView => new MyHeaderView(),
 * 	footer: targetView => new MyFooterView()
 * }
 * regionRender(render, targetView);
 * // returns {object} targetView with two regions: r-header, r-footer
 */

const DEFAULT_REGION_NAME = 'content';

const renderOneRegion = (regionName, constructView, targetView) => {
	if (targetView.hasRegion(regionName)) {
		const view = constructView(targetView);
		if (view) {
			targetView.getRegion(regionName).show(view);
		}
		return targetView.getRegion(regionName);
	} else {
		throw new Error(`targetView has no ${regionName}-region`);
	}
};

export default function(render, targetView) {
	if (!render) {
		throw new Error('render function or object should be set');
	}
	if (typeof render === 'function') {
		return renderOneRegion(DEFAULT_REGION_NAME, render, targetView);
	} else if (typeof render === 'object') {
		return Object.keys(render).reduce((accumulator, regionName) => {
			accumulator[regionName] = renderOneRegion(
				regionName,
				render[regionName],
				targetView
			);
			return accumulator;
		}, {});
	} else {
		throw new Error(
			`region should be an object or a function. ${typeof region} given instead`
		);
	}
}
