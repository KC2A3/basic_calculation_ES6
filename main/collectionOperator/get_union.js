'use strict';

function get_union(collection_a, collection_b) {
  return arrayRemoveRepeat(collection_a.concat(collection_b));
}

function arrayRemoveRepeat(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let flag = true;
    let temp = array[i];
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
module.exports = get_union;