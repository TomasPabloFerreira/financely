import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Link, TextInput, Button } from '../components'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useForm } from '../hooks'
import { AuthContext } from '../contexts/AuthContext'
import { authService } from '../services'

const SignUpScreen = ({ navigation }) => {

	const [loading, setLoading] = useState(false)
	const { signUp } = useContext(AuthContext)

	const onSubmit = async values => {
		setLoading(true)
		try{
			const response = await authService.register(values)
			signUp(response)
		} catch(e) {
			console.log(e)
		}
		setLoading(false)
	}

	const initialState = {
		email: '', password: '', fullName: '', birthDate: new Date()
	}
	const { subscribe, inputs, submit } = useForm(initialState, onSubmit)

	return (
		<LinearGradient
			colors={['rgb(150,20,90)', 'rgb(255,255,255)']}
			style={styles.background}
		>
			<Text style={styles.title}>Financely</Text>

			<View style={styles.formContainer}>
				<TextInput
					placeholder="Email"
					value={inputs.email}
					onChangeText={subscribe('email')}
				/>
				<TextInput
					placeholder="Password"
					value={inputs.password}
					onChangeText={subscribe('password')}
				/>
				<TextInput
					placeholder="Full Name"
					value={inputs.fullName}
					onChangeText={subscribe('fullName')}
				/>
				<View style={styles.dateTimePickerContainer}>
					<Text style={styles.birthDateLabel}>Birth date</Text>
					<DateTimePicker
						value={inputs.birthDate}
						style={styles.dateTimePicker}
						mode="datetime"
						onChange={(e, x) => subscribe('birthDate')(x)}
					/>
				</View>
				<Button title="Signup" color="#266DD3" onPress={submit} loading={loading} />
			</View>

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
	title: {
		fontSize: 36,
		fontWeight: 'bold',
		color: '#EEE'
	},
	logInLinkContainer: {
		display: 'flex',
		flexDirection: 'row',
	},
	dateTimePickerContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		paddingTop: 0
	},
	dateTimePicker: {
		width: '80%',
	},
	formContainer: {
		flex: 1,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	birthDateLabel: {
		alignSelf: 'flex-start',
		paddingLeft: '10%',
		paddingBottom: 10
	}
})
