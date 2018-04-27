import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import {getAbstractBackground} from "./helpers/backgrounds";

it('renders without crashing', () => {
    console.log(getAbstractBackground);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
