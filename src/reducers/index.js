import {combineReducers} from 'redux';
import dish from './dish';
import searched from './searchedDishes';
import categories from './categories';
import dishes from './dishes';

export default combineReducers({dish,searched,categories,dishes})
