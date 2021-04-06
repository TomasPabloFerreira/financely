import React from 'react'
import { TextInput as TextInputRN, StyleSheet } from 'react-native'

const TextInput = ({ ...props }) => {
	return(
		<TextInputRN {...props} style={styles.input} placeholderTextColor="#666" />
	)
}

export default TextInput

const styles = StyleSheet.create({
	input: {
		width: '80%',
		height: 48,
		borderColor: '#333',
		borderWidth: 1,
		borderRadius: 22,
		paddingHorizontal: 24,
		marginBottom: 16,
	}
})