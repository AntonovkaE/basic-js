const { NotImplementedError } = require('../lib');

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
  const arr = n.toString().split('').map((item) => {
    return +item
  });
  return Math.max(...arr.map((el,i) => {let result = arr.slice(); result.splice(i,1); return Number( result.join(''))}))
}

module.exports = {
  deleteDigit
};
