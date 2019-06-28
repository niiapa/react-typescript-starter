import { shallow } from 'enzyme';
import App from './App';
import * as React from 'react';

describe('<App />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<App />);

		expect(wrapper.exists('div')).toBeTruthy();
	});
});
