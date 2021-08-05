function ageSort(users) {
  // Fill this in
  return users.sort((ua, ub) => ua.age - ub.age);
}

function oddEvenSort(arr) {
  // Fill this in
  return arr.sort(function (a, b) {
    if (a % 2 === 1 && b % 2 === 0) return -1;
    if (a % 2 === 0 && b % 2 === 1) return 1;
    return a - b;
  });
}

function validAnagrams(s, t) {
  // Fill this in
  function sort(s) {
    return s.split("").sort().join("")
  }

  return sort(s) === sort(t);
}

function reverseBaseSort(arr) {
  // Fill this in
}

function frequencySort(arr) {
  // Fill this in
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
