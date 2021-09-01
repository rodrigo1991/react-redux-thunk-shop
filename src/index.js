/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './redux/configureStore';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <App />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
serviceWorkerRegistration.register();
