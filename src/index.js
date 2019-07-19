import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import AppUsingFunctional from './AppUsingFunctional';
import AppUsingClass from './containers/AppUsingClass';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<AppUsingFunctional />, document.getElementById('root'));
ReactDOM.render(<AppUsingClass title="Person Manager"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
