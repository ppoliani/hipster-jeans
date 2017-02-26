import { Map } from 'immutable';

// take the raw data as they come from the API and
// turn it into a map grouped by the given properties
// i.e. raw data -> { Germany: { Female: 1200, Male: 100 } }
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
