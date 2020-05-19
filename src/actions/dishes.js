import { FETCH_ERROR, FETCH_DISHES, FETCHING } from './types';

const fetchDishes = category => dispatch => {
  dispatch({
    type: FETCHING,
    isFetching: true,
    isSearching: true,
  });
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(response => response.json())
    .then(dishes => {
      dispatch({
        type: FETCH_DISHES,
        dishes: dishes.meals || [],
      });
    })
    .catch(err => dispatch({
      type: FETCH_ERROR,
      error: err,
    }));
};

export { fetchDishes };
