function mergesort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Divide the array in half
  let middleIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, middleIdx);
  let rightHalf = array.slice(middleIdx);

  // Recursively sort the left half
  // Recursively sort the right half

  let leftSorted = mergeSort(leftHalf);
  let righSorted = mergeSort(rightHalf);

  // Merge the halves together and return
  return merge(leftSorted, righSorted);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let merged = [];

  // Point to the first value of each array
  let index1 = 0;
  let index2 = 0;

  // While there are still values in each array...
  while (index1 < arrA.length && index2 < arrB.length) {

    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

    if (arrA[index1] < arrB[index2]) {
      merged.push(arrA[index1]);
      index1++;
    } else {
      merged.push(arrB[index2]);
      index2++;
    }
  }

  while (index1 < arrA.length) {
    merged.push(arrA[index1]);
    index1++;
  }

  while (index2 < arrB.length) {
    merged.push(arrA[index2]);
    index2++;
  }

  // Return the merged array
  return merged;
}
