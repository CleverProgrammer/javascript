/**
 * Created by Rafeh on 12/22/15.
 * Program that creates a union of lists and returns them after omitting duplicates.
 * Do doctest union.js in terminal to test the function unite.
 */

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
// > unite([1, 2, 3], [2, 2, 2], [5, 6, 7])
// [1, 2, 3, 5, 6, 7]
function unite(arr1, arr2, arr3) {
    var united = arr1;
    arr2.forEach(function (element) {
        if (!(if_in(united, element))) {
            united.push(element);
        }
    });
    arr3.forEach(function (element) {
        if (!(if_in(united, element))) {
            united.push(element);
        }
    });
    return united;
}

