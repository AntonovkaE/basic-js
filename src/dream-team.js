const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length <= 0) {
    return false
  }
  let result = ''
  let resultArray = []
  members.forEach(member => {
    let item
    if (typeof member === 'string' ) {
      item = member.replace(/\s/g, '')
      resultArray.push(item.toUpperCase())
    }
  })
  resultArray.sort().forEach(member => result += member.length ? member[0] : '')
  return result || false
}

module.exports = {
  createDreamTeam
};
