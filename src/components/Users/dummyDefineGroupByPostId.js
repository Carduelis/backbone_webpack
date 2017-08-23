export default function(postId) {
	const data = {
		groupId: null,
		groupName: 'Общая',
		color: 'Blue Grey'
	};
	if (postId % 2 === 0) {
		data.groupId = 'designers';
		data.groupName = 'Десигнеры';
		data.color = 'Green';
	} else if (postId % 3 === 0) {
		data.groupId = 'developers';
		data.groupName = 'Погромисты';
		data.color = 'Blue';
	} else if (postId % 5 === 0) {
		data.groupId = 'juniors';
		data.groupName = 'Верстальщики';
		data.color = 'Orange';
	} else if (postId % 7 === 0) {
		data.groupId = 'managers';
		data.groupName = 'Менеджеры';
		data.color = 'Purple';
	}
	return data;
}
