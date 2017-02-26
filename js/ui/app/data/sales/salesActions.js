import { curry } from 'folktale/core/lambda';
import compose from 'folktale/core/lambda/compose';
import map  from 'folktale/core/fantasy-land/map';
import { fromJS } from 'immutable';
import { createAction } from 'redux-actions';
import fetch from '../../helpers/api';

export const GET_SALES_HISTORY= 'SALES::GET_SALES_HISTORY';

export const getSalesHistoryRoot = (fetch) => {
  // ToDo(Pavlos): construct the url with the search criteria
  const getUrl = _ => `${process.env.API_URL}/sales`;
  const fetchData = compose(fetch, getUrl);

  return createAction(
    GET_SALES_HISTORY,
    compose(
      map.curried(fromJS),
      fetchData
    )
  );
};

export const getSalesHistory = getSalesHistoryRoot(fetch);
