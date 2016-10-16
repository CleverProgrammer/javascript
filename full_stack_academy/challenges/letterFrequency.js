/*
Letter Frequency
We want a function that tells us how many times each letter appears in a string. The function will return an object who's keys represent each letter and the values represent how many times that letter appeared.

    letterFrequency('hi there!')
    // -> {
    //      h: 2,
    //      i: 1,
    //      " ": 1,
    //      t: 1,
    //      e: 2,
    //      r: 1,
    //      '!': 1
    //    }
*/
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

console.log(letterFrequency('hello'));
