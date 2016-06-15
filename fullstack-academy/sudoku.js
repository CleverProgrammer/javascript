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