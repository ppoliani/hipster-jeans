import { handleActions } from 'redux-actions';
import SalesData from './salesData';
import { GET_SALES_HISTORY } from './salesActions';

const handleGetSalesHistory = (state, action) => state.set('list', action.payload);

export default handleActions({
  [GET_SALES_HISTORY]: handleGetSalesHistory
}, SalesData);
