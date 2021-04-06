import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const Link = ({ text, onPress }) => {
	return(
		<TouchableOpacity onPress={onPress}>
			<Text style={styles.link}>{text}</Text>
		</TouchableOpacity>
	)
}

export default Link

const styles = StyleSheet.create({
	link: {
		color: '#266DD3',
		marginLeft: 5
	}
})
