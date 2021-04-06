import { shallow } from 'enzyme';
import React from 'react';
import { View, TextInput, Platform } from 'react-native';
import { useForm } from '../'

const Test = props => {
	const initialState = { name: '' }
	const onSubmit = () => {}

	const hook = props.hook(initialState, props.onSubmit || onSubmit)
	return <View {...hook} />
}

const getProps = (wrapper, select) => wrapper
			.find(Platform.select({ default: select }))
			.props()

describe('custom hook: useForm', () => {
	it('subscribes to changes', () => {
		const wrapper = shallow(<Test hook={useForm}></Test>)
		const { subscribe } = getProps(wrapper, 'View')
		shallow(
			<TextInput onChangeText={subscribe('name')} />
		).simulate('changeText', 'steve')
		const { inputs } = getProps(wrapper, 'View')
		expect(inputs.name).toEqual('steve')
	})

	it('submits correctly', () => {
		const initialState = { name: 'steve', password: '1234' }
		const onSubmit = jest.fn()
		const wrapper = shallow(
			<Test hook={() => useForm(initialState, onSubmit)} />
		)
		const { submit } = getProps(wrapper, 'View')
		submit()
		expect(onSubmit.mock.calls).toEqual([[{ name: 'steve', password: '1234' }]])
	})
})
