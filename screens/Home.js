import React, { useContext } from 'react'
import { Link } from '../components'
import { AuthContext } from '../contexts/AuthContext'
import { View, StyleSheet } from 'react-native'

const HomeScreen = () => {
	const { signOut } = useContext(AuthContext)

	return (
		<View style={styles.background}>
			<Link text="Log out" onPress={signOut} />
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
		paddingTop: '40%',
		paddingBottom: '20%'
	}
})
