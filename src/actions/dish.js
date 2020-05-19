import { FETCH_DISH, FETCHING_DISH } from './types';

const fetchDish = dishId => dispatch => {
  dispatch({
    type: FETCHING_DISH,
    isFetching: true,
    isSearching: true,
  });
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dishId}`)
    .then(response => response.json())
    .then(dish => {
      dispatch({
        type: FETCH_DISH,
        dish: dish.meals[0],
      });
    })
    .catch(err => err);
};

export { fetchDish };
