import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from '../components'

const SignUpScreen = ({ navigation }) => {
	return (
		<LinearGradient
			colors={['rgb(150,20,90)', 'rgb(255,255,255)']}
			style={styles.background}
		>
			<Text>Signup</Text>
			<View style={styles.logInLinkContainer}>
				<Text>Have an account?</Text>
				<Link text="Sign up" onPress={() => {navigation.navigate('LogIn')}}/>
			</View>
		</LinearGradient>
	)
}

export default SignUpScreen

const styles = StyleSheet.create({
	background: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: '40%',
		paddingBottom: '20%'
	},
	logInLinkContainer: {
		display: 'flex',
		flexDirection: 'row',
	}
})
