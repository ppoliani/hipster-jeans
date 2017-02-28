import test from 'ava';
import task  from 'folktale/data/task';
import { List } from 'immutable';
import AsyncData from '../AsyncData';
import { getSalesHistoryRoot, GET_SALES_HISTORY } from './salesActions';

test.beforeEach(t => {
  t.context.data = [{
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
  }];
});

test('should contain the correct type', t => {
  const fetch = () => task.of(t.context.data);
  const action = getSalesHistoryRoot(fetch)();

  t.is(action.type, GET_SALES_HISTORY);
});

test('should return an action that has a payload of type task', t => {
  const fetch = () => task.of(t.context.data);
  const action = getSalesHistoryRoot(fetch)();

  t.truthy(action.payload instanceof task._Task);
});

test('it should return an immutable List', t => {
  const fetch = () => task.of(t.context.data);
  const action = getSalesHistoryRoot(fetch)();

  return action.payload.run().promise()
    .then(result => {
      t.truthy(List.isList(result));
    }
  );
});

test('should get a sales data fromt the api', t => {
  const fetch = () => task.of(t.context.data);
  const action = getSalesHistoryRoot(fetch)();

  return action.payload.run().promise()
    .then(actual => {
      t.deepEqual(actual.toJS(), t.context.data);
    }
  );
});
