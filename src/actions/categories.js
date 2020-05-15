import * as Types from './types';

export const fetchCategories = () => (dispatch) => {
  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((response) => response.json())
    .then((categories) => {
      dispatch({
        type: Types.FETCH_CATEGORIES,
        categories: categories.categories,
      });
    })
    .catch((error) => console.log(error));
};
