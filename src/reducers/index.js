import {combineReducers} from 'redux';
import dish from './dish';
import filter from './filter';
import categories from './categories';

export default combineReducers({dish,filter,categories})
