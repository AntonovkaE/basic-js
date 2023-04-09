const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (arr instanceof Array) {
    const discardNext = '--discard-next'
    const discardPrev = '--discard-prev'
    const doubleNext = '--double-next'
    const doublePrev = '--double-prev'
    let deletedIndex

    const newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === discardNext) {
        if (i < arr.length - 1) {
          deletedIndex = i + 1
          i += 1
        }

      } else if (arr[i] === discardPrev) {
        if (i !== 0 && deletedIndex !== (i - 1)) {
          newArr.pop()
        }
      } else if (arr[i] === doublePrev) {
        if (i !== 0) {
          if (newArr[i - 1]) {
            newArr.push(newArr[i - 1])
          }
        }
      } else if (arr[i] === doubleNext) {
        if (i < arr.length - 1) {
          newArr.push(arr[i + 1])
        }
      } else {
        newArr.push(arr[i])
      }
    }
    return newArr
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
}

module.exports = {
  transform
};
