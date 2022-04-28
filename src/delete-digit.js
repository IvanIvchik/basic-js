const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const str = n.toString();

  for (let i = 0; i < str.length; i++) {
    let solution = 0;

    if (i === 0) {
      solution = +str.slice(1);
    } else if (i === str.length - 1) {
      solution = +(str.slice(0, str.length - 1));
    } else solution = +(str.slice(0, i) + str.slice(i + 1));

    if (solution > max) max = solution;
  }
  return max;
}

module.exports = {
  deleteDigit
};
