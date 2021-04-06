import { shallow } from 'enzyme';
import React from 'react';
import { View, TextInput, Platform } from 'react-native';
import { useCRUD } from '../'

const example = {
	"description": "123123", "title": "123", "amount": 100,
	"date": new Date(), "type": { "key": "Income", "label": "Income", },
	"category": { "key": "Freelance", "label": "Freelance", },
}

const services = {
	get: async () => ({}),
	add: async item => ({ id: 3 }),
	edit: async item => ({ id: item.id }),
	remove: async id => ({ id })
}

const Test = props => {
	const hook = props.hook(
		services.get, services.add, services.edit, services.remove
	)
	return <View {...hook} />
}

const getProps = (wrapper, select) => wrapper
			.find(Platform.select({ default: select }))
			.props()

describe('custom hook: useCRUD', () => {
	it('adds elements with id', async () => {
		const wrapper = shallow(<Test hook={useCRUD}></Test>)
		const { handleAdd } = getProps(wrapper, 'View')
		await handleAdd(example)
		const { state } = getProps(wrapper, 'View')
		expect(state[0].id).toBeGreaterThan(0)
		expect(state).toEqual([{ ...example, id: state[0].id }])
	})
	it('removes element', async () => {
		const wrapper = shallow(<Test hook={useCRUD}></Test>)
		const { handleAdd, handleRemove } = getProps(wrapper, 'View')
		await handleAdd(example)
		let props = getProps(wrapper, 'View')
		await handleRemove(props.state[0].id)
		props = getProps(wrapper, 'View')
		expect(props.state).toEqual([])
	})
})
