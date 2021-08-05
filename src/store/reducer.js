import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchTodos = createAsyncThunk(
	'todos/fetchTodos',

	async () => {
		try {
			const res = await AsyncStorage.getItem('todos');
			const loadedTodos = JSON.parse(res);
			return loadedTodos;
		} catch (error) {
			console.log(error);
		}
	}
);

export const saveToLocalStorage = createAsyncThunk(
	'todos/saveToLocalStorage',

	async (_, { getState }) => {
		const { todos } = getState().todos;
		const localTodos = JSON.stringify(todos);
		try {
			AsyncStorage.setItem('todos', localTodos);
		} catch (err) {
			console.log(err);
		}
	}
);

const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
	},
	reducers: {
		addTodo(state, action) {
			state.todos.push(action.payload);
		},
		removeTodo(state, action) {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchTodos.fulfilled, (state, action) => {
			state.todos = action.payload;
		});
	},
});
export default todosSlice.reducer;

export const { addTodo, removeTodo } = todosSlice.actions;
