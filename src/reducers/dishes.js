import { FETCH_DISHES, FETCHING } from '../actions/types';

export default (state = { dishes: [], isFetching: false, isSearching: false }, action) => {
  switch (action.type) {
    case FETCH_DISHES:
      return {
        ...state, dishes: action.dishes, isFetching: false, isSearching: true,
      };
    case FETCHING:
      return { ...state, isFetching: true };
    default:
      return state;
  }
};
