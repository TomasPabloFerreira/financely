import React from 'react'
import { Modal, View, StyleSheet } from 'react-native'
import { Button, TextInput } from '../components'
import { useForm } from '../hooks'
import ModalSelector from 'react-native-modal-selector'
import NumericInput from 'react-native-numeric-input'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useEffect } from 'react/cjs/react.development'

const categoryOptions = [
	{ key: 'Freelance', label: 'Freelance'},
	{ key: 'Fees', label: 'Fees'},
	{ key: 'Taxes', label: 'Taxes'},
]

const typeOptions = [
	{ key: 'Outcome', label: 'Outcome'},
	{ key: 'Income', label: 'Income'}
]

const FormModal = ({ formVisible, close, handleEdit, handleAdd, initialValue }) => {

	const onSubmit = () => {
		if(initialValue)
			handleEdit(inputs)
		else
			handleAdd(inputs)
		close()
	}

	const initialState = initialValue || {
		title: '', category: '', type: '', description: '', amount: 0, date: new Date()
	}
	const { subscribe, inputs, submit, reset } = useForm(initialState, onSubmit)

	const allowAdd = inputs.title && inputs.type && inputs.category

	useEffect(() => {
		reset(initialState)
	}, [formVisible])

	return(
		<Modal
			animationType="slide"
			visible={formVisible}
		>
			<View style={styles.container}>
				<View style={styles.formContainer}>
					<TextInput
						placeholder="Title (*)"
						value={inputs.title}
						onChangeText={subscribe('title')}
					/>
					<View style={{ width: '100%'}}>
						<ModalSelector
							initValue="Type (*)"
							data={typeOptions}
							onChange={subscribe('type')}
						>
							<View style={styles.selectorWrapper}>
								<TextInput
									value={inputs.type.key}
									onChangeText={subscribe('type')}
									placeholder="Type (*)"
								/>
							</View>
						</ModalSelector>
						<ModalSelector
							initValue="Category (*)"
							data={categoryOptions}
							onChange={subscribe('category')}
						>
							<View style={styles.selectorWrapper}>
								<TextInput
									value={inputs.category.key}
									onChangeText={subscribe('category')}
									placeholder="Category (*)"
								/>
							</View>
						</ModalSelector>
					</View>
					<TextInput
						placeholder="Description"
						value={inputs.description}
						onChangeText={subscribe('description')}
					/>
					<NumericInput
						onChange={subscribe('amount')}
						totalWidth={300}
						totalHeight={50}
						rounded={true}
						rightButtonBackgroundColor='rgb(40,245,140)'
						leftButtonBackgroundColor='rgb(40,245,140)'
						value={inputs.amount}
					/>
					<View style={styles.dateTimePickerContainer}>
						<DateTimePicker
							value={inputs.date || new Date()}
							style={styles.dateTimePicker}
							mode="datetime"
							onChange={(e, x) => subscribe('date')(x)}
						/>
					</View>
				</View>
				<View style={styles.buttons}>
					<Button title="Cancel" onPress={close} />
					<Button title="Save" onPress={submit}  disabled={!allowAdd} />
				</View>
			</View>
		</Modal>
	)
}

export default FormModal
const styles = StyleSheet.create({
	container: {
		marginTop: '40%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end'
	},
	buttons: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},
	formContainer: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	selectorWrapper: {
		display: 'flex',
		alignItems: 'center',
		width: '100%'
	},
	dateTimePickerContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16
	},
	dateTimePicker: {
		width: '80%',
	}
})
