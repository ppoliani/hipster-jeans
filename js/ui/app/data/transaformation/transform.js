import { task } from 'folktale/data/task';
import { identity } from 'folktale/core/lambda';
import { Map } from 'immutable';

const transform = (propA, propB, sales) => {
  return sales
    .groupBy(s => s.get(propA))
    .reduce((counts, list, manufacturer) =>
      counts.set(
        manufacturer,
        list.countBy(i => i.get(propB))
      ),
      Map()
    )
};

export default transform;
