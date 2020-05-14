import {combineReducers} from 'redux';
import dish from './dish';
import filter from './filter';
import categories from './categories';
import dishes from './dishes';

export default combineReducers({dish,filter,categories,dishes})
