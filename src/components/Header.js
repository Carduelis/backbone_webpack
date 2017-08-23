import { View } from 'backbone.marionette';
// import ChildrenRender from '../misc/ChildrenRender';
import template from '../tmpl/header.tmpl';

const Header = View.extend({
	className: 'k-island k-header',
	template
});

export default Header;
