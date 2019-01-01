'use strict';

function compute_chain_median(collection) {
  let ary = collection.split('->').sort(function(a, b) {
    return a - b;
  });
  let lowMiddle = Math.floor((ary.length - 1) / 2);
  let highMiddle = Math.ceil((ary.length - 1) / 2);
  return (Number(ary[lowMiddle]) + Number(ary[highMiddle])) / 2;
}
module.exports = compute_chain_median;