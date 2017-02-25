import { handleActions } from 'redux-actions';
import SalesData from './salesData';
import { GET_SEARCH_RESULTS } from './salesActions';

const handleGetSalesHistory = (state, action) => state.set('salesHistory', action.payload);

export default handleActions({
  [GET_SEARCH_RESULTS]: handleGetSalesHistory
}, SalesData);
