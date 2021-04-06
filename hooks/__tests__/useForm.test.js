import { shallow } from 'enzyme';
import React from 'react';
import { View, TextInput, Platform } from 'react-native';
import { useForm } from '../'

const Test = props => {
	const initialState = { name: '' }
	const onSubmit = () => {}

	const hook = props.hook(initialState, onSubmit)
	return (
		<View {...hook}>
			{props.children}
		</View>
	)
}

const getProps = (wrapper, select) => wrapper
			.find(Platform.select({ default: select }))
			.props()

describe('custom hook: useForm', () => {
	it('subscribes to changes', () => {
		const wrapper = shallow(
			<Test hook={() => useForm(initialState, onSubmit)}></Test>
		)
		const { subscribe } = getProps(wrapper, 'View')
		shallow(
			<TextInput onChangeText={subscribe('name')} />
		).simulate('changeText', 'steve')
		const { inputs } = getProps(wrapper, 'View')
		expect(inputs.name).toEqual('steve')
	})
})
