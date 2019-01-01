'use strict';

function collect_all_even(collection) {
  let even = [];
  for (let i = 0; i <= collection.length; i++) {
    if (collection[i] % 2 === 0) {
      even.push(collection[i]);
    }
  }
  return even;
}
module.exports = collect_all_even;