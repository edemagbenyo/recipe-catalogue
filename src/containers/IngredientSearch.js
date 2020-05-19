import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  searchByIngredients,
  setIngredient,
} from '../actions/searchIngredient';

const IngredientSearch = props => {
  const { searchByIngredients, setIngredient } = props;
  const [ingredient, setStateIngredient] = useState('');
  const history = useHistory();

  const submitIngredient = e => {
    e.preventDefault();
    setIngredient(ingredient);
    searchByIngredients(ingredient);
    history.push(`/search/${ingredient}`);
  };
  return (
    <div className="searchForm">
      <form onSubmit={submitIngredient}>
        <label htmlFor="search">
          <input
            id="search"
            type="text"
            placeholder="Search by ingredient"
            name="ingredientInput"
            onChange={e => setStateIngredient(e.target.value)}
            value={ingredient}
          />
          <button type="submit">Search</button>
        </label>
      </form>
    </div>
  );
};
IngredientSearch.defaultProps = {
  searchByIngredients: () => undefined,
  setIngredient: () => undefined,
};
IngredientSearch.propTypes = {
  searchByIngredients: PropTypes.func,
  setIngredient: PropTypes.func,
};

const mapDispathToProps = dispatch => ({
  searchByIngredients: ingredient => dispatch(searchByIngredients(ingredient)),
  setIngredient: ingredient => dispatch(setIngredient(ingredient)),
});

export default connect(null, mapDispathToProps)(IngredientSearch);
