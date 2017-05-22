let sum = (...args) => {
  // [args]
  return args.reduce( (prev,curr) => prev + curr);
};

console.log(sum(1,2,3,4,5)); // 15

let multiply = (i, ...nums) => {
  return nums.map( n => mul * n);
};
let result = multiply(2, 5, 10, 15);
console.log(result);

// Spread Operator
// Built-In Function - Math.max()
let numArr = [1, 11, 9001, 100];

// Old Way
let max = Math.max.apply(null, numArr);

// New Way
let max = Math.Max(...arr);

/** Combining Arrays **/

// Old Way - use concat
let numbers = [1,2,3,4,5];
let newNumbers = [33,44,55];
// not as flexible - [numbers, newNumbers]
let combo = numbers.concat(newNumbers);

// Spread Operator - more flexible in placement
let arrCombos = [3,11,50, ...numbers, 7];
console.log(newNumber); // [3,11,50, 33,44,55, 7]