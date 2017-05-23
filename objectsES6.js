// Objects - Copy

// Old Way
// You had a reference to another object
// Unfortunately this mutated the orig. object
let person1 = {
  name: 'Albert',
  car: 'Ford Focus'
};

let person2 = Object.assign({}, person1,
  {name: 'Michael',
   car: 'Honda Civic',
   likes: 'skateboarding' });

// person1 is mutated, worse yet now has a new
// property 'likes' with val. 'skateboarding'!

// ES6
let person1 = {
  name: 'Albert',
  car: 'Ford Focus'
};

// create a copy of person1
let person2 = Object.assign({}, person1,
  {name: 'Michael',
   car: 'Honda Civic',
   likes: 'skateboarding' });

console.log(person1);
console.log(person2);

// Assigning multiple objects & overriding property values
let avgPerson = {
  lift: '80',
  height: '180'
};

let sportsAthlete = {
  name: 'Terminator',
  lift: '350',
  height: '225',
  bench: '350',
  mileTime: 'Gone in Sixty Seconds'
};

// sportsAthlete overrides same properties of avgPerson
// since it is after avgPerson
let myRobot = Object.assign({}, avgPerson, sportsAthlete);
console.log(myRobot);