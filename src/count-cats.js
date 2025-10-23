const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cat = 0;
  matrix.map((arr) => {
    if (Array.isArray(arr)) {
      const count = (arr.filter((i) => i === '^^')).length;
      cat += count;
    }
  })
  return cat;
}

module.exports = {
  countCats
};
