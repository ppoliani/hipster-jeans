import { partialise } from 'folktale/core/lambda';
import groupBy from '../../data/transaformation/groupBy';
import { groupByMonthGlobally, groupByMonthByCountry } from '../../data/transaformation/groupByMonth';
import ChartType from './ChartType';

const _ = partialise.hole;

export default [{
  title: 'Top Selling Manufacturers',
  subtitle: 'By Gender',
  groupBy: partialise(3, groupBy)('manufacturer', 'gender', _),
  type: ChartType.StackedArea,
  keys: ['Male', 'Female']
}, {
  title: 'Top Selling Manufacturers',
  subtitle: 'By Country',
  groupBy: partialise(3, groupBy)('deliveryCountry', 'manufacturer', _),
  type: ChartType.StackedArea,
  keys: [] // it's dynamic; should be computed from the data
}, {
  title: 'Top Selling Sizes',
  subtitle: 'By Country',
  groupBy: partialise(3, groupBy)('size', 'deliveryCountry', _),
  type: ChartType.StackedBarChart,
  keys: [] // it's dynamic; should be computed from the data
}, {
  title: 'Top Selling Months',
  subtitle: 'Globally',
  groupBy: groupByMonthGlobally,
  type: ChartType.BarChart,
  keys: [] // it's dynamic; should be computed from the data
}, {
  title: 'Top Selling Months',
  subtitle: 'By Country',
  groupBy: groupByMonthByCountry,
  type: ChartType.StackedBarChart,
  keys: [] // it's dynamic; should be computed from the data
}];
