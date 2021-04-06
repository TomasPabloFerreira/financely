import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LoginScreen, SignupScreen, HomeScreen } from './screens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App() {
	const loggedIn = false
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator headerMode="none">
					{loggedIn ? (
						<Stack.Screen name="Home" component={HomeScreen} />
					) : (
						<>
							<Stack.Screen name="LogIn" component={LoginScreen} />
							<Stack.Screen name="SignUp" component={SignupScreen} />
						</>
					)}
				</Stack.Navigator>
			</NavigationContainer>
			<StatusBar style="auto" />
		</>
	)
}
