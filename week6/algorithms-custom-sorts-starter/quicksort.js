function quicksort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Pick a pivot
  let pivot = arr.shift();

  // Put all values smaller than the pivot to the `left`
  let left = arr.filter((n) => n <= pivot);

  // Put all values larger than the pivot to the `right`
  let right = arr.filter((n) => n > pivot);

  // Sort the left half
  let leftSorted = quicksort(left);

  // Sort the right half
  let rightSorted = quicksort(right);

  // Return the array with the left, pivot, and right values

  return [...leftSorted, pivot, ...rightSorted];
}
