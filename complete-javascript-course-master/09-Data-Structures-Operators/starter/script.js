'use strict';

/* Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  nameOfLocation: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,
  //Now
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//  Optional Chaining (?.)

//Before
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// Now
console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas' }];
console.log(users[0]?.name ?? `User array empty`);
*/
/*
const rest1 = {
  name: 'Capri',
  //numGuests:20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//nullish assignment operator
rest1.numGuests ??= 10; //result is 0
rest2.numGuests ??= 10; // result is 10

//AND assignment operator
//Before
rest2.owner = rest2.owner && '<ANONYMUS';
//Now
rest1.owner &&= '<ANONYMUS'; // nothing happend
rest2.owner &&= '<ANONYMUS'; // replaced with '<ANONYMUS'

console.log(rest1);
console.log(rest2);
*/

//OR assignment operator
//Before
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// //Now
// rest1.numGuests ||= 10; // result: 20
// rest2.numGuests ||= 10; // result: 10

/*order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.00',
    address,
  }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// result: mushrooms ['onion', 'olives', 'spinach']

restaurant.orderPizza('mushrooms'); // result:  mushrooms []
*/

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 2,
// });

// 1) Destructuring

//SPREAD, because on RIGHT side of =
/*const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // result: 1 2 [3, 4, 5]

const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); //result {thu: {…}, fri: {…}}

// 2)Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3); // result: array [2, 3]
add(5, 3, 7, 2); // result: array [5, 3, 7, 2]
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);
*/
//////////////////////////////////////////////

//The Spread Operator (...)

/*
//Expending arrays when we have an array literal
const arr = [7, 8, 9];
//old version
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);
//spread operator
const newArray = [1, 2, ...arr];
console.log(newArray); //result [1, 2, 7, 8, 9]

//Expending arrays when we pass arguments into functions
console.log(...newArray); // result 1, 2, 7, 8, 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 or more arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

const str = 'Jonas';
const letters = [...str, ' ', 's'];
console.log(letters); //result ['J', 'o', 'n', 'a', 's', ' ', 's']

//real-world example
// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Ingredient 2?`),
//   prompt(`Ingredient 3?`),
// ];

// restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1991, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.nameOfLocation = 'Ristorante Roma';
console.log(restaurantCopy.nameOfLocation);
console.log(restaurant.nameOfLocation);
*/

/*
//Destructuring Objects
const { nameOfLocation, openingHours, categories } = restaurant;
console.log(nameOfLocation, openingHours, categories);

//Renaming variables
const {
  nameOfLocation: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values + renaming values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nesting objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Variables names != property names
*/

/*//Destructuring an array
const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

//retrieve specific elements from the array and store them into variables
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching 2 values between them
[main, secondary] = [secondary, main];
console.log(main, secondary);

//function retuning an array and destructing the reslut into multiple variables

const [starter, mainCourse] = restaurant.order(2, 0);

//Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;    //result is 2, [5, 6]
const [i, , [j, k]] = nested; // result is 2, 5, 6

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // result 8, 9, 1*/

/*
//OR ( || ) operator

console.log(3 || 'Jonas'); // result: 3
console.log('' || 'Jonas'); //result: Jonas
console.log(true || 0); // result: true
console.log(undefined || null); // result: null

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); //result : 0

//AND (&&) operator

console.log(0 && 'Jonas'); //result is 0
console.log(7 && 'Jonas'); //result is Jonas

console.log(`Hello` && 23 && null && 'Jonas'); //result is null

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

//Coding Challenge #1
/*
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.

Your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
//   1)
const [players1, players2] = game.players;
console.log(players1, players2);

//  2)
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//   3)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//  4)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

// 5)
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6)
const printGoals = function (...players1) {};
//...........................................

 The for-of Loop
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}

//Looping objects

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.lenght} days:`;
for (const day of properties) {
  openStr += `${day}`;
}
console.log(openStr);

//Property values

const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
//Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from 
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}*/

