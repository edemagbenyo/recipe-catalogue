import { FETCH_ERROR, FETCH_DISHES } from './types';

export const fetchDishes = (category) => (dispatch) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((response) => response.json())
    .then((dishes) => {
      console.log('from url', dishes);
      dispatch({
        type: FETCH_DISHES,
        dishes: dishes.meals,
      });
    })
    .catch((err) => dispatch({
      type: FETCH_ERROR,
    }));
};
