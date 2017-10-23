// React
import React from 'react';
import ReactDOM from 'react-dom';

// NPM Modules
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import reduxThunk from 'redux-thunk';

// Local Files & Components
import './index.css';
import App from './App';
import rootReducer from './reducers/index.js';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));
let history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();