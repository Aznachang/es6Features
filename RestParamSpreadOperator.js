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
