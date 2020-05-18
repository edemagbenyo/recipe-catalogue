import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CategoriesList from '../containers/CategoriesList';
import DishesList from '../containers/DishesList';
import Dish from '../containers/Dish';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchResult from '../containers/SearchResult';
// import SearchResult from '../components/SearchResult';

export default (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/search/:ingredient">
        <SearchResult />
      </Route>
      <Route path="/:categoryId/:dishId">
        <Dish />
      </Route>
      <Route path="/:categoryId">
        <DishesList />
      </Route>

      <Route path="/" component={CategoriesList} />
    </Switch>
    <Footer />
  </Router>
);
