import { partialise } from 'folktale/core/lambda';
import transform from '../../data/transaformation/transform';
import ChartType from './ChartType';

const _ = partialise.hole;

export default [{
  title: 'Top Selling Manufacturers',
  subtitle: 'By Gender',
  transform: partialise(3, transform)('manufacturer', 'gender', _),
  type: ChartType.StackedArea,
  keys: ['Male', 'Female']
}, {
  title: 'Top Selling Manufacturers',
  subtitle: 'By Country',
  transform: partialise(3, transform)('deliveryCountry', 'manufacturer', _),
  type: ChartType.StackedArea,
  keys: [] // it's dynamic; should be computed from the data
}, {
  title: 'Top Selling Sizes',
  subtitle: 'By Country',
  transform: partialise(3, transform)('size', 'deliveryCountry', _),
  type: ChartType.StackedBarChart,
  keys: [] // it's dynamic; should be computed from the data
}];
