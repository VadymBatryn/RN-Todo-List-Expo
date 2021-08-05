import { generateRandomColor } from './randomColor';

export default (title) => {
	if (title.trim()) {
		return {
			id: new Date().toISOString(),
			title: title,
			color: generateRandomColor(),
		};
	} else return;
};
