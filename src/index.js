import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App');
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
