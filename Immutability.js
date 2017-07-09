// Assign Objects
var a = {name: "Albert", hobbies: ['violin', 'computer hardware'] }
// create a copy of {a}
// Object.assign({empty object}, obj_copy_from, any additional/changes to copied_obj)
var b = Object.assign({}, a, {name: "Jenny", hobbies: ['piano', 'reading']});

/**ES5 Way - Arrays **/
let a = [0,1,2];
let b = a.slice();
b.push(3);
// a - [0,1,2]
// b - [0,1,2,3]


/** ES6 Way - Arrays **/
let a = [0,1,2];
let b = [...a];
b.push(a);
// a - [0,1,2]
// b - [0,1,2,3]

