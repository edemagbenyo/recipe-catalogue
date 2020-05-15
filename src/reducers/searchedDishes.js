import * as Types from '../actions/types';

export default (state = { dishes: [], ingredient: '' }, action) => {
  switch (action.type) {
    case Types.SET_INGREDIENT:
      return { ...state, ingredient: action.ingredient };
    default:
      return state;
  }
};
