import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchDish } from '../actions/dish';
import { getIngredients } from '../utils/dish';

const Dish = props => {
  const { dishId } = useParams();
  const { fetchDish, dish } = props;
  useEffect(() => {
    fetchDish(dishId);
  }, [fetchDish, dishId]);
  const { strMeal, strInstructions, strMealThumb } = dish;
  const ingredients = getIngredients(dish);
  return (
    <div className="dish">
      <h1>{strMeal}</h1>
      <img src={strMealThumb} alt={strMeal} />
      <p>Instructions</p>
      <p>{strInstructions}</p>
      <p>Ingredients</p>
      <ul>
        {ingredients.length === 0 ? (
          <li>No Ingredient available</li>
        ) : (
          ingredients.map(ingredient => {
            let i = 0;
            i += 1;
            return <li key={i}>{ingredient}</li>;
          })
        )}
      </ul>
    </div>
  );
};

Dish.defaultProps = {
  dish: {
    strMeal: '',
    strInstructions: '',
    strMealThumb: '',
  },
  fetchDish: () => undefined,
};
Dish.propTypes = {
  dish: PropTypes.shape({
    strMeal: PropTypes.string,
    strInstructions: PropTypes.string,
    strMealThumb: PropTypes.string,
  }),
  fetchDish: PropTypes.func,
};
const mapDispatchToProps = dispatch => ({
  fetchDish: dishId => dispatch(fetchDish(dishId)),
});
const mapStateToProps = state => ({
  dish: state.dish,
});
export default connect(mapStateToProps, mapDispatchToProps)(Dish);
