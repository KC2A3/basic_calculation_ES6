'use strict';
var number_map_to_word = function(collection) {
  let letter = ['a', 'b', 'c', 'd', 'e']
  return collection.map((element) => letter[element]);
};
module.exports = number_map_to_word;