/*
Sudoku Get Row
"A Sudoku puzzle consists of 81 cells which are divided into nine columns, rows and regions. The task is now to place the numbers from 1 to 9 into the empty cells in such a way that in every row, column and 3×3 region each number appears only once."

- http://www.sudoku-space.com/sudoku.php

Your task is to write a function which takes a sudoku puzzle as an input and returns a single row of that puzzle in an array. The input will be formatted as a 9x9 2 dimensional array like this:

var puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
             [ 2,7,1,9,6,3,4,8,5 ],
             [ 4,6,3,5,8,1,7,9,2 ],
             [ 9,3,4,6,1,7,2,5,8 ],
             [ 5,1,7,2,3,8,9,6,4 ],
             [ 6,8,2,4,5,9,3,7,1 ],
             [ 1,5,9,8,7,4,6,2,3 ],
             [ 7,4,6,3,2,5,8,1,9 ],
             [ 3,2,8,1,9,6,5,4,7 ]];

getRow(puzzle, 8);
// -> [ 3,2,8,1,9,6,5,4,7 ]

getRow(puzzle, 0);
// -> [ 8,9,5,7,4,2,1,3,6 ]
*/
function getRow(puzzle, row) {
    for (var i = 0; i <= row; i++) {
        if (i === row) {
            return puzzle[i];
        }
    }
}

/** ^^^^^^^^^ CODE ABOVE ^^^^^^^^^ */
const valid = [[ 8,9,5,7,4,2,1,3,6 ],
               [ 2,7,1,9,6,3,4,8,5 ],
               [ 4,6,3,5,8,1,7,9,2 ],
               [ 9,3,4,6,1,7,2,5,8 ],
               [ 5,1,7,2,3,8,9,6,4 ],
               [ 6,8,2,4,5,9,3,7,1 ],
               [ 1,5,9,8,7,4,6,2,3 ],
               [ 7,4,6,3,2,5,8,1,9 ],
               [ 3,2,8,1,9,6,5,4,7 ]];

    console.log((getRow(valid, 0)));
    console.log((getRow(valid, 1)));
