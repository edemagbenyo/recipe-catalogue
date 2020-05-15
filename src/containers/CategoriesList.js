import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../actions/categories";
import Category from "../components/Category";
import IngredientSearch from "../components/IngredientSearch";
import { searchByIngredients } from "../actions/searchIngredient";
import { Redirect } from "react-router-dom";

const CategoriesList = (props) => {
  const { categories, fetchCategories, searchByIngredients, dishes } = props;

  const [ingredient, setIngredient] = useState("");
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const submitIngredient = (e) => {
    e.preventDefault();
    searchByIngredients(ingredient);
  };
  return (
    <div>
      {dishes.length > 0 ? (
        <Redirect push to={{ pathname: "/search/" + ingredient }} />
      ) : (
        <div>
          <IngredientSearch
            {...ingredient}
            submitIngredient={submitIngredient}
            onChangeIngredient={(e) => setIngredient(e.target.value)}
          />

          {categories.length === 0 ? (
            <div>Loading...</div>
          ) : (
            categories.map((cat) => <Category key={cat.idCategory} {...cat} />)
          )}
        </div>
      )}
    </div>
  );
};

const mapDispathToProps = (dispatch) => {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories());
    },
    searchByIngredients: (ingredient) =>
      dispatch(searchByIngredients(ingredient)),
  };
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    dishes: state.searched,
  };
};

export default connect(mapStateToProps, mapDispathToProps)(CategoriesList);
