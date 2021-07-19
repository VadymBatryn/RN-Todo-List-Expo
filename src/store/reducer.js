import { createSlice } from '@reduxjs/toolkit';
import { State } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
	},
	reducers: {
		addTodo(state, action) {
			state.todos.push(action.payload);
		},
		setTodos(state, action) {
			state.todos = action.payload;
		},
		removeTodo(state, action) {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		saveToLocal(state) {
			const localTodos = JSON.stringify(state.todos);
			try {
				AsyncStorage.setItem('todos', localTodos);
			} catch (err) {
				console.log(err);
			}
		},
	},
});
export default todosSlice.reducer;

export const { addTodo, removeTodo, setTodos, saveToLocal } =
	todosSlice.actions;
