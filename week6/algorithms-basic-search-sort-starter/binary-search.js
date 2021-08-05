function linearSearch (arr, target) {

  // Can you solve this in one line?

  return arr.indexOf(target);

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let low = 0;
  let high = arr.length - 1;

  // While high and low indices do not overlap...
  while (low <= high) {

    // Find the midpoint between high and low indices
    let middle = Math.floor((low + high) / 2)


    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
    if (target === arr[middle]) {
      // Return the midpoint index
      return middle;
    }
    // If the target is higher than the midpoint...
    else if (target > arr[middle]) {
      // Move the low pointer to midpoint + 1
      low = middle + 1;
    }
    // If the target is less than the midpoint...
    else {
      // Move the high pointer to midpoint - 1
      high = middle - 1;
    }
  }

  // Return -1 if the loop exits with overlapping pointers
  return -1;

}


module.exports = [linearSearch, binarySearch]
