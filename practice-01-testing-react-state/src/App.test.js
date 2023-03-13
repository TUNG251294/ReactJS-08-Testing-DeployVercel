import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
// dùng method shallow để mô phỏng cây DOM    
describe('App component', () => {
    it('Start with default value', () => {
        const component = shallow(<App />);
        const expectedValue = 'Learn React';
        const defaultValue = component.find('div.default-value').text();
        expect(defaultValue).toEqual(expectedValue);
    });
});