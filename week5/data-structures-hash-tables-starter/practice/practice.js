function anagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  let firstCount = {};
  let secondCount = {};

  for (let i = 0; i < str1.length; i++) {
    firstCount[str1[i]] = firstCount[str1[i]] + 1 || 1;
    secondCount[str2[i]] = secondCount[str2[i]] + 1 || 1;
  }

  if (Object.keys(firstCount).length !== Object.keys(secondCount).length) {
    return false;
  }

  for (let key of Object.keys(firstCount)) {
    if (!key in secondCount || firstCount[key] !== secondCount[key]) {
      return false;
    }
  }

  return true;
}

function commonElements(arr1, arr2) {
  let firstElements = new Set();
  let common = [];

  for (let el of arr1) {
    firstElements.add(el);
  }

  for (let el of arr2) {
    if (firstElements.has(el)) {
      common.push(el);
    }
  }

  return common;
}

function duplicate(arr) {
  let seen = new Set();

  for (let el of arr) {
    if (seen.has(el)) return el;
    seen.add(el);
  }
}

function twoSum(nums, target) {
  let seen = new Set();

  for (let n of nums) {
    let diff = target - n;

    if (seen.has(diff)) return true;

    seen.add(n);
  }

  return false;
}

function wordPattern(pattern, strings) {
  let map = {};
  let notAllowed = new Set();

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = strings[i];

    if (char in map) {
      if (map[char] !== word) {
        return false;
      }
    } else {
      if (notAllowed.has(word)) return false;

      map[char] = word;
      notAllowed.add(word);
    }
  }

  return true;
}

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
