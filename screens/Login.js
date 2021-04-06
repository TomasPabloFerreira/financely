import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Link, Button, TextInput } from '../components'

const LogInScreen = ({ navigation }) => {

	const [loading, setLoading] = useState(false)

	const submit = async () => {
		setLoading(true)
		try{
			const response = await new Promise(r => setTimeout(r, 1000))
		} catch(e) {
			console.log(e)
		}
		setLoading(false)
	}

	return (
		<LinearGradient
			colors={['rgb(20,150,90)', 'rgb(255,255,255)']}
			style={styles.background}
		>
			<Text style={styles.title}>Financely</Text>
			<View style={styles.formContainer}>
				<TextInput
					placeholder="Email"
				/>
				<TextInput
					placeholder="Password"
					secureTextEntry={true}
				/>
				<Button title="Login" color="#266DD3" onPress={submit} loading={loading} />
			</View>

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
	title: {
		fontSize: 36,
		fontWeight: 'bold',
		color: '#EEE'
	},
	formContainer: {
		flex: 1,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	signUpLinkContainer: {
		display: 'flex',
		flexDirection: 'row',
	}
})
