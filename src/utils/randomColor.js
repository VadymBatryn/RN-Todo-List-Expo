export const generateRandomColor = () => {
	const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
	return color.length > 6 ? color : color + '0';
};
