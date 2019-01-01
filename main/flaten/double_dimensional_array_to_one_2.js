'use strict';

function double_to_one(collection) {
  let result = [];
  let oneDimensionalArray = [].concat.apply([], collection);
  return result = choose_no_repeat_number(oneDimensionalArray);
}

function choose_no_repeat_number(collection) {
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    let flag = true;
    let temp = collection[i];
    for (let j = 0; j < result.length; j++) {
      if (temp === result[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(temp);
    }
  }
  return result;
}
module.exports = double_to_one;