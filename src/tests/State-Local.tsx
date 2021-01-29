import React from 'react';
import ReactDOM, { render } from 'react-dom';
import StateLocal from '../views/State/State-Local';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StateLocal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
