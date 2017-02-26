import { task } from 'folktale/data/task';
import { identity } from 'folktale/core/lambda';
import { Map, List } from 'immutable';

const MONTHS = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec'
};

const getMonthString = date => MONTHS[date.split('/')[0]];

const groupByMonth = sales => {
  return sales.reduce(
    (acc, item) => {
      return acc.update(
        getMonthString(item.get('orderDate')),
        (list = List()) => list.push(item)
      )
    },
    Map()
  );
};

export const groupByMonthGlobally = sales => {
    return groupByMonth(sales)
      .reduce((counts, list, month) =>
        counts.set(
          month,
          list.reduce((acc, i) =>
            acc.update('total', (sum = 0) => sum + i.get('count')),
            Map()
          )
        ),
        Map()
      );
};

export const groupByMonthByCountry = sales => {
  return groupByMonth(sales)
    .reduce((counts, list, key) =>
      counts.set(
        key,
        list.reduce((acc, i) =>
          acc.update(
            i.get('deliveryCountry'),
            (sum = 0) => sum + i.get('count')
          ),
          Map()
        )
      ),
      Map()
    )
};
