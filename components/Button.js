import React from 'react'
import { Button as ButtonRN, ActivityIndicator, StyleSheet, View } from 'react-native'

const Button = ({ loading = false, ...props }) => {
	return(
		<View style={styles.buttonContainer}>
			{ loading
				? <ActivityIndicator />
				: <ButtonRN {...props} />
			}
		</View>
	)
}

export default Button

const styles = StyleSheet.create({
	buttonContainer: {
		height: 50,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
})
