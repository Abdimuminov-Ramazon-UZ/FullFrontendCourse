//15-16-17-lesson
//Recursion function
//when we create function we use it obvious purpose but do we use it inner this function,of,course this is nammed recursion
// let res = 0;
// function Sum(n) {
//   //we enter condition for check parametr
//   //   console.log(data);
//   //we write return for getting function's value
//   if (n === 1) return (res += 1);
//   else {
//     res += n;
//     return Sum(n - 1); //we create here again Sum(n-1) but n increase every time
//   }
// }
//counts dteps are completed.first sum(n) function opened and second sum(n-1) opened so continue but sum(0) finished then sum(1) finished so that in the end sum(n) finished
// console.log(Sum(10));
// let company = {
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: "John", salary: 2000 },
//       { name: "Alice", salary: 1900 },
//     ],
//     internals: [{ name: "Jack", salary: 1800 }],
//   },
// };

// function sumSal(data) {
//   if (Array.isArray(data)) {
//     return data.reduce((sum, value) => sum + value.salary, 0);
//   } else {
//     let res = 0;
//     for (let subdeb of Object.values(data)) {
//       res += sumSal(subdeb);
//     }
//     return res;
//   }
// }
// console.log(sumSal(company));

// console.log(res);
//16-lesson
//Scopes ,Closure
//When we declare variables in global it occupies position in memory it is accessible in every scopes
//Scopes are function,global and block scopes.Global scopes are accessible every function or scopes.function scopes are accesible in function.block scopes are some confusing.
//Here we see contrasts in variables
//var
//var var is old and  controversial variable type
//we see first hoisting so we declare it before or after and reassigned it.In JavaScript  if we declare when we don't use variable keyword it belongs to var
// a = 5;
// console.log(a);
// var a = 5; //we use var keyword  so that  we reassign data to it var keyword and machine doesn't return error
// console.log(a);
// var a = 10; //we use here var keyword and machine doesn't run so var hasn't hosting it creates everwhere but changed according to machine rules
// function test(v) {
//   console.log(v, "function scope");
// }
// test(a); // variable a is existent here
// for (let i = 0; i < a; i += 4) {
//   console.log(a, "block scope");
// } // variable a is existent here
// console.log(a, "global scope"); // variable a is existent here
//let
//let is new and for a while obviously
//So we declare here b data
// console.log(b);//we declare first and use after because let is sensitive for this case,So hosting hasn't let
// let b = 5;
// console.log(b);
// b = 6;
// console.log(b);
// let b = 7;//we don't use let when we reassign data to variable but we don't use let keyword and assign data it is right.Now b doesn't belong to var it belongs to let
// test(b); //b is existent here
// for (let i = 0; i < b; i += 4) {
//   console.log(b, "block scope");
// } // variable b is existent here
// //const
//const menas constanta and it is as let so we declare first then use.But it doesn't accept changing, when we try
//change machine returns error hence we create functions with unique names which it is not changed in the code
// c = 8; //machine returns RefernceError
// console.log(c);
// const c = 8;
// console.log(c);
// // c = 9;//machine returns Type Error
// test(c);
// for (let i = 0; i < c; i++) {
//   console.log(c);
// } //c extinct here
//we see variables now we see scopes
//global scope is accessible everywhere
//block scope
//block scope has if and for loops
// for (let i = 0; i < 7; i++) {
//   //i extinct for's scope
//   console.log(i);
// }
// console.log(i); //i is not defined
// if (true) {
//   let i = ":x";
//   console.log(i);
// }
// console.log(i); //i is not defined
//If we declare variable in block scope variables work only this scope and don't accessible for out or globals
//but we use  globals in block scope then globals change though they use in global scope
// let d = ":y";
// if (true) {
//   d = ":z";
//   console.log(d);
// }
// console.log(d); //:z d is changed
//function scope
//we create function scope or functions certainly we use inner variables only var type variables appears global others doesn't accessible.When we create function position is openend in local memory and created variables settles down  in this memory but global variables don't settle downm here.They are settled down other memeory  so  Lexical environment.but it is returned as reference so lexical record doesn't copy global variables it creates only reference
// let g = "minimum";
// var h = "Bent";
// const j = "Pill";
// function getTest(f) {
//   let g = "Maximum";
//   h = "Hitch";
//   const j = "LOL";
//   console.log(h);
//   console.log(j);
//   console.log(g);
//   console.log(f);
// }
// getTest("v");
// console.log(g); //g is not changed
// console.log(h); //h changes to "Hitch"
// console.log(j); //j is not changed
//Closure
//when we create inner function in some function and create any inner variables which each one variables are in outer function
//others are in inner function.Certainly we can't use inner variables in outer function.If we use outer function's variables it is nammed closure
// function testVar(params) {
//   let a = "k";
//   // console.log(b);//b is not defined
//   return function () {
//     let b = "X";
//     console.log(a, b);
//   };
// }
// testVar()(); //k,X a and b has inner function but b doesn't extinct in outer function
//garabge collection is removed function variables when function ends itself task
//17-lesson
//IIFE,NFE.Old var,function as object,Global Object
//IIFE
//IIFE = Immediately Invoked function Expression
//when we declare var type variables and create function after its.If we use functions and variables then variables become changed though we use function scope.IIFE solve its

// function testName(b) {
//    var a = 8;
//   console.log(a, b);
// }
// testName(5); //here a equals to 8
// console.log(a); //alse here a=8 so a changes unexpected
//we crate two scope function
// (function testII(b) {
//   var a = 10;
//   console.log(a); //here a equals to 10
// })();
// console.log(a); //here a equals 7
// //but it is old this problem is solved by let
// //Global Object
// //we work in global Objects we usually works with windows object
// //How do we create global variables
// //we declare global variables
// globalThis.c = 8;
// //c is quite accessible here we use even in IIFE
// console.log(c);
// (() => {
//   var a = 12;
//   c = 11;
//   console.log(a, c);
// })();
// console.log(a, c); //c changed to 11 a isn't changed
// //window is HTML or web browser console,globalThis for code editor or pure JavaScript,global for NodeJs
// //function object
// //when we declare function then we ask metods and properties as object
// function test() {
//   console.log("hey,js");
// }
// test();
// console.log(test.name); //we ask function's name
// console.log(test.length); //here function length is 0 because we don't create parametres
//NFE
//NFE is Named Function Expression
//we create named function  and attach another one name
// let test = function getName(a) {
//   console.log("NFE", `and ${a}`);
//   return getName(); //machine returns error maximum call stack exceeded
// };
// test("JS");
// getName("python");//but it doesn't work it works only in created function
//Function constructor
//we use function constructor as crete function it is old
// let getTest = new Function("console.log("hey")"); //we wrie all codes in the string
// getTest();
//new keyword with functions
//we create some function and we need to create as this function as then we use new keyword and named with other name
// function getName(a) {
//   function getOld() {
//     console.log(31);
//   }
//   //   getOld();
//   console.log(a);
//   return "1";
// }
// getName("easy");
// // let get = new getName();
