import { task } from 'folktale/data/task';
import { identity } from 'folktale/core/lambda';
import { OrderedMap, Map, List } from 'immutable';
import monthTransform20170226160132 from '../../../../../.history/js/ui/app/data/transaformation/monthTransform_20170226160132'

const MONTH_ORDERS = {
  Jan: 12, Feb: 11, March: 10, April: 9, May: 8, June: 7, July: 6, Aug: 5, Sep: 4, Oct: 3, Nov: 2, Dec: 1
};

const MONTHS = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'March',
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

const getMonth = date => date.split('/')[0];
const getMonthString = date => MONTHS[getMonth(date)];

const monthComparator = (monthA, monthB) => MONTH_ORDERS[monthB] - MONTH_ORDERS[monthA];

//group the raw data by month
// i.e. raw data -> { Jan: { deliveryCountry: ... } }
const groupByMonth = sales => {
  return sales
    .reduce(
      (acc, item) => {
        return acc.update(
          getMonthString(item.get('orderDate')),
          (list = List()) => list.push(item)
        )
      },
      OrderedMap()
    )
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
      )
      .sortBy(
        (value, key) => key,
        monthComparator
      );
};

// raw data -> { Jan: { Germany: 1200, Italy: 500 }, Feb: {...} }
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
    .sortBy(
      (value, key) => key,
      monthComparator
    );
};
