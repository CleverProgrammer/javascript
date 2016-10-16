/*
Union
Write a function that takes two arrays and returns an array containing all the values from the first array and all the values of the second array. Your returned result should have no duplicates. Feel free to copy over your push and includes functions! Also feel free to use the javascript push and includes functions if you know them.

    union([1,3,5,6],[9,5,1,22,44])
    // -> [1,3,5,6,9,22,44]

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

function union(arr1, arr2) {
    if (arr1.length > arr2.length) {
        var long_arr = arr1;
        var small_arr = arr2;
    } else {
        var long_arr = arr2;
        var small_arr = arr1;
    }
    for (var i = 0; i < long_arr.length; i++) {
        if (!includes(small_arr, long_arr[i])){
            small_arr.push(long_arr[i]);
        }
    }
    return unique(small_arr);
}

console.log(union([1,3,5,6],[9,5,1,22,44]));
