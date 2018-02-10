import React, { Component } from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Dashboard from './src/components/Dashboard';
import { Icon } from 'react-native-elements';

const tabNav = TabNavigator(
	{
		Login: { screen: Login },
		Signup: { screen: Signup }
	},
	{
		tabBarPosition: 'bottom',
		tabBarOptions: {
			style: {
				backgroundColor: '#173746'
			}
		},
		lazyLoad: true
	}
);

const stackNav = StackNavigator({
	Tab: { screen: tabNav },
	Dashboard: {
		screen: Dashboard,
		navigationOptions: ({ navigation }) => ({
			title: 'Dashboard',
			headerTitleStyle: { color: 'white' },
			headerTintColor: 'white',
			headerLeft: (
				<TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
					<Icon name="menu" size={30} color="white" />
				</TouchableOpacity>
			),
			headerStyle: { paddingRight: 10, paddingLeft: 10, backgroundColor: '#173746' }
		})
	}
});

const App = DrawerNavigator({
	Home: { screen: stackNav }
});

export default App;
