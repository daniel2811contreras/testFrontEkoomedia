import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter,  routerMiddleware} from 'react-router-redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {createBrowserHistory} from 'history';
import {CookiesProvider} from 'react-cookie';
import reducer from './reducers/rootReducer';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Hstoyr
const history = createBrowserHistory();

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk)
)

/* render app */
ReactDOM.render(<Provider store={store}>
  <ConnectedRouter history={history}>
    <CookiesProvider>
      <App/>
    </CookiesProvider>
  </ConnectedRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
