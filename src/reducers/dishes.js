import { FETCH_DISHES } from "../actions/types";

export default (state=[],action)=>{
  switch (action.type) {
    case FETCH_DISHES:
      return [...state, ...action.dishes]
    default:
      return state
  }
}