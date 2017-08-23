import { REGION_PREFIX } from '../constants';
import _ from 'lodash';

const RegionSetter = function() {
	this.arguments = arguments;
	if (this.arguments.length === 1 && _.isArray(this.arguments[0])) {
		this.arguments = arguments[0];
	}
	return this.builder();
};

RegionSetter.prototype.builder = function() {
	const regions = {};
	for (let i in this.arguments) {
		const regionName = this.arguments[i];
		regions[regionName] = {
			el: REGION_PREFIX + regionName,
			replaceElement: true
		};
	}
	return regions;
};
export default RegionSetter;
