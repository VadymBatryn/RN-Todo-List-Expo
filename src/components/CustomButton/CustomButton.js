import React from 'react';
import { Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import { TouchableOpacity, Image } from 'react-native';
//Styles
import styles from './CustomButton.style';
//Utils
import createTodo from '../../utils/createTodo';
//Constants
import { PLUS_IMAGE_URL } from '../../constants/images';
//Actions
import { addTodo, saveToLocalStorage } from '../../store/reducer';

const CustomButton = (props) => {
	const dispatch = useDispatch();

	const addTodoHandler = () => {
		const todo = createTodo(props.task);

		if (todo) {
			Keyboard.dismiss();
			dispatch(addTodo(todo));
			dispatch(saveToLocalStorage());
			props.setTask('');
		}
	};

	return (
		<TouchableOpacity style={styles.addTaskButton} onPress={addTodoHandler}>
			<Image
				source={{ uri: PLUS_IMAGE_URL }}
				style={{
					height: 25,
					width: 25,
				}}
			/>
		</TouchableOpacity>
	);
};

export default CustomButton;
