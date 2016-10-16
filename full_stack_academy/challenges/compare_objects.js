/*
Compare Objects
Consider the following example.

    { name: 'zeke' } === { name: 'zeke' }

What do you think the output will be? You might assume `true`. It is, however, false. This isn't a mistake, its intentional. Every object is unique from every other object. The usefulness of this will become clear over time. But, it does make it difficult to know if objects contain the same data.

Right now you're going to write a function that determines if two objects contain the same data.

    compareObjects({ name: 'nick' }, { name: 'zeke' })
    // -> false

    compareObjects({ name: 'nick' }, { name: 'nick' })
    // -> true

In order for the function to return true, ALL the properties that exist in object 1 must exist and be equal to those in object 2. Similarly, ALL the properties in object 2 must exist and be equal to those in object 1.
*/
function longest_object(obj1, obj2) {
    var keys_in_obj1 = 0;
    var keys_in_obj2 = 0;
    for (var key in obj1){
        keys_in_obj1++;
    }
    for (var key in obj2){
        keys_in_obj2++;
    }
    var max_obj = obj1;
    if (keys_in_obj1 > keys_in_obj2) {
        return {'long': obj1, 'short': obj2};
    } else {
        return {'long': obj2, 'short': obj1};
    }
}

function compareObjects(obj1, obj2) {
    var long_obj = longest_object(obj1, obj2).long;
    var small_obj = longest_object(obj1, obj2).short;
    for (var key in long_obj) {
        if (!(key in small_obj)) {
            return false;
        } else if (small_obj[key] !== long_obj[key]){
            return false;
        }
    }
    return true
}
