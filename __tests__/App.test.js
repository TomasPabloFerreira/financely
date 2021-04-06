import { shallow } from 'enzyme';
import React from 'react';
import App from '../App'
import { StatusBar } from 'expo-status-bar';
 
describe('app', () => {
	it(`renders with status bar`, () => {
		const wrapper = shallow(<App />);
		expect(wrapper.containsMatchingElement(<StatusBar />)).toEqual(true)
	})
})
