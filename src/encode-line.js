const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let count = 1;
  let substr = '';

  for (let i = 0; i < str.length; i++) {
      substr = str[i];
      if (str[i + 1] === substr) {
          count++;
      } else {
          if (count === 1) {
              res += substr;
          } else {
              res += count + substr;
          }
          count = 1;
      }
  }
  return res;
}

module.exports = {
  encodeLine
};
