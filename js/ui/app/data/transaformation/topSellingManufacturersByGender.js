import { task } from 'folktale/data/task';
import { identity } from 'folktale/core/lambda';
import { Map } from 'immutable';

const transform = sales => {
  return sales
    .groupBy(s => s.get('manufacturer'))
    .reduce((counts, list, manufacturer) =>
      counts.set(
        manufacturer,
        list.countBy(i => i.get('gender'))
      ),
      Map()
    )
};

export default transform;
