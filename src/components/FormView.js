import { Model } from 'backbone';
import { View } from 'backbone.marionette';
import template from '../tmpl/form.tmpl';
import uniqId from '../misc/uniqId';
import $ from 'jquery';

const FormView = View.extend({
	template,
	className: 'k-form',
	events: {
		'click [data-action="direction"]': 'toggleDirection'
	},
	modelEvents: {
		'change:rtl': 'onToggleDirectionChange'
	},
	initialize() {
		this.model = new Model({
			id: uniqId(),
			rtl: false,
			buttonText: 'Константинопольская кнопка',
			helpText: 'Example: A765FD-76FAD-F76DS76FD6',
			placeholder: 'Введите код здесь'
		});
	},
	templateContext() {
		return {
			direction: this.model.get('rtl') ? 'to lrt' : 'to rtl'
		};
	},
	onToggleDirectionChange(...rest) {
		console.log(...rest);
		const { model } = this;
		if (model.get('rtl')) {
			$('body').css('direction', 'rtl');
			$('#styles').attr('href', 'build/bundle.rtl.css');
		} else {
			$('body').removeAttr('style');
			$('#styles').attr('href', 'build/bundle.css');
		}
	},
	toggleDirection() {
		const { model } = this;
		model.set('rtl', !model.get('rtl'));
		this.render();
	}
});

export default FormView;
