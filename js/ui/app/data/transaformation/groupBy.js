import { task } from 'folktale/data/task';
import { identity } from 'folktale/core/lambda';
import { Map } from 'immutable';

export default (propA, propB, sales) => {
  return sales
    .groupBy(s => s.get(propA))
    .reduce((counts, list, key) =>
      counts.set(
        key,
        list.reduce((acc, i) =>
          acc.update(
            i.get(propB),
            (sum = 0) => sum + i.get('count')
          ),
          Map()
        )
      ),
      Map()
    )
};
