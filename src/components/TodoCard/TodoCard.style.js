import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
	item: {
		width: screenWidth - 50,
		backgroundColor: '#FFF',
		padding: 15,
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	itemLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	square: (color) => ({
		width: 24,
		height: 24,
		opacity: 0.3,
		borderRadius: 5,
		marginRight: 15,
		backgroundColor: color,
	}),
	itemText: {
		maxWidth: '85%',
	},
	circular: (color) => ({
		width: 12,
		height: 12,
		borderWidth: 2,
		borderRadius: 5,
		borderColor: color,
	}),
});
