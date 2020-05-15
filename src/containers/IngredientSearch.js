import React, { useState } from "react";
import { connect } from "react-redux";
import {
  searchByIngredients,
  setIngredient,
} from "../actions/searchIngredient";

const IngredientSearch = (props) => {
  const { searchByIngredients,setIngredient } = props;
  const [ingredient, setStateIngredient] = useState("");
  const submitIngredient = (e) => {
    e.preventDefault();
    setIngredient(ingredient)
    searchByIngredients(ingredient);
  };
  return (
    <div>
      <form onSubmit={submitIngredient}>
        <label>
          Filter by Ingredients
          <input
            name="ingredientInput"
            onChange={(e) => setStateIngredient(e.target.value)}
            value={ingredient}
          />
        </label>
      </form>
    </div>
  );
};

const mapDispathToProps = (dispatch) => {
  return {
    searchByIngredients: (ingredient) =>
      dispatch(searchByIngredients(ingredient)),
    setIngredient: (ingredient) => dispatch(setIngredient(ingredient)),
  };
};

export default connect(null, mapDispathToProps)(IngredientSearch);
