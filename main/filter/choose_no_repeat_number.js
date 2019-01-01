'use strict';

function choose_no_repeat_number(collection) {
  return collection.filter((element, uniqueElement) => collection.indexOf(element) === uniqueElement);
}
module.exports = choose_no_repeat_number;