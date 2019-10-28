import * as React from "react";
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface Props {
    changeTest?: () => {};
    name: string;
    reduxTestState?: string;
}

export class App extends React.Component<Props, {}> {
  render() {
    return (
      <div className='App'>
        <h1>Hello, {this.props.name}. Reducer state is {this.props.reduxTestState || ''}</h1>
        <button onClick={this.props.changeTest}>Change redux state text</button>
      </div>
    );
  }
}

export function mapStateToProps({ test }: StoreState) {
  return {
    reduxTestState: test
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.TestAction>) {
  return {
    changeTest: () => dispatch(actions.changeTest('reduxTestState')),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);