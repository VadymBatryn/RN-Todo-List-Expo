import React from 'react';
import { SafeAreaView } from 'react-native';
//Components
import TodoList from '../components/TodoList/TodoList';
//Styles
import styles from './HomeScreen.style';

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.screen}>
			<TodoList />
		</SafeAreaView>
	);
};

export default HomeScreen;
