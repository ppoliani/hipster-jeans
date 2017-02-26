import test from 'ava';
import { fromJS } from 'immutable';
import {groupByMonthGlobally, groupByMonthByCountry} from './groupByMonth';

test.beforeEach(t => {
  t.context.data = fromJS([{
    orderDate: '01/01/2017',
    deliveryCountry: 'Germany',
    count: 20
  }, {
    orderDate: '01/01/2017',
    deliveryCountry: 'Germany',
    count: 20
  }, {
    orderDate: '02/01/2017',
    deliveryCountry: 'Germany',
    count: 20
  }, {
    orderDate: '02/01/2017',
    deliveryCountry: 'Italy',
    count: 30
  }, {
    orderDate: '03/01/2017',
    deliveryCountry: 'Italy',
    count: 10
  }]);
});

test('it should group by selling months globally', t => {
  t.deepEqual(groupByMonthGlobally(t.context.data).toJS(), {
    Jan: { total: 40 },
    Feb: { total: 50 },
    March: { total: 10 }
  })
});

test('it should group by selling months by country', t => {
  t.deepEqual(groupByMonthByCountry(t.context.data).toJS(), {
    Jan: { Germany: 40 },
    Feb: { Germany: 20, Italy: 30 },
    March: { Italy: 10 }
  })
});
