import { configure, shallow, render, mount, ShallowWrapper } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export { shallow, render, mount, ShallowWrapper };
