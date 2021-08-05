import React from 'react';
import { Provider } from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import store from './src/store/configureStore';

export default function App() {
	return (
		<Provider store={store}>
			<HomeScreen />
		</Provider>
	);
}
