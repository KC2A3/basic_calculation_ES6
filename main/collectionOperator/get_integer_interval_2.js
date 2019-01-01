'use strict';

function get_integer_interval_2(number_a, number_b) {
  let array = [];
  if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      if (i % 2 == 0) {
        array.push(i);
      }
    }
  } else if (number_a > number_b) {
    for (let i = number_a + 1; i > number_b, --i;) {
      if (i % 2 == 0) {
        array.push(i);
      }
    }
  } else if (number_a === number_b) {
    if (number_a % 2 == 0) {
      array.push(number_a);
    }
  }
  return array
}
module.exports = get_integer_interval_2;