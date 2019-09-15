import React from 'react';

import { shallow } from './setupTest';

import App from './App';

describe('App,', () => {
	it('should render  div.', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('div').length).toEqual(1);
	});
});
