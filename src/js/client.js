
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Products from "./pages/Products";
import Layout from "./pages/Layout";
import Readme from "./pages/Readme";

import configureStore from './stores/store';
import { Provider } from 'react-redux';


let initialState = {
  products: [
    {
      id: 113464613,
      text: "TV Series One from Store",
      live: false
    },
    {
      id: 235684679,
      text: "TV Series Two from Store",
      live: false
    }
  ]
}

let store = configureStore(initialState);
const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Products}></IndexRoute>
        <Route path="readme" component={Readme}></Route>
      </Route>
    </Router>
  </Provider>,
app)
