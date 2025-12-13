//Tutorial for Samar Badriddinov
//Important datas
//Differencies of variables
//JavaScript is more sensitive in variable names we don't create characteric variables
// let max = 'anna'
// let tim = 'jean'
// let anna = () => {}
// const maximal = Infinity
// var age = 26
// date = 41
// console.log(date, maximal + 1)
// const person = {
// 	name: 'Lenovo',
// }
//we may change person's properties so we don't create absolute constantas in Js
//Important part of variables is difference between let and var
//===================//
//Data types
//undefined,null,string,number,object,array,boolean others are objects
//if we  create variable and it is empty  machine returns undefined if we need special empty variable  so we give null to it
// let freeze
// let cool = null
// console.log(freeze, cool)
//interpolation is that we use bacticks
// console.log(cool + 1 + freeze)
//===================//
//Conditions
// let trafficlight = 'red'
// switch (trafficlight) {
// 	case 'green':
// 		console.log('may') //first condition wroks and others stop
// 		break
// 	case 'red':
// 		console.log('may')
// 		break
// 	case 'green':
// 		console.log('may2')
// 		break
// }
//if else is strictly than switch case
//===================//
//Cycles
//when we need steps similar to others we use cycles
let number = 2;
// while (number > 6) {
//   console.log(1);
//   number++;
// }
// do {
//   console.log("x");
// } while (number);
//we have break and continue operators for jump or stop procedures
// for (let i = 0; number < 20; number++, i++) {
//   console.log(i);
//   if (number === 5) {
//     console.log(number);
//     break; //here codes are stopped
//     // continue;//we don't get number === 5 elements
//   }
// }
//Ternariy operator
// number == 2 ? console.log(true) : console.log(false);
//Type functions
//function declarations is simple functions and call with parenthess
//when we assign variables for function declaration we have  function's value
// add(9, 10);
// console.log(add(9, 10));
// function add(a = 5, b = 6) {
//   return a + b;
// }
// const addictive = add();
// const nodefault = add(8, 9);
// console.log(addictive + 7);
// console.log(nodefault + 7);
//if we assign function to vaiable in the beginning we have value of function but we don't have hosting so don't use before decalaration as variable
// showHello(8, 9);
// const showHello = (a, b) => {
//   return a + b;
// };
//we have arrow function and it is brief function constructor but we don't have this here
//String metods doesn't have newans
//Math library is famous with metod of random
//callbacks are function and it gives function's parametr.It helps controlled of function's execute order
// let firstLog = (callbacks) => {
//   console.log(1);
//   callbacks();
// };
//we don't give name for callback function and we don't call it with brackets it executes itselves
// firstLog(function () {
//   console.log(2);
// });
//Object and destruction
//for in is for Objects
//for of is for Array elements
//Array doesn't have newans
// let array = [1, 2, 3, 4, 5, 65, 67, 8];
// for (let i of array) {
//   console.log(i++);
// }
//Array has empty elements when we create with array constructor
//Copies for variables
