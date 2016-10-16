/*
Anagram
Write a function that takes in two strings and determines if they are anagrams of each other. Something is an anagram of something else if it is made up of the same characters.

For example ekez is an anagram of zeke. zkee is also an anagram of zeke.

Your function should return true or false.

    anagram('zeke', 'hello world');
    // -> false

    anagram('nick', 'ncki');
    // -> true
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

function letterFrequency(str) {
  var frequency = {};
  for (var i = 0; i < str.length; i++) {
      if (!(str[i] in frequency)) {
          frequency[str[i]] = 1;
      } else {
          frequency[str[i]] += 1;
      }
  }
  return frequency;
}

function anagram(str1, str2) {
    return compareObjects(letterFrequency(str1), letterFrequency(str2));
}

console.log(anagram('nick', 'ncki'));
console.log(anagram('zeke', 'hello world'));
