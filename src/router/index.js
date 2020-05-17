import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CategoriesList from '../containers/CategoriesList';
import DishesList from '../containers/DishesList';
import Dish from '../containers/Dish';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import SearchResult from '../components/SearchResult';

export default (
  <Router>
    <Header />
    <Switch>
      <Route path="/:categoryId/:dishId">
        <Dish />
      </Route>
      <Route path="/:categoryId">
        <DishesList />
      </Route>
      <Route path="/search/:ingredient">
        <DishesList />
      </Route>
      <Route path="/" component={CategoriesList} />
    </Switch>
    <Footer />
  </Router>
);
