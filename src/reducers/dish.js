import * as Types from '../actions/types';

export default (state = { dish: {}, isFetching: false }, actions) => {
  switch (actions.type) {
    case Types.FETCHING_DISH:
      return { ...state, isFetching: true };
    case Types.FETCH_DISH:
      return { ...state, dish: actions.dish, isFetching: false };
    default:
      return state;
  }
};
