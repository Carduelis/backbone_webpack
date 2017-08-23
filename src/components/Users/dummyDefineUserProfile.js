import _ from 'lodash';

export default function(title, text) {
	const width = _.random(80, 250);
	const height = _.random(80, 250);
	const phonePrefix = _.random(901, 999);
	const phone1 = _.random(100, 999);
	const phone2 = _.random(10, 99);
	const phone3 = _.random(10, 99);
	const phone = `+7&thinsp;${phonePrefix}&thinsp;${phone1}&ndash;${phone2}&ndash;${phone3}`;
	const data = {
		phone,
		avatarURL: `https://www.placecage.com/c/${width}/${height}`,
		shortName: title.substring(0, 14).trim(),
		text: text.substr(0, 50).trim()
	};
	return data;
}
