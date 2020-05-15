import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDish } from '../actions/dish';
import { getIngredients } from '../utils/dish';

const Dish = (props) => {
  const { dishId } = useParams();
  const { fetchDish, dish } = props;
  console.log('dish', dish);
  useEffect(() => {
    fetchDish(dishId);
  }, [fetchDish, dishId]);
  const { strMeal, strInstructions, strMealThumb } = dish;
  const ingredients = getIngredients(dish);
  return (
    <div>
      <h1>{strMeal}</h1>
      <img src={strMealThumb} alt={strMeal} />
      <p>Instructions</p>
      <p>{strInstructions}</p>
      <p>Ingredients</p>
      <ul>
        {(ingredients.length === 0) ? <li>No Ingredient available</li> : ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
      </ul>


    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  fetchDish: (dishId) => dispatch(fetchDish(dishId)),
});
const mapStateToProps = (state) => ({
  dish: state.dish,
});
export default connect(mapStateToProps, mapDispatchToProps)(Dish);
