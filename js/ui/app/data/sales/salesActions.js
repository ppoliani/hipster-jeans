import { curry } from 'folktale/core/lambda';
import compose from 'folktale/core/lambda/compose';
import map  from 'folktale/core/fantasy-land/map';
import { createAction } from 'redux-actions';
import fetch from '../../helpers/api';

export const GET_SALES_HISTORY= 'SALES::GET_SALES_HISTORY';

const URL = 'localhost:8083/sales';

export const getSalesHistoryRoot = (fetch) => {
  // ToDo(Pavlos): construct the url with the search criteria
  const getUrl = _ => URL;
  const fetchData = compose(fetch, getUrl);

  const transformData = salesHistory => {
    //Todo(Pavlos): implement the real transformation function
    return salesHistory;
  }

  return createAction(
    GET_SALES_HISTORY,
    compose(
      map.curried(transformData),
      fetchData
    )
  );
};

export const getSalesHistory = curry(1, getSalesHistoryRoot)(fetch);
