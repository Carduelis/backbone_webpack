import { View } from 'backbone.marionette';
import _ from 'lodash';
import $ from 'jquery';

function createNode({ address }) {
	const nodeLi = document.createElement('LI');
	const textNodeAddress = document.createTextNode(address);
	nodeLi.appendChild(textNodeAddress);
	return nodeLi;
}

const BigRenderView = View.extend({
	className: 'test',
	template: _.template(`
		<% if(disabled) { %>
			Загрузка
		<% } %>
		<button data-action="simple" <%-disabled%>>Simple li by li <span></span></button>
		<button data-action="timeout" <%-disabled%>>SetTimeout <span></span></button>
		<button data-action="clear" <%-disabled%>>Stop & Clear <span></span></button>
		<i style="float: right;"></i>
		<ol id="target"></ol>
	`),
	ui: {
		'btn': '[data-action]'
	},
	events: {
		'click @ui.btn': 'onClick'
	},
	initialize() {
			$.get('../src/test.json').then((json) => {
				this.isFetched = true;
				this.json = json;
				console.log(json);
				this.render();
			});
	},
	onShowTime(startTime, action){
		const endTime = new Date().getTime();
		const delta = endTime - startTime;
		this.$el.find(`[data-action=${action}]`).find('span').text(`${delta}ms`);
	},
	onRender() {
	},
	onClick(e) {
		const { json, $el } = this;
		this.stop = false;
		const { action } = e.currentTarget.dataset;
		const startTime = new Date().getTime();
		const target = document.getElementById('target');
		switch (action) {
			case 'simple': {
				this.stop = false;
				json.forEach(item => {
					target.appendChild(createNode(item));
				});
				this.triggerMethod('show:time', startTime, action);
			}
			break;
			/* eslint-disable no-inner-declarations */

			case 'timeout': {
				const SIZE = 100;
				const renderBunch = (start = 0) => new Promise((resolve, reject) => {
					setTimeout(() => {
						if (this.stop) {
							reject('stopped');
						}
						try {
							const end = start + SIZE;
							for (let i = start; i < end; i++) {
								target.appendChild(createNode(json[i]));
							}
							resolve(end);
						} catch (e) {
							reject(e);
						}
					}, 0);
				})
				.then((end) => {
					$el.find('i').text(`${end} out of ${json.length}`);
					return renderBunch(end);
				})
				.catch(error => {
					if (error === 'stopped') {
						this.$el.find('#target').empty();
						console.warn(error);
					} else {
						console.warn('json is bad', error);
					}
				});

				renderBunch();
			}
			break;
			case 'clear': {
				this.stop = true;
				$el.find('i').empty();
				this.$el.find('#target').empty();
			}
			break;
			default:
		}

	},
	templateContext() {
		return {
			disabled: this.isFetched ? false : 'disabled="disabled"'
		}
	}
});

export default BigRenderView;
