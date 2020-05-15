import * as Types from '../actions/types';
export default (state={dishes:[],ingredient:''},action)=>{
  switch (action.type) {
    case Types.SEARCH_INGREDIENT:
      return {...state, dishes:action.dishes};
    case Types.SET_INGREDIENT:
      return {...state,ingredient:action.ingredient}
    default:
      return state;
  }
}