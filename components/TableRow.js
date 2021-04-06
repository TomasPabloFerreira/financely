import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TableRow = ({ columns, header }) => {
	return (
		<View style={styles.row}>
			{columns.map((x, i) => (
				<View style={styles.ceil} key={i}>
					<Text style={header ? styles.headerText : {} }>
						{x}
					</Text>
				</View>
			))}
		</View>
	)
}

export default TableRow

const styles = StyleSheet.create({
	row: {
		height: 54,
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'row',
		borderTopWidth: 1,
		borderColor: '#ccc'
	},
	headerText: {
		fontWeight: 'bold'
	},
	ceil: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		paddingLeft: 10
	}
})
