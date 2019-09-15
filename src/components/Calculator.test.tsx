import React from 'react';

import { shallow, ShallowWrapper } from '../setupTest';

import Calculator from './Calculator';
import Display from './Display';
import Keypad from './Keypad';

describe('Calculator', () => {
	let wrapper: ShallowWrapper<
		any,
		Readonly<{}>,
		React.Component<{}, {}, any>
	>;

	beforeEach(() => {
		wrapper = shallow(<Calculator />);
	});

	it('should render a div.', () => {
		expect(wrapper.find('div').length).toEqual(1);
	});

	it('should render Display component.', () => {
		expect(wrapper.containsMatchingElement(<Display />)).toEqual(true);
	});

	it('should render Keypad component.', () => {
		expect(wrapper.containsMatchingElement(<Keypad />)).toEqual(true);
	});
});
