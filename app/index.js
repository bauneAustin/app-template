import React from "react";
import ReactDOM from 'react-dom';
import reducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Components
import SplitLayout from './components/splitLayout.js';

// Assets
require('./assets/sass/app');


const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <SplitLayout />
    </Provider>,
    document.getElementById('app')
);