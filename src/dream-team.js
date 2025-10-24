const { NotImplementedError } = require('../lib');

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
  const arr = [];
  if (Array.isArray(members)) {
    members.map((name) => {
      if (typeof name === "string") {
        name = name.trim();
        arr.push(name[0].toUpperCase());
      }
    })
  }
  if (arr.length === 0) {
    return false
  }
  return arr.sort().join('')
}

module.exports = {
  createDreamTeam
};
