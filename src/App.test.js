import React from 'react';
import ReactDOM from 'react-dom';
import AppUsingHooks from './AppUsingHooks';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppUsingHooks />, div);
  ReactDOM.unmountComponentAtNode(div);
});
