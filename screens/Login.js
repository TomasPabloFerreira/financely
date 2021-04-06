import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from '../components'

const LogInScreen = ({ navigation }) => {
	return (
		<LinearGradient
			colors={['rgb(20,150,90)', 'rgb(255,255,255)']}
			style={styles.background}
		>

			<Text>Login</Text>
			<View style={styles.signUpLinkContainer}>
				<Text>Don't have an account?</Text>
				<Link text="Sign up" onPress={() => {navigation.navigate('SignUp')}}/>
			</View>
		</LinearGradient>
	)
}

export default LogInScreen

const styles = StyleSheet.create({
	background: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: '40%',
		paddingBottom: '20%'
	},
	signUpLinkContainer: {
		display: 'flex',
		flexDirection: 'row',
	}
})
