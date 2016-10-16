/*
Times Table
Write a function that takes a number. You're going to return a "times table" with values up to your input number. More specifically, you're going to return an array of arrays containing all the numbers from 1 to n multiplied by all the numbers from 1 to n. Here are some examples.
 
timesTables(3);

// -> [
//      [1,2,3],
//      [2,4,6],
//      [3,6,9]
//    ]

timesTables(5);

// -> [
//      [1,2,3,4,5],
//      [2,4,6,8,10],
//      [3,6,9,12,15],
//      [4,8,12,16,20],
//      [5,10,15,20,25]
//    ]

*/
function timesTable(value) {
  // Code here!
}


/** ^^^^^^^^^ CODE ABOVE ^^^^^^^^^ */

describe('timesTable', function() {
  it('returns a times table', function() {
    expect(timesTable(3)).toEqual([[1,2,3], [2,4,6], [3,6,9]]);
    expect(timesTable(5)).toEqual([[1,2,3,4,5], [2,4,6,8,10], [3,6,9,12,15], [4,8,12,16,20], [5,10,15,20,25]]);
  });
});

    