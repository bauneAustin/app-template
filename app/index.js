import React from "react";
import ReactDOM from 'react-dom';

// Components
import SplitLayout from './components/splitLayout.js';

// Assets
require('./assets/sass/app');

ReactDOM.render(
    <SplitLayout />,
    document.getElementById('app')
);