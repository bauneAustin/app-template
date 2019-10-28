import * as React from 'react';
import {shallow} from 'enzyme';
import {App, mapDispatchToProps, mapStateToProps} from '../index';

describe('App', () => {
    let props, state, wrapper: any, instance: any;

    const setInstanceAndWrapper = (_props: any, _state: any) => {
        props = {name: 'test', ..._props};

        state = {test: '', ..._state};

        const appProps = {
            ...props,
            mapDispatchToProps: mapDispatchToProps(jasmine.createSpy('Dispatch')),
            mapStateToProps: mapStateToProps(state)
        };

        wrapper = shallow(<App {...{...appProps}} />);
        instance = wrapper.instance();
    }

    beforeEach(() => {
        setInstanceAndWrapper({}, {});
    });


    it('should shallow render', () => {
        expect(wrapper).toMatchSnapshot();
    });
});