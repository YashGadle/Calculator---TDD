import React from 'react';

import { shallow, ShallowWrapper } from './setupTest';

import App from './App';
import Calculator from './components/Calculator';

describe('App,', () => {
	let wrapper: ShallowWrapper<
		any,
		Readonly<{}>,
		React.Component<{}, {}, any>
	>;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('should render  div.', () => {
		wrapper = shallow(<App />);
		expect(wrapper.find('div').length).toEqual(1);
	});

	it('should render Calculator component.', () => {
		expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
	});
});