/*
// 1) My result
const position = Object.entries(game.scored);
console.log(position);
for (const [goal, player] of position) {
  console.log(`Goal ${goal}: ${player}`);
}

// Teacher's result
for (const [goal, player] of game.scored.entries())
  console.log(`Goal ${goal + 1}: ${player}`);
  

//2) My result
const entries = Object.values(game.odds);
for (const item of entries) {
  console.log((entries[0] + entries[1] + entries[2]) / entries.length);
}

//Teacher's result
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3) My result
for (const item of entries) {
  console.log(
    `Odd of victory ${game.team1}:${entries[0]}`,
    `Odd of ${'draw'}:${entries[1]}`,
    `Odd of victory ${game.team2}:${entries[2]}`
  );
}

// Teacher's result
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

//BONUS
// scorers = {3};
// for (const item of game.scored) {
//   console.log(item);
//   const nrOfGoals = game.scored.indexOf(item);
//   console.log(nrOfGoals);
// }
*/
/*
//   Sets
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet); // result: Set(3) {'Pasta', 'Pizza', 'Risotto'}

// Getting the size

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();

for (const order of orderSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; //converting set to array
console.log(staffUnique);

//Maps

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open.')
  .set(false, 'We are closed');

console.log(rest.get('name')); //result: Classico Italiano

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
// console.log(question);

// Convert object to map
const hoursMap = new Map(Object.entries(openingHours));

//Iteration on maps
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//Convert map to array
console.log([...question]);
console.log([...question.entries]);
console.log([...question.keys]);
console.log([...question.values]);



// Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// 1)
const events = [...new Set(gameEvents.values())];
console.log(events);
//2.
const yellowCard = gameEvents.delete(64);
console.log(gameEvents);

// 3)
const average = 90 / gameEvents.size;
console.log(average);
console.log(`An event happened, on average, every ${average} minutes.`);
const time = [...gameEvents.keys()].pop();
console.log(time);

// 4)
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'First' : 'Second';
  console.log(`[${half} HALF] ${min}:${event}`);
}*/

//Strings

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]); //result: 'A'
// console.log(plane[1]); // result: '3'
// console.log('B737'[0]); //result; 'B'

// console.log(airline.length);
// console.log('B737'.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
/*
const airline = 'TAP Air Portugal';
console.log(airline.slice(4)); // 'Air Portugal'
console.log(airline.slice(0, airline.indexOf(' '))); //'TAP'
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //'Portugal'

console.log(airline.slice(-2)); // starts extracting from the end of the string - 'al'
console.log(airline.slice(1, -1)); //'AP Air Portuga'

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😉');
  else console.log('You got lucky!😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');*/
/*
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passenger = 'jOnAS'; //Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// Replacing

const priceEur = '228,98€';
const priceUS = priceEur.replace('€', '$').replace(',', '.');
console.log(priceUS);

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));
console.log(plane.endsWith('neo'));

console.log('a+very+nice+string'.split('+')); //['a', 'very', 'nice', 'string']

//Padding

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+')); //+++++++++++Go to gate 23!+++++

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(465969855989545));
console.log(maskCreditCard(6568523165898415665));

// Repeat

const message2 = 'Bad weather...All departures delayed..';
console.log(message2.repeat(5));*/

/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable 
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, line] of rows.entries()) {
    const [first, second] = line.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'🎗'.repeat(i + 1)}`);
  }
});*/

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//🔴 Delayed Departure from FAO to TXL (11h25)
//             Arrival from BRU to FAO (11h45)
//🔴Delayed Departure from HEL to FAO (12h05)
//             Arrival from FAO to LIS (12h30)

for (const lines of flights.split('+')) {
  const detailsFlight = lines.split(';');
  const text = detailsFlight[0].slice(1).replace('_', ' ');
  const departure = detailsFlight[1].slice(0, 3).toUpperCase();
  const arrival = detailsFlight[2].slice(0, 3).toUpperCase();
  const time = detailsFlight[3];

  console.log(
    `${text.startsWith('Del') ? '🔴' : ''} ${text.padStart(
      36
    )} from ${departure} to ${arrival} (${time}).`
  );
}
