import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  searchByIngredients,
  setIngredient,
} from '../actions/searchIngredient';

const IngredientSearch = (props) => {
  const { searchByIngredients, setIngredient } = props;
  const [ingredient, setStateIngredient] = useState('');
  const submitIngredient = (e) => {
    e.preventDefault();
    setIngredient(ingredient);
    searchByIngredients(ingredient);
  };
  return (
    <div className="searchForm">
      <form onSubmit={submitIngredient}>
        <label>
          <input type="text"
          placeholder="Search by ingredient"
            name="ingredientInput"
            onChange={(e) => setStateIngredient(e.target.value)}
            value={ingredient}
          />
          <button type="submit">Search</button>
        </label>
      </form>
    </div>
  );
};

const mapDispathToProps = (dispatch) => ({
  searchByIngredients: (ingredient) => dispatch(searchByIngredients(ingredient)),
  setIngredient: (ingredient) => dispatch(setIngredient(ingredient)),
});

export default connect(null, mapDispathToProps)(IngredientSearch);
