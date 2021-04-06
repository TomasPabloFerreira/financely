import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const LeftSwipeActions = ({ handleRemove, handleEdit }) => {
	return(
		<>
			<TouchableOpacity style={styles.deleteBox} onPress={handleRemove}>
				<Text style={styles.boxText}>Delete</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.editBox} onPress={handleEdit}>
				<Text style={styles.boxText}>Edit</Text>
			</TouchableOpacity>
		</>
	)
}

export default LeftSwipeActions

const styles = StyleSheet.create({
	deleteBox: {
		backgroundColor: '#EE6363',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: 80,
		height: '100%'
	},
	editBox: {
		backgroundColor: '#63EE63',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: 80,
		height: '100%'
	},
	boxText: {
		fontWeight: 'bold',
		color: '#333'
	}
})