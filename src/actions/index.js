import { FETCH_ERROR, FETCH_CATEGORIES } from "./types"

export const fetchDishes = (category)=>dispatch =>{

  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+category)
  .then(response=>response.json())
  .then(dishes=>dispatch({
    type:FETCH_CATEGORIES,
    dishes
  }))
  .catch(err=>dispatch({
    type:FETCH_ERROR
  }))
}