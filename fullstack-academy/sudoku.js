/**
 * Created by ChessTastic on 6/14/16.
 */

/*
 getRow(puzzle, 8);
 // -> [ 3,2,8,1,9,6,5,4,7 ]

 getRow(puzzle, 0);
 // -> [ 8,9,5,7,4,2,1,3,6 ]
 */
function getRow(puzzle, row) {
  return puzzle[row];
}

/** ^^^^^^^^^ CODE ABOVE ^^^^^^^^^ */

const valid = [[8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],
  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],
  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7]];

console.log(getRow(valid, 4));

var puzzle = [[8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],
  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],
  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7]];

console.log(getColumn(puzzle, 0));
// -> [ 8,2,4,9,5,6,1,7,3 ]

function getColumn(puzzle, column) {
  var result = [];
  for (var i = 0; i < puzzle.length; i++) {
    result.push(puzzle[i][column]);
  }
  return result;
}

/** ^^^^^^^^^ CODE ABOVE ^^^^^^^^^ */

var puzzle2 = [[8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],

  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],

  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7]];

console.log(getSection(puzzle2, 0, 0));
// -> [ 8,9,5,2,7,1,4,6,3 ]

console.log(getSection(puzzle2, 1, 0));
// -> [ 7,4,2,9,6,3,5,8,1 ]

function getSection(puzzle, x, y) {
  var result = [];
  // iterate 3 times
  for (var row = y * 3; row < y * 3 + 3; row++) {
    for (var column = x * 3; column < x * 3 + 3; column++) {
      result.push(puzzle[row][column]);
    }
  }
  return result;
}

function includes(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

function unique(arr) {
  var result = [];
  var result_idx = 0;
  for (var i = 0; i < arr.length; i++) {
    if (!(includes(result, arr[i]))) {
      result[result_idx] = arr[i];
      result_idx++;
    }
  }
  // Code here!
  return result;
}

//1) every row contains the numbers 1 - 9 and no additional numbers
//2) every column contains the numbers 1 - 9 and no additional numbers
//3) every section contains the numbers 1 - 9 and no additional numbers

// Write a function that takes in a sudoku puzzle and returns a boolean to represent if it is passes the aforementioned rules.

var puzzle3 = [[8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],
  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],
  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7]];

console.log(isSudokuSolved(puzzle3));
// -> true

function isSudokuSolved(puzzle) {
  for (var i = 0; i < 9; i++) {
    if (unique(getRow(puzzle, i)).length !== 9) {
      return false;
    }
    if (unique(getColumn(puzzle, i)).length !== 9) {
      return false;
    }
  }

  for (var j = 0; j < 3; j++) {
    for (var k = 0; k < 3; k++) {
      if (unique(getSection(puzzle, j, k)).length !== 9) {
        return false;
      }
    }
  }

  return true;
}