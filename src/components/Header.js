import React from 'react';
import '../styles/header.scss';
import { Link } from 'react-router-dom';
import IngredientSearch from '../containers/IngredientSearch';

const Header = () => (
  <header>
    <Link to="/">
      <h1>Recipias</h1>
    </Link>
    <IngredientSearch />
    <div>
      <span>Get your favourite dish recipe.</span>
    </div>
  </header>
);

export default Header;
