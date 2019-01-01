'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((count, element) => count += element);
}
module.exports = calculate_elements_sum;