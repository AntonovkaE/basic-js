const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const r = {}
  domains.forEach(item => {
    const names = item.split('.');
    let part = ''
    for (let i = names.length - 1; i >= 0; i-- ) {
      part += '.' + names[i];
      if (r[part]) {
        r[part]++;
      } else {
        r[part] = 1;
      }
    }
  })
  return r
}

module.exports = {
  getDNSStats
};
