import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LoginScreen, SignupScreen, HomeScreen } from './screens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useAuth } from './hooks'
import AuthContextProvider from './contexts/AuthContext'

const Stack = createStackNavigator()

export default function App() {

	const { authContext, state: authState } = useAuth()

	return (
		<AuthContextProvider value={authContext}>
			<NavigationContainer>
				<Stack.Navigator headerMode="none">
					{authState.userToken == null ? (
						<>
							<Stack.Screen name="LogIn" component={LoginScreen} />
							<Stack.Screen name="SignUp" component={SignupScreen} />
						</>
					) : (
						<Stack.Screen name="Home" component={HomeScreen} />
					)}
				</Stack.Navigator>
			</NavigationContainer>
			<StatusBar style="auto" />
		</AuthContextProvider>
	)
}
