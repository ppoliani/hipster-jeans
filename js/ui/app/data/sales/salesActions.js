import { curry } from 'folktale/core/lambda';
import compose from 'folktale/core/lambda/compose';
import map  from 'folktale/core/fantasy-land/map';
import { createAction } from 'redux-actions';
import fetch from '../../helpers/api';

export const GET_SALES_HISTORY= 'SALES::GET_SALES_HISTORY';

const DUMMY_URL = 'https://jsonplaceholder.typicode.com/posts/1';

export const getSalesHistoryRoot = (fetch) => {
  // ToDo(Pavlos): construct the url with the search criteria
  const getUrl = searchCriteria => DUMMY_URL;
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
