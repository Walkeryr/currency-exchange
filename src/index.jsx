import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logger from "redux-logger";

import App from "App.jsx";
import Account from "account/components/Account/Account.jsx";
import ExchangeContainer from "exchange/components/Exchange/ExchangeContainer.jsx";

import reducers from "./store";

import "./styles.less";

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Router>
        <Switch>
          <Route exact path="/" component={Account} />
          <Route exact path="/exchange/" component={ExchangeContainer} />
        </Switch>
      </Router>
    </App>
  </Provider>,
  document.getElementById("root")
);
