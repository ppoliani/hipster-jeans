import getTopSellingManufacturersByGender from '../../data/transaformation/topSellingManufacturersByGender';
import getTopSellingManufacturersByCountry from '../../data/transaformation/topSellingManufacturersByCountry';
import ChartType from './ChartType';

export default [{
  title: 'Top Selling Manufacturers',
  subtitle: 'By Gender',
  transform: getTopSellingManufacturersByGender,
  type: ChartType.StackedArea,
  keys: ['Male', 'Female']
}, {
  title: 'Top selling manufacturers',
  subtitle: 'By Country',
  transform: getTopSellingManufacturersByCountry,
  type: ChartType.StackedArea,
  keys: [] // it's dynamic; should be computed from the data
}];
