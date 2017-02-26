import { List } from 'immutable';

// Transforms an immutable Map into a structure that recharts can understand
// i.e. { armani: {female: 10, male: 20 } } -> { name: 'armani', female: 10, male: 20s }
export default data => {
  return data
    .reduce((acc, value, topLevel) => {
      return acc.push({name: topLevel, ...value.flatten().toJS()})
    }, List());
};
