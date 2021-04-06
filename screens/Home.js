import React, { useState, useEffect, useContext } from 'react'
import { Link, Table, Button } from '../components'
import { AuthContext } from '../contexts/AuthContext'
import { View, StyleSheet, Text, ActivityIndicator, Modal } from 'react-native'
import { transactionsService } from '../services'
import { useCRUD } from '../hooks'
import { FormModal } from '.'

const HomeScreen = () => {
	const { signOut } = useContext(AuthContext)

	const [formVisible, setFormVisible] = useState(false)

	const { handleAdd, handleEdit, handleRemove, loading, state: rows } = useCRUD(
		transactionsService.getTransactions,
		transactionsService.addTransaction,
		transactionsService.editTransaction,
		transactionsService.removeTransaction
	)

	const balance = rows.reduce(
		(acc, x) => acc + (x.type.key === 'Income' ? x.amount : (-x.amount) ),
		0
	)

	return (
		<View style={styles.background}>
			<View style={styles.logoutLinkContainer}>
				<Link text="Log out" onPress={signOut} />
			</View>
			<Text style={styles.balanceText}>Balance: ${balance}</Text>
			<View style={styles.info}>
				<Text>Swipe right to see actions</Text>
				<Button title="Create" onPress={() => setFormVisible(true)} />
			</View>
			{ loading
				?	<ActivityIndicator
						color="#666"
						size="large"
						style={styles.loading}
					/>
				:	<Table
						columns={['Date', 'Type', 'Category', 'Amount']}
						handleEdit={id => console.log('edit', id)}
						handleRemove={handleRemove}
						rows={rows}
					/>
			}
			<FormModal
				formVisible={formVisible}
				close={() => {setFormVisible(false)}}
				handleAdd={handleAdd}
			/>

		</View>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	background: {
		backgroundColor: 'rgb(40,245,140)',
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: '20%',
		paddingBottom: '20%'
	},
	logoutLinkContainer: {
		width: '100%',
		marginRight: 60,
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	balanceText: {
		marginVertical: 40,
		fontSize: 26
	},
	info: {
		width: '90%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	loading: {
		marginTop: '50%'
	}
})
