import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CategoriesList from "../containers/CategoriesList";
import RecipesList from "../containers/RecipesList";


export default (
  <Router>
    <Switch>
      <Route exact path="/" component={CategoriesList} />
      <Route path="/:categoryId">
        <RecipesList/>
      </Route>
    </Switch>
  </Router>
);
