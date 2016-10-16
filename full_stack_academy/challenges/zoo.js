/*
Zoo
Write a function that takes in two parameters. The first parameter is an array of objects containing data about a zoo.

The array will look like this:

    [
      {
        name: 'Claire',
        species: 'llama',
        foods: ['alfalfa', 'grass', 'tender shoots']
      },
      {
        name: 'Daisy',
        species: 'cow',
        foods: ['grass', 'worms']
      },
      {
        name: 'Carl',
        species: 'goat',
        foods: ['grass', 'worms', 'tender shoots']
      }
    ]

The second parameter is a string representing a food. Your task is to determine how many animals like the food that was passed in.

    countFood(animals, 'tender shoots')
    // -> 2
*/

function includes(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

function countFood(animals, food) {
    var foodCount = 0;
    for (var i = 0; i < animals.length; i++) {
        console.log(animals[i]);
        if (includes(animals[i].foods, food)) {
            foodCount++;
        }
    }
    return foodCount;
}

/** ^^^^^^^^^ CODE ABOVE ^^^^^^^^^ */

var animals = [
  {
    name: 'Claire',
    species: 'llama',
    foods: ['alfalfa', 'grass', 'tender shoots']
  },
  {
    name: 'Daisy',
    species: 'cow',
    foods: ['grass', 'worms']
  },
  {
    name: 'Carl',
    species: 'goat',
    foods: ['grass', 'worms', 'tender shoots']
  }
];

console.log((countFood(animals, 'tender shoots')));
console.log((countFood(animals, 'grass')));
console.log((countFood(animals, 'alfalfa')));
console.log((countFood(animals, 'mac n cheese')));
