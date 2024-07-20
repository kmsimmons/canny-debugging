export default function sortBy(array, key, descending = false) {
  const sortedArray = array.slice().sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    if (aValue < bValue) {
      return -1;
    }
    if (aValue > bValue) {
      return 1;
    }
    return 0;
  });

  return descending ? sortedArray.reverse() : sortedArray;
}
