import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('expect to render app component', () => {
    expect(shallow(<App/>)).toMatchSnapshot();
});
