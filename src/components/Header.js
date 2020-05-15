import React from 'react';
import '../styles/header.scss';
import IngredientSearch from '../containers/IngredientSearch';

 const Header = () => {
  return (
    <header>
      <h1>Catalogue of foods</h1>
      <IngredientSearch/>
    </header>
  );
};


export default Header;