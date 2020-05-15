import { SEARCH_INGREDIENT } from "./types"

export const searchByIngredients = (ingredient)=>dispatch =>{
  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i='+ingredient)
  .then(response=>response.json())
  .then(dishes=>{
    console.log(dishes.meals);
    dispatch({
      type:SEARCH_INGREDIENT,
      dishes: dishes.meals
    })
  })
  .catch(err=>console.log(err))
}