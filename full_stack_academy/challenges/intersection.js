/*
Intersection
Write a function that takes two arrays and returns an array containing their common values (values that are present in both array 1 and array 2). Feel free to copy over your push and includes functions! Also feel free to use the javascript push and includes functions if you know them.

Note: your return array should contain no duplicate values!

    intersection([1,2,3],[3,4,2]);
    // -> [2,3]

    intersection([1,2,3],[5,6,4])
    // -> []

*/
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
    for (var i = 0; i < arr.length; i++) {
        if (!includes(result, arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

function intersection(arr1, arr2) {
    var intersect_arr = [];
    for (var i = 0; i < arr1.length; i++) {
        if (includes(arr2, arr1[i])) {
            intersect_arr.push(arr1[i]);
        }
    }
    return unique(intersect_arr);
}

console.log(intersection([1,3,5,2], [1, 2, 5, 3, 4, 5, 6, 4, 10]).sort());
console.log(intersection([4,8,1,5,5], [1,5]).sort());
