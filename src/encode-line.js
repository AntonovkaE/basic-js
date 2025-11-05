const { NotImplementedError } = require('../lib');

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
  let r = '';
  let count = 1;
  for (let i = 0; i < str.length; i += 1) {
    const cur = str[i];
    const next = str[i + 1];
    if (cur === next) {
      count += 1;
    } else {
      r += (count > 1 ? count : '') + cur;
      count = 1;
    }
  }
  return r;
}

module.exports = {
  encodeLine
};
