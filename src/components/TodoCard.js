import React from 'react';
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const TodoCard = (props) => {
	return (
		<TouchableOpacity
			style={styles.item}
			onPress={() => props.onPressHandler(props.id)}>
			<View style={styles.itemLeft}>
				<View style={styles.square}></View>
				<Text style={styles.itemText}>{props.task}</Text>
			</View>
			<View style={styles.circular}></View>
		</TouchableOpacity>
	);
};

export default TodoCard;

const styles = StyleSheet.create({
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
	square: {
		backgroundColor: '#55BCF6',
		width: 24,
		height: 24,
		opacity: 0.3,
		borderRadius: 5,
		marginRight: 15,
	},
	itemText: {
		maxWidth: '85%',
	},
	circular: {
		width: 12,
		height: 12,
		borderColor: '#55BCF6',
		borderWidth: 2,
		borderRadius: 5,
	},
});
