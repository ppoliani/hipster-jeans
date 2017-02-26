import { task } from 'folktale/data/task';
import { identity } from 'folktale/core/lambda';
import { Map } from 'immutable';

export const groupByMonthGlobally = sales => {
  return sales
    .groupBy(s => s.get('orderDate'))
    // .reduce((counts, list, manufacturer) =>
    //   counts.set(
    //     manufacturer,
    //     list.countBy(i => i.get(propB))
    //   ),
    //   Map()
    // )
};
