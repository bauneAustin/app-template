import * as React from 'react';
import {shallow} from 'enzyme';
import App from '../index';

describe('App', () => {
    it('should shallow render', () => {
        expect(shallow(<App name={'test'}/>)).toMatchSnapshot();
    });
});