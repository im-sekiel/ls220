// You are given a grid represented as a nested array filled
// with empty strings. Chaos, the puppy, is standing at the
// top-left corner of the grid and can move either down or right
// at any point in time. Determine the number of distinct paths
// Chaos can take to reach a bowl of treats placed at the
// bottom-right corner of the grid.

// Define a function `chaosInTheGrid` that, given a nested
// array, returns the number of unique paths that Chaos
// can take to reach the bottom-right corner.

// The grid will have at least 1 row and 1 column.

// Example:

// Given the following 2x3 grid:

const grid = [
  ["", "", ""],
  ["", "", ""],
];

// There are three distinct path Chaos can take:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right

function chaosInTheGrid(grid) {
  // implementation
}

// Test cases

const grid1 = [[""]];
const grid2 = [
  ["", ""],
  ["", ""],
];
const grid3 = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
const grid5 = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];

// function populate(grid, row, rowsL, colsL) {
//   if (row >= rowsL) {
//     return grid;
//   }

//   for (let col = 1; col < colsL; col += 1) {
//     grid[row][col] = grid[row - 1][col] + grid[row][col - 1];
//   }

//   return populate(grid, row + 1, rowsL, colsL)
// }

// function chaosInTheGrid(grid) {
//   let rowsL = grid.length;
//   let colsL = grid[0].length;

//   for (let col = 0; col < colsL; col += 1) {
//     grid[0][col] = 1;
//   }

//   for (let row = 0; row < rowsL; row += 1) {
//     grid[row][0] = 1;
//   }

//   return populate(grid, 1, rowsL, colsL)[rowsL -1][colsL - 1];
// }

function chaosInTheGrid(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  function pathsToCoord(row, col) {
    console.log(row, col);
    if (row === 0 || col === 0) {
      return 1;
    }
    return pathsToCoord(row - 1, col) + pathsToCoord(row, col - 1);
  }

  return pathsToCoord(rows - 1, cols - 1);
}

// console.log(chaosInTheGrid(grid1) === 1);
// console.log(chaosInTheGrid(grid2) === 2);
// console.log(chaosInTheGrid(grid3) === 6);
console.log(chaosInTheGrid(grid4) === 15);
// console.log(chaosInTheGrid(grid5) === 252);
// All test cases should log true