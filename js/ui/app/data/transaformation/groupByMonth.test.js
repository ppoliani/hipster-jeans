import test from 'ava';
import { fromJS } from 'immutable';
import {groupByMonthGlobally} from './groupByMonth';

test.beforeEach(t => {
  t.context.data = fromJS([{
    orderData: '01/01/2017',
    deliveryCountry: 'Germany',
    count: 20
  }, {
    orderData: '01/01/2017',
    deliveryCountry: 'Germany',
    count: 20
  }, {
    orderData: '02/01/2017',
    deliveryCountry: 'Germany',
    count: 20
  }, {
    orderData: '02/01/2017',
    deliveryCountry: 'Italy',
    count: 30
  }, {
    orderData: '03/01/2017',
    deliveryCountry: 'Italy',
    count: 10
  }]);
});

test('it should group by sellings months globally', t => {
  t.deepEqual(groupByMonthGlobally(t.context.data).toJS(), {
    Jan: { total: 40 },
    Feb: { total: 50 },
    March: { total: 10 }
  })
});
