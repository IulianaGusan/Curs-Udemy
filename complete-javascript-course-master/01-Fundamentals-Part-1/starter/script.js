// let js = 'amazing';
/*console.log(40 + 8 + 33 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

//Variable name conventions
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(typeof year);

year = 1991;
console.log(typeof year)
*/

/*let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990; // eror becase we can't reassign const values

const job //eror becase we need an initial value

var job = 'programmer';
job = 'teacher';*/

/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
//2**3 means 2 to the power of 3 =2*2*2


const fisrtName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(fisrtName + ' ' + lastName);

let x = 10 + 5; //15
x += 10; //x=x+10 - reassigning the x. that's why we use let
x *= 4; //x=x*4=100
x++; // x=x+1 // increase by 1
x--; //x=x-1 // decreased by 1
console.log(x);


//Comparison operators
console.log(ageJonas > ageSarah);// <, >, <=, >=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1997 > now - 2018);*/

/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1997 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; //x=y=10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);*/

/*//1. Store info
const massMarkData1 = 78, heightMarkData1 = 1.69, massJohnData1 = 92, heightJohnData1 = 1.95;
const massMarkData2 = 95, heightMarkData2 = 1.88, massJohnData2 = 85, heightJohnData2 = 1.76;

// Calculate BMI
const BMIMarkData1 = massMarkData1 / heightMarkData1 ** 2;
const BMIMarkData2 = massMarkData2 / heightMarkData2 ** 2;
const BMIJohnData1 = massJohnData1 / heightJohnData1 ** 2;
const BMIJohnData2 = massJohnData2 / heightJohnData2 ** 2;
console.log(BMIMarkData1, BMIMarkData2, BMIJohnData1, BMIJohnData2);

//Comparing hight
const markHigherBMIData1 = BMIMarkData1 > BMIJohnData1;
const markHigherBMIData2 = BMIMarkData2 > BMIJohnData2;
console.log(markHigherBMIData1, markHigherBMIData2);*/

/*const firstName = 'Iuli';
const job = 'teacher';
const birthYear = 1994;
const year = 2037

const iuli = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(iuli);

const iulinew = `I'm ${firstName}, a ${year - birthYear}years old ${job}!`;
console.log(iulinew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple\n\
lines');

console.log(`String
multiple
lines`)*/

/*const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license👌');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft}years`);
}

const birthYear = 1994;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);*/

//1. Store info
/*const massMarkData1 = 78, heightMarkData1 = 1.69, massJohnData1 = 92, heightJohnData1 = 1.95;
const massMarkData2 = 95, heightMarkData2 = 1.88, massJohnData2 = 85, heightJohnData2 = 1.76;

// Calculate BMI
const BMIMarkData1 = massMarkData1 / heightMarkData1 ** 2;
const BMIMarkData2 = massMarkData2 / heightMarkData2 ** 2;
const BMIJohnData1 = massJohnData1 / heightJohnData1 ** 2;
const BMIJohnData2 = massJohnData2 / heightJohnData2 ** 2;
//console.log(BMIMarkData1, BMIMarkData2, BMIJohnData1, BMIJohnData2);

//Comparing hight
/*const markHigherBMIData1 = BMIMarkData1 > BMIJohnData1;
const markHigherBMIData2 = BMIMarkData2 > BMIJohnData2;
console.log(markHigherBMIData1, markHigherBMIData2);*/

/*if (BMIMarkData1 > BMIJohnData1) {
    console.log(`Mark's BMI(${BMIMarkData1}) is higher than John's(${BMIJohnData1})!`)
} else {
    console.log(`John's BMI(${BMIJohnData1}) is higher than Mark's(${BMIMarkData1})!`)
}*/

/*//Conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear + 18));

console.log(Number('Jonas'));
console.log(String(23));

//Coercion
console.log('I am' + 23 + 'years old');
console.log('23' - '10' - 3); // result 10, converted to number
console.log('23' + '10' + 3); // result 23103
console.log('23' * '2'); //result 46 converted to number

let n = '1' + 1; // '11'
n = n - 1; // 11-1
console.log(n);  // result  is 10*/

/*console.log(Boolean(0));  //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas'));  //true
console.log(Boolean({}));  //true
console.log(Boolean('')); //false

const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job');
}

let height = 0;
if (height) {
    console.log('YaY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}*/

/*const age = '18';
if (age === 18) console.log('You just became an adult(strict)');

if (age == 18) console.log('You just became an adult(loose)');

const favoriteNumber = Number(prompt("What's your favorite number?"));
console.log(typeof favoriteNumber);

if (favoriteNumber === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favoriteNumber === 7) {
    console.log('7 is a cool number')
} else if (favoriteNumber === 9) {
    console.log('9 is a cool number')
} else {
    console.log('Number is not 23 or 7 or 9');
}

if (favoriteNumber !== 23) console.log('Why not 23?')*/

/*const hasDriverLicense = true; //A
const hasGoodVision = true; //b

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);


// if (hasDriverLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someine else should drive...');
// }

/*const isTired = false; //C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someine else should drive...');
}*/

// const dolphins = (96 + 108 + 89) / 3;
// const koalas = (88 + 91 + 110) / 3;
// const minimumScore = 100

// console.log(dolphins, koalas);

// if (dolphins > koalas) {
//     console.log('Dolphins are the winners!');
// } else if (dolphins === koalas) {
//     console.log("It's a draw");
// } else {
//     console.log('Koalas are the winners!')
// }


//Bonus1
// const dolphins = (97 + 112 + 81) / 3;
// const koalas = (109 + 95 + 86) / 3;

// console.log(dolphins, koalas);

// if (dolphins > koalas && dolphins >= 100) {
//     console.log('Dolphins are the winners!');
// } else if (dolphins === koalas && (dolphins && koalas >= 100)) {
//     console.log("It's a draw");
// } else if (koalas > dolphins && koalas >= 100) {
//     console.log('Koalas are the winners!')
// }
// else {
//     console.log('No one wins');
// }

// const day = 'friday'

// switch (day) {
//     case 'monday': //day ==='monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare thory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare thory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend');
// } else {
//     console.log('Not a valid day!');
// }

// const age = 23;
// // age >= 18 ? console.log('I like to drink wine') :
// //     console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// } console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);