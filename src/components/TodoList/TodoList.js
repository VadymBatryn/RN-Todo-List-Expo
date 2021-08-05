import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, KeyboardAvoidingView, FlatList } from 'react-native';
//Actions
import { fetchTodos } from '../../store/reducer';
//Styles
import styles from './TodoList.style';
//Components
import TodoCard from '../TodoCard/TodoCard';
import Input from '../Input/Input';

const TodoList = () => {
	const dispatch = useDispatch();

	const todos = useSelector((state) => state.todos.todos);

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	return (
		<KeyboardAvoidingView behavior={'padding'} style={styles.avoidingView}>
			<Text style={styles.title}>Today's Plan</Text>
			<FlatList
				contentContainerStyle={styles.tasksContainer}
				data={todos}
				renderItem={(itemData) => (
					<TodoCard
						id={itemData.item.id}
						task={itemData.item.title}
						color={itemData.item.color}
					/>
				)}
				keyExtractor={(item) => item.id}
			/>
			<Input />
		</KeyboardAvoidingView>
	);
};

export default TodoList;
