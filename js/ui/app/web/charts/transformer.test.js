import test from 'ava';
import { fromJS } from 'immutable';
import transform from './transformer';

test.beforeEach(t => {
  t.context.data = fromJS({
    tommy: {
      female: 20,
      male: 40
    },
    armani: {
      female: 10,
      male: 20
    }
  });
});

test('it should transform the data structure to a shape that recharts understands', t => {
  t.deepEqual(transform(t.context.data).toJS(), [
    { name: 'tommy', female: 20, male: 40 },
    { name: 'armani', female: 10, male: 20 }
  ]);
});
