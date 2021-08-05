import todoReducer from './reducer';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	todos: todoReducer,
});

const store = configureStore({
	reducer: rootReducer,
});
export default store;
