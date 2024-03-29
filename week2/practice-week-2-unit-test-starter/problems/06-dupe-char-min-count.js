/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function duplicateCharMinCount(string, minCount) {
  let count = {};

  for (let char of string) {
    count[char] = ++count[char] || 1;
  }

  letters = [];

  for (let [letter, occurences] of Object.entries(count)) {
    if (occurences >= minCount) letters.push(letter);
  }

  return letters;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
