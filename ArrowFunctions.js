let numbers = [1, 2, 3, 4, 5];

// ES5 - Old Way
let doubled = numbers.map(function(n){
  return n*2;
});

// ES6 - Arrow Functions
let doubled = numbers.map((n) => n * 2);

// Template Literals - Old Way (no arrow func)
let person = {
  name: 'Albert',
  greetByName: function() {
    console.log(`Hi, I am ${this.name}`);
  }
}
// this - refers to person
person.greetByName();

// ES6
let person = {
  name: 'Albert',
  greetByName() {
    console.log(`Hi, I am ${this.name}`);
  }
}

// ES6
let person = {
  name: 'Albert',
  likes: ['javascript', 'es6', 'promises'],
  showLikes() {
    this.likes.forEach((like) => {
      console.log(`${this.name} likes ${like}`);
    });
  }
}
person.showLikes();