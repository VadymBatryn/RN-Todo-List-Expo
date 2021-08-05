import React from 'react';
import { useDispatch } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native';
//Styles
import styles from './TodoCard.style';
//Actions
import { removeTodo, saveToLocalStorage } from '../../store/reducer';

const TodoCard = (props) => {
	const dispatch = useDispatch();

	const removeTodoHandler = (id) => {
		dispatch(removeTodo(id));
		dispatch(saveToLocalStorage());
	};
	return (
		<TouchableOpacity
			style={styles.item}
			onPress={() => removeTodoHandler(props.id)}>
			<View style={styles.itemLeft}>
				<View style={styles.square(props.color)} />
				<Text style={styles.itemText}>{props.task}</Text>
			</View>
			<View style={styles.circular(props.color)}></View>
		</TouchableOpacity>
	);
};

export default TodoCard;
