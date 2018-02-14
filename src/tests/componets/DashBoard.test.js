import React from 'react';
import { shallow } from 'enzyme';
import DashBoard from '../../componets/DashBoard';

test('render dash board', () => {
  const wrapper = shallow(<DashBoard />);
  expect(wrapper).toMatchSnapshot();
});