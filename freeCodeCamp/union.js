/**
 * Created by Rafeh on 12/22/15.
 * Program that creates a union of lists and returns them after omitting duplicates.
 */
// import doctest;

function if_in(num_list, search_num) {
    for (var i in num_list) {
        if (num_list[i] == search_num) {
            return true;
        }
    }
    return false;
}

// > unite([1, 2, 3], [2, 2, 2], [5, 6, 7])
// [1, 2, 3, 5, 6, 7]
function unite(arr1, arr2, arr3) {
    var united = arr1;
    for (var i in arr2) {
        if (!(if_in(united, arr2[i]))) {
            united.push(arr2[i]);
        }
    }
    for (var i in arr3) {
        if (!(if_in(united, arr3[i]))) {
            united.push(arr3[i]);
        }
    }
    return united;
}

// console.log(unite([1, 2, 3], [2, 2, 2], [5, 6, 7]));
// var result = unite([1, 2, 3], [2, 2, 2], [5, 6, 7]);
// print(result);
// => [1, 2, 3, 5, 6, 7]
