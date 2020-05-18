import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchDish } from '../actions/dish';
import { getIngredients } from '../utils/dish';
import '../styles/dish.scss';
import { Loading } from '../components/Loading';

const Dish = props => {
  const { dishId } = useParams();
  const { fetchDish, dish } = props;
  useEffect(() => {
    fetchDish(dishId);
  }, [fetchDish, dishId]);
  const { strMeal, strInstructions, strMealThumb } = dish;
  const ingredients = getIngredients(dish);
  let i = 0;

  return (
    <div className="dish-container">
      {Object.keys(dish).length <= 0 ? (<Loading/>) : (
        <div className="dish">
          <h1>{strMeal}</h1>
          <img src={strMealThumb} alt={strMeal} />
          <div className="instructions">
            <h3>Instructions</h3>
            <p>{strInstructions}</p>
          </div>
          <div className="ingredients">
            <h3>Ingredients</h3>
            <ul>
              {ingredients.length === 0 ? (
                <li>No Ingredient available</li>
              ) : (
                ingredients.map(ingredient => {
                  i += 1;
                  return <li key={i}>{ingredient}</li>;
                })
              )}
            </ul>
          </div>
        </div>
      )}

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
