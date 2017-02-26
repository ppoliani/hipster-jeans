import getTopSellingManufacturersByGender from '../../data/transaformation/topSellingManufacturersByGender';
import ChartType from './ChartType';

export default [{
  title: 'Top selling manufacturers',
  subtitle: 'By Gender',
  transform: getTopSellingManufacturersByGender,
  type: ChartType.StackedArea,
  keys: ['Male', 'Female']
}];
