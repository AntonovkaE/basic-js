const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let numbers = matrix.map(arr => {
    return arr.map(item => +item);
  });

  function checkBomb(i, j, matrix) {
    let result = 0
    function checkRow(x) {

      if (j > 0) {
        result += numbers[i + x][j - 1];
      }
      if (j < matrix.length - 1) {
        result += numbers[i + x][j + 1];
      }
      result += numbers[i + x][j];
    }

    // соседи верхний ряд
    if (i > 0) {
      checkRow(-1);
    }
    // нижний ряд
    if (i < matrix.length - 1) {
      checkRow(1);
    }
    checkRow(0);
    if (matrix[i][j] == 1) {

      result -= 1;
    }
    return result;
  }

  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    const new_row = [];
    for (let j = 0; j < matrix[i].length; j++) {
      new_row.push(checkBomb(i, j, numbers));
    }
    arr.push(new_row);
  }
  return arr

}

module.exports = {
  minesweeper,
};
