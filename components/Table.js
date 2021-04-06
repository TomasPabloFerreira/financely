import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { default as Row } from './TableRow'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import LeftSwipeActions from './LeftSwipeActions'

const Table = ({ columns, rows, handleRemove, handleEdit }) => {
	const renderItem = ({ item }) => {
		return(
			<Swipeable
				renderLeftActions={() =>
					<LeftSwipeActions
						handleRemove={() => handleRemove(item.id)}
						handleEdit={() => handleEdit(item)}
					/>
				}
			>
				<Row columns={columns.map(x => item[x.toLowerCase()])}/>
			</Swipeable>
		)
	}

	return(
		<View style={styles.table}>
			<View style={styles.header}>
				<Row columns={columns} header={true} />
			</View>
			<FlatList
				data={rows}
				renderItem={renderItem}
				keyExtractor={x => String(x.id)}
			/>
		</View>
	)
}

export default Table

const styles = StyleSheet.create({
	table: {
		flex: 1,
		width: '100%'
	},
	header: {
		borderBottomWidth: 1,
		borderBottomColor: '#ccc'
	}
})
