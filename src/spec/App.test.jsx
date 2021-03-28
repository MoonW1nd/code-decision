import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

jest.mock('../components/Scene', () => ({
  Scene: () => 'Scene',
}));


it('renders without crashing', () => {
  const wrapperApp = shallow(<App />);

  expect(wrapperApp).toMatchSnapshot();
});
