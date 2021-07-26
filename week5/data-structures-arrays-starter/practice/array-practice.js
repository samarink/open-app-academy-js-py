const findMinimum = (arr) => {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
  }

  return min;
};

const runningSum = (arr) => {
  let currentSum = 0;
  let sums = [];

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    sums.push(currentSum);
  }

  return sums;
};

const evenNumOfChars = (arr) => {
  let count = 0;

  for (const word of arr) {
    if (word.length % 2 === 0) {
      count++;
    }
  }

  return count;
};

const smallerThanCurr = (arr) => {
  let count = new Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j] && i !== j) {
        count[i]++;
      }
    }
  }

  return count;
};

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (target === arr[i] + arr[j]) {
        return true;
      }
    }
  }

  return false;
};

const secondLargest = (arr) => {
  let first = arr[0];
  let second = Number.NEGATIVE_INFINITY;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] <= first) {
      second = arr[i];
    }
  }

  return second === Number.NEGATIVE_INFINITY ? undefined : second;
};

const shuffle = (arr) => {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
