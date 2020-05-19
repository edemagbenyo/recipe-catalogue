import * as Types from '../actions/types';

export default (state = { ingredient: '' }, action) => {
  switch (action.type) {
    case Types.FETCHING:
      return { ...state, isFetching: true, isSearching: false };
    case Types.SET_INGREDIENT:
      return { ...state, ingredient: action.ingredient };
    default:
      return state;
  }
};
