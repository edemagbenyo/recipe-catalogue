import React from 'react';
import '../styles/header.scss';
import IngredientSearch from '../containers/IngredientSearch';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/" exact><h1>Delicias</h1></Link>
    <IngredientSearch />
    <div>
      <span>Get your favourite dish recipe.</span>
    </div>
  </header>
);


export default Header;
