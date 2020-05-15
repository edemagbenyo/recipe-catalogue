import React from 'react';
import '../styles/header.scss';
import IngredientSearch from '../containers/IngredientSearch';

const Header = () => (
  <header>
    <h1>Delicias</h1>
    <IngredientSearch />
    <div>
      <span>Get your favourite dish recipe.</span>
    </div>
  </header>
);


export default Header;
