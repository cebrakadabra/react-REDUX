import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Products from "./pages/Products";
import Layout from "./pages/Layout";
import Readme from "./pages/Readme";

export default [

  <Route path="/" component={Layout}>
    <IndexRoute component={Products}></IndexRoute>
    <Route path="readme" component={Readme}></Route>
  </Route>

];
