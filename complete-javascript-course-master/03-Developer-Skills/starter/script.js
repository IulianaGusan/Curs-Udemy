// Remember, we're gonna use strict mode in all scripts now!
"use strict";
//BUG FIXME WIP

//PROBLEM 1:

//We work for a company building a smart home thermometer. Our most recent task is this: "Given an arrray of temperatures of one day, calculate the temperatures amplitude.Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0]; 

//   for (let i = 0; i < temps.length; i++) {
//     if(typeof(temps[i])!=='number') continue;
//     if (temps[i] > max) max = temps[i];
//     if(temps[i] < min) min = temps[i];
//   }
//   console.log(max,min);
//   return max-min
// };
// const amplitude= calcTempAmplitude(temperatures);
// console.log(amplitude);

//PROBLEM 2
//Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const calcTempAmplitude = function (temps1, temps2) {

//   const temperatures =temps1.concat(temps2);
//   console.log(temperatures);

//   let max = temperatures[0];
//   let min = temperatures[0]; 

//   for (let i = 0; i < temperatures.length; i++) {
//     if(typeof(temperatures[i])!=='number') continue;
//     if (temperatures[i] > max) max = temperatures[i];
//     if(temperatures[i] < min) min = temperatures[i];
//   }
//   console.log(max,min);
//   return max-min;
// };
// const amplitude=calcTempAmplitude([3,5,1],[9,0,5]);
// console.log(amplitude);


//Coding Challenge #1

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]

// const maxtemp1=[17, 21, 23];
// const maxtemp2=[12, 5, -5, 0, 4];


// const printForecast = function (arr) {
// for(let i=0; i>=0; i++){
//   const day= ;
//   const string1=arr.shift();
//   console.log(`....${string1[i]}in ${day[0]} days... ${'C'}in ${day} days......${'C'}in ${day} days`)
// }
// };
// printForecast(maxtemp1)

// const printForecast = function (arr) {
  // for(let i=0; i>arr; i++){
  //   const string1=maxtemp1.shift();
//   console.log(`....${C}in ${} days... ${C}in ${} days......${C}in ${} days`)