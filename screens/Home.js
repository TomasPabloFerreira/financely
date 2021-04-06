import React, { useContext } from 'react'
import { Link } from '../components'
import { AuthContext } from '../contexts/AuthContext'
import { View, StyleSheet, Text } from 'react-native'

const rows = [
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 1 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 2 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 3 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 4 },
	{ date: '2020-01-01', type: 'Outcome', category: 'Freelance', amount: 10000, id: 5 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 6 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 7 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 8 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 9 },
	{ date: '2020-01-01', type: 'Outcome', category: 'Freelance', amount: 5, id: 10 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 11 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 12 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 13 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 14 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 15 },
	{ date: '2020-01-01', type: 'Outcome', category: 'Freelance', amount: 10000, id: 16 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 17 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 18 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 19 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 20 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 21 },
	{ date: '2020-01-01', type: 'Income', category: 'Freelance', amount: 10000, id: 22 },
]

const HomeScreen = () => {
	const { signOut } = useContext(AuthContext)
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
		</View>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	background: {
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
		marginTop: 40,
		fontSize: 26
	}
})
