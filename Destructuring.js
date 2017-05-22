// Destructuring
// Objects
let person = {
  name: 'Albert',
  age: '27',
  location: 'Bay Area',
  favFood: 'sushi',
  hobbies: ['violin', 'video games', 'movies']
};

// Old Way
person.age; // 27
person['age']; // 27

// New Way
// NOTE: location is a global var. in the browsers
// To avoid conflicts - assign a different keyName 'lives'
let {age, location: lives, hobbies} = person;
console.log(age, lives, hobbies[1]); // 27 'Bay Area' 'video games'

// Arrays
let numbers = [11, 12, 13, 14];
let [first second, ...others] = numbers;
console.log(first,second, others) // 11 12 [13, 14]
