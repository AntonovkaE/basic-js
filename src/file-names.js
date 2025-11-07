const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names ) {
  const output = {}
  const out_arr = []
  return names.map(item => {
      if (output[item] !== undefined) {
        output[item] = output[item] + 1
        out_arr.push(`${item}(${output[item]})`)
        return `${item}(${output[item]})`
      }
      if (out_arr.includes(item)) {
        let count = 0
        out_arr.forEach(i => {
          count = i == item ? count + 1 : count;
        })
        return `${item}(${count})`
      }
      output[item] = 0
      out_arr.push(item)
      return item
    }
  )
}

module.exports = {
  renameFiles
};
