import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CategoriesList from "../containers/CategoriesList";
import DishesList from "../containers/DishesList";
import Dish from "../containers/Dish";


export default (
  <Router>
    <Switch>
      <Route exact path="/" component={CategoriesList} />
      <Route exact path="/:categoryId">
        <DishesList/>
      </Route>
      <Route path="/:categoryId/:dishId">
        <Dish/>
      </Route>
    </Switch>
  </Router>
);
