import React from 'react';
import ReactDOM from 'react-dom';
import AppUsingFunctional from './containers/AppUsingFunctional';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppUsingFunctional />, div);
  ReactDOM.unmountComponentAtNode(div);
});
