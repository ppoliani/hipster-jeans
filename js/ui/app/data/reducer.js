import { combineReducers } from 'redux';
import salesReducer from './sales/salesReducer';

export default combineReducers({
  sales: salesReducer
});
