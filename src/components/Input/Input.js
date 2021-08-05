import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

//Components
import CustomButton from '../CustomButton/CustomButton';
//Styles
import styles from './Input.style';

const Input = () => {
	const [task, setTask] = useState('');

	return (
		<View style={styles.addTaskContainer}>
			<TextInput
				style={styles.taskInput}
				onChangeText={setTask}
				value={task}
				placeholder='What are we doing today?'
			/>
			<CustomButton task={task} setTask={setTask} />
		</View>
	);
};

export default Input;
