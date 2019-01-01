function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter((element) => collection_b[0].includes(element));
}
module.exports = collect_same_elements;