import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import TestAction from '../actions/testAction';

class SplitLayout extends React.Component {
    componentWillMount() {
        this.props.testAction.sampleAction('Redux is wired up.');
    }

    render() {
        return <div className='split-layout'>{this.props.testReduxText}</div>;
    }

}

const mapStateToProps = (state, props) => {
    return {
        testReduxText: state.test.testTextState || '',
    };
};

const mapDispatchToProps = (dispatch) => ({
    testAction: bindActionCreators(TestAction, dispatch),
});

export { SplitLayout, mapStateToProps, mapDispatchToProps };

export default connect(mapStateToProps, mapDispatchToProps)(SplitLayout);
