import React, { useState, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import TodoCard from '../components/TodoCard';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	FlatList,
	TextInput,
	Image,
	SafeAreaView,
	KeyboardAvoidingView,
	Text,
} from 'react-native';

import { addTodo, removeTodo } from '../store/reducer';

const plusIconUrl =
	'https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/plus-512.png';

const HomeScreen = ({ navigation }) => {
	const dispatch = useDispatch();

	const todos = useSelector((state) => state.todos.todos);
	const [todoTask, setTodoTask] = useState('');
	const id = useRef(todos.length);

	const taskInputHandler = (text) => {
		setTodoTask(text);
	};

	const createTodoHandler = () => {
		if (todoTask.trim()) {
			const todo = {
				id: (id.current + 1).toString(),
				title: todoTask.trim(),
			};
			id.current += 1;
			dispatch(addTodo(todo));
			setTodoTask('');
		}
	};

	const deleteTodoHandler = (id) => {
		dispatch(removeTodo(id));
	};

	return (
		<SafeAreaView style={styles.screen}>
			<KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
				<Text
					style={{
						fontSize: 24,
						fontWeight: 'bold',
						marginLeft: 20,
						marginVertical: 20,
					}}>
					Today's Plan
				</Text>
				<FlatList
					contentContainerStyle={styles.tasksContainer}
					data={todos}
					renderItem={(itemData) => (
						<TodoCard
							id={itemData.item.id}
							task={itemData.item.title}
							onPressHandler={deleteTodoHandler}
						/>
					)}
					keyExtractor={(item) => item.id.toString()}
				/>
				<View style={styles.addTaskContainer}>
					<TextInput
						style={styles.taskInput}
						onChangeText={taskInputHandler}
						value={todoTask}
						placeholder='What are we doing today?'
					/>
					<TouchableOpacity
						style={styles.addTaskButton}
						onPress={createTodoHandler}>
						<Image
							source={{ uri: plusIconUrl }}
							style={{
								height: 25,
								width: 25,
							}}
						/>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: '#eee',
	},
	tasksContainer: {
		padding: 10,
		alignItems: 'center',
	},
	addTaskContainer: {
		height: 100,
		padding: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	taskInput: {
		width: '80%',
		height: '80%',
		borderRadius: 40,
		backgroundColor: '#fff',
		paddingHorizontal: 20,
	},
	addTaskButton: {
		height: 50,
		width: 50,
		borderRadius: 25,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
