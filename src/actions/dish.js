import { FETCH_DISH } from "./types";

export const fetchDish = (dishId) => (dispatch) => {
  fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+dishId)
  .then(response=>response.json())
  .then(dish=>{
    console.log("from url",dish);
    dispatch({
      type:FETCH_DISH,
      dish: dish.meals[0]
    })
  })
  .catch(err=>console.log(err))
};
