import React from 'react';

import { shallow, ShallowWrapper } from '../setupTest';

import Display from './Display';

describe('Display,', () => {
	let wrapper: ShallowWrapper<
		any,
		Readonly<{}>,
		React.Component<{}, {}, any>
	>;

	beforeEach(() => {
		wrapper = shallow(<Display displayValue="" />);
	});

	it('should render correctly', () => expect(wrapper).toMatchSnapshot());

	it('should render a div', () => {
		expect(wrapper.find('div').length).toEqual(1);
	});

	it('should render a displayValue.', () => {
		const VALUE = '0.00';
		wrapper.setProps({ displayValue: VALUE });
		expect(wrapper.text()).toEqual(VALUE);
	});
});
