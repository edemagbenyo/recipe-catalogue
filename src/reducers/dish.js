import * as Types from '../actions/types';

export default (state = {}, actions) => {
  switch (actions.type) {
    case Types.FETCH_DISH:
      return actions.dish;
    default:
      return state;
  }
};
