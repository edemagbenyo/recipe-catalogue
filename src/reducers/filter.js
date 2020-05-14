import * as Types from '../actions/types';
export default (state='all',action)=>{
  switch (action.type) {
    case Types.FILTER:
      return action.filter;
    default:
      return state;
  }
}