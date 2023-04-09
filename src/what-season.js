const { NotImplementedError, InvalidDate } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const isValidDate = (d) => {
    return d instanceof Date;
  }
  try {
    console.log(!isNaN(date))
  } catch (err) {
    throw new Error('Invalid date!')
  }
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (!isValidDate(date)) {
    throw new Error('Invalid date!')
  }
  let monthNumb = date.getMonth()
  if (monthNumb >= 0 && monthNumb <= 11) {
    return monthNumb < 2 || monthNumb > 10 ? 'winter' : monthNumb < 5 ? 'spring' : monthNumb < 8 ? 'summer' : 'autumn'
  }
  throw new Error('Invalid date!')
}

module.exports = {
  getSeason
};
