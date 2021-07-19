import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from './src/store/reducer';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
	const rootReducer = combineReducers({
		todos: todoReducer,
	});

	const store = configureStore({
		reducer: rootReducer,
	});

	return (
		<Provider store={store}>
			<HomeScreen />
		</Provider>
	);
}
