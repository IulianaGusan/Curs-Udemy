'use strict';

// function logger() {
//     console.log('My name is Iuli');
// }

// //calling / running / invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// //function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// //function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

//function arrow
// const calcAge3 = birthYear => 2037 - birthYear
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// const cutPieces = function cutFruitPieces(fruit) {
//     return fruit * 4;
// }


// const fruitProcessor = function (apples, oranges) {

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));


/*const calcAge = function (year) {
    return 2037 - year;
}


const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));*/

//Coding Challenge

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// //Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win🏆 (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win 🏆(${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log('No one wins!');
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// //Test 2

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);


// Arrays

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtman', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// //Excercise
// const calcAge = function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]),
// calcAge(years[years.length - 1])];
// console.log(ages);


// const friends = ['Michael', 'Steven', 'Peter'];

// //Add elements
// const newLenght = friends.push('Jay'); //Last
// console.log(friends);
// console.log(newLenght);

// friends.unshift('John');//First
// console.log(friends);

// //Remove elements
// friends.pop(); //Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //Firts
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23'));

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }


//Coding chalange 2

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, total);


//Objects

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);

// //Retrieve information
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey) //result is error

// const interestedIn = prompt('What do you whant to know about Jonas? Choose between firstName,lastName,age, job and friends');


// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request!')
// }

//Add properties to the object

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

//Challenge

//Jonas has 3 friends and his best friend is called Michael.

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0].}`);


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: false,
// calcAge: function (birthYear) {
//     2037 - birthYear
// }

// calcAge: function () {
//     console.log(this);
//     return 2037 - this.birthYear;
// }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
//     }

// };

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.getSummary());
// Challenge
//Jonas is a 46-year old teacher, and he has a driver's license.

// console.log(`${this.firstName} is a ${this.calcAge}-years old teacher, and he has ${jonas.hasDriverLicense ? 'a' : 'no'} driver's license`)


//Chalenge 3

// const Mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         const BMI = this.mass / this.height ** 2;
//         return BMI;
//     }
// }
// const John = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         const BMI = this.mass / this.height ** 2;
//         return BMI;
//     }
// };
// //my result
// // const calcBMI = function () {
// //     const BMI = this.mass / this.height ** 2;
// //     return BMI;

// console.log(Mark.calcBMI(), John.calcBMI())

// if (Mark.calcBMI() > John.calcBMI()) {
//     console.log(`${Mark.fullName}s BMI(${Mark.calcBMI()}) is higher than ${John.fullName}'s BMI (${John.calcBMI()})`);
// } else if (John.calcBMI() > Mark.calcBMI()) {
//     console.log(`${John.fullName}s BMI(${John.calcBMI()}) is higher than ${Mark.fullName}'s BMI (${Mark.calcBMI()})`);
// }



//LOOPS

// console.log('Lifting weights reperition 1🤸‍♀️');

//For loop keeps running while condition is TRUE.
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights reperition ${rep}🤸‍♀️`);
// }


// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// ...
// console.log(jonas[4]);


// for (let i = 0; i < jonas.length; i++) {

//Reading from jonas array
// console.log(jonas[i], typeof jonas[i]);

//Filling types array
//     types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1961, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

//Continue and break

// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }


// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }


//Looping backwords

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i]);
// }


// Loop inside a loop

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------Starting exercise ${exercise}----`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weights repetition ${rep}🏋️‍♀️`);
//     }
// }



//While loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights reperition ${rep}🤸‍♀️`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights reperition ${rep}🤸‍♀️`);
//     rep++;
// }


// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
// }



//Challenge 4 - Loops

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 10; i >= 50 && i <= 300 ? i * 0.15 : i * 0.20; bills++) {
    tips.push(bills[i]);
    // const calcTip = function (bills) {
    //     return bills;
    console.log(tips);
}
// }
// testing new branch