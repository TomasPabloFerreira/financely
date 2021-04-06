import React, { useState, useEffect, useContext } from 'react'
import { Link, Table, Button } from '../components'
import { AuthContext } from '../contexts/AuthContext'
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native'
import { transactionsService } from '../services'

const HomeScreen = () => {
	const { signOut } = useContext(AuthContext)
	const [rows, setRows] = useState([])
	const [loading, setLoading] = useState(true)

	const handleAdd = () => {
		console.log('add')
	}

	const fetchTransactions = async () => {
		setLoading(true)
		const { transactions } = await transactionsService.getTransactions()
		setRows(transactions)
		setLoading(false)
	}

	useEffect(() => {
		fetchTransactions()
	}, [])

	const balance = rows.reduce(
		(acc, x) => acc + (x.type === 'Income' ? x.amount : (-x.amount) ),
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
				<Button title="Create" onPress={handleAdd} />
			</View>
			{ loading
			?	<ActivityIndicator color="#666" size="large" style={styles.loading} />
			:	<Table
					columns={['Date', 'Type', 'Category', 'Amount']}
					handleEdit={id => console.log('edit', id)}
					handleRemove={id => console.log('remove', id)}
					rows={rows}
				/>
			}
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
