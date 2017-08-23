/**
 * Карточка универсальная - враппер для дизайна
 * @module
 */
import Mn from 'backbone.marionette';
import palette from 'google-material-color';
import _ from 'lodash';
import ChildrenRender from '../misc/ChildrenRender';

const Card = Mn.View.extend(
	/** @lends module:components/UI/Card */ {
		/**
	 * Create a 'Card' view
	 * @param {object} options - params
	 * @param {string} options.color - color of google material colors
	 * @param {number} options.shade - shade of google marerial colors
	 * @param {boolean} options.padding - adds @pad-size inner padding
	 * @param {object} options.render - render object that contains functions named as regions to render
	 */
		initialize() {},
		className: 'b-card',
		template: _.template(`
			<div class="b-card-reference">
				<div class="b-card-stack-0 <%-padding && 'pad'%>" style="border-bottom-color: <%-color%>">
					<r-content></r-content>
				</div>
			</div>
		`),
		behaviors: [ChildrenRender],
		events: {
			click: 'onClick'
		},
		templateContext() {
			const { color = 'Red', shade, padding } = this.options;
			return {
				color: palette.get(color, shade),
				padding
			};
		}
	}
);

export default Card;
