import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { testChange } from './reducers/index';
import { StoreState } from './types/index';
import App from './app';

const store = createStore<StoreState, any, any, any>(testChange, {
  test: '',
});

import './assets/index.scss';

ReactDOM.render(
    <Provider store={store}>
        <App name='Test'/>
    </Provider>, document.getElementById("root") as HTMLElement
);
