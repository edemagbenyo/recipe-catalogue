import * as Types from '../actions/types';
export default (state=[],action)=>{
  switch (action.type) {
    case Types.SEARCH_INGREDIENT:
      return action.dishes;
    default:
      return state;
  }
}