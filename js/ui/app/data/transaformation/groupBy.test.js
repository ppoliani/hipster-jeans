import test from 'ava';
import { fromJS } from 'immutable';
import groupBy from './groupBy';

test.beforeEach(t => {
  t.context.data = fromJS([{
    gender: 'female',
    manufacturer: 'tommy',
    count: 20
  }, {
    gender: 'male',
    manufacturer: 'tommy',
    count: 20
  }, {
    gender: 'male',
    manufacturer: 'tommy',
    count: 20
  }, {
    gender: 'male',
    manufacturer: 'armani',
    count: 20
  }, {
    gender: 'female',
    manufacturer: 'armani',
    count: 10
  }]);
});

test('it should turn the raw data into a group by collection based on the sepcified properties', t => {
  t.deepEqual(groupBy('manufacturer', 'gender', t.context.data).toJS(), {
    tommy: {
      female: 20,
      male: 40
    },
    armani: {
      female: 10,
      male: 20
    }
  })
});
