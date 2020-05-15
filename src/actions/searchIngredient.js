import { SET_INGREDIENT, FETCH_DISHES } from './types';


export const setIngredient = (ingredient) => ({
  type: SET_INGREDIENT,
  ingredient,
});
export const searchByIngredients = (ingredient) => (dispatch) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((response) => response.json())
    .then((dishes) => {
      
      dispatch({
        type: FETCH_DISHES,
        dishes: dishes.meals||[],
      });
    })
    .catch((err) => console.log(err));
};
