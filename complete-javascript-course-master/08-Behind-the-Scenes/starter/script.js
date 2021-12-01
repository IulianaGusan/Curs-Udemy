'use strict';

//Scope chain

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName} you are ${age}, born in ${birthYear}.`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `Oh, and you are a milenial, ${firstName}.`;
//       console.log(str);
//     }
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

//Hoisting

//variables
// console.log(me); //undefined
// console.log(job); // error- cannot acces before initialization
// console.log(year); // error- cannot acces before initialization

// var me = 'Iuli';
// let job = 'teacher';
// const year = 1991;

// //functions
// console.log(addDecl(2, 3)); // result is 5
// console.log(addExpr(2, 3)); // error- cannot acces before initialization
// console.log(addArrow(2, 3)); // error- is not a function

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

//This keyword

// console.log(this); // is the window object

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991); // undefined in strict mode

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980); //is the window object because arrow function does not have a "this" keyword and will point to the parent's scope (in this case the window object)

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge(); // the "this" keyword inside of the method will be the object that is calling the method

// const Mathilda = {
//   year: 2017,
// };

// Mathilda.calcAge = jonas.calcAge; //method borrowing
// Mathilda.calcAge(); //here the "this" keyword point to Mathilda beacase she is calling the function

// const f = jonas.calcAge;
// f(); //this keyword is undefined because is not attached to any object, is just a regular function call.

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// jonas.greet();

//Argumets keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// let age = 30;
// let OldAge = age;
// age = 31;
// console.log(age);
// console.log(OldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

//Primitive types
let lastName = 'Wiliams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types
const Jessica = {
  firstName: 'Jessica',
  lastName: 'Wiliams',
  age: 27,
};
const marriedJessica = Jessica;
marriedJessica.lastName = 'Davis'; //allowed because we change the value in the heap, not the reference in call stack
console.log('Before marriage:', Jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {}; //not allowed

//Copying objects

const Jessica2 = {
  firstName: 'Jessica',
  lastName: 'Wiliams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const JessicaCopy = Object.assign({}, Jessica2);
JessicaCopy.lastName = 'Davis';
JessicaCopy.family.push('Mary');
JessicaCopy.family.push('John');
console.log('Before marriage:', Jessica2);
console.log('After marriage:', JessicaCopy);
