import { taggedSum } from 'daggy';

// A discriminated union that represents the various stages a
// piece of async data can have
export default taggedSum('AsyncData', {
  Empty: [],
  Loading: [],
  Failure: ['error'],
  Success: ['data'],
});
