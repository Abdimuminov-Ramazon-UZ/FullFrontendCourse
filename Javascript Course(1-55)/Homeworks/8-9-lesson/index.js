"use strict";
//String and Number
//Number
//Exercise 1
// let str = "Hello";

// str.test = 5; //it doesn't work because test isn't special metod for built in string library

// console.log(str.test); //hello
//Exercise 2
// let a = +prompt("Please Enter first number ...", "");
// let b = +prompt("Please Enter second number ...", "");
// let sum = a + b;
// alert(`summary number is ${sum}`);
//Exercise 3
// let number = 6.35, //6.35=6.34999999999972 first number is 9 then 4 and toFixed round and return 6.34
//   number2 = 1.35; //1.35=1.350000000000002 first number is 0 then 5
// alert(number.toFixed(20));
// alert(number2.toFixed(20));
//Exercise 4
// let number = +prompt("Please enter number", "");
// function readNumber() {
//   let num;
//   do {
//     num = +prompt("Enter a number please ?", 0);
//   } while (!isFinite(num));
//   if (num === null || num === "") return null;
//   return +num;
// }
// alert(`Read ${readNumber()}`);
//Exercise 5
// let i = 0;
// while (i != 10) {
//   i += 0.2; //0.2000000000000011 so that if we find summary loop it doesn't equal 10
// }
// console.log((0.2).toFixed(25));
//Exercise 5
// function randomNumb(x, y) {
//   let n = Math.random() * y;
//   if (x < n < y) {
//     return n;
//   }
// }
// console.log(randomNumb(1, 5));
// console.log(Math.random());
// //Exercise 6
// function randomInt(x, y) {
//   let n = parseInt(Math.random() * y);
//   if (x <= n) return n;
// }
// console.log(randomInt(1, 5));
// console.log(randomInt(1, 5));
//From Webbrain courses
//Exercise 1
//To convert decimal number to binary number and  count 0 and 1
// let number = 5;

// function count(x = 4) {
//   let y = 0,
//     z = 0;
//   let n = x.toString(2).split("");
//   for (let value in n) {
//     if (+value == 0) {
//       ++y;
//     } else {
//       ++z;
//     }
//   }
//   return [y, z];
// }

// console.log(count(number));
//Exercise 2
// let number = [2, 3, 4, 5, 21, 223, 4, 70];
// let number2 = [-10, -40, -50];
// function diffMaxMin(x) {
//   let y = Math.max(...x) - Math.min(...x);
//   if (Math.sign(y) == 1) {
//     return y;
//   }
// }
// console.log(diffMaxMin(number));
// console.log(diffMaxMin(number2));
//characters
// let string = "JavaScript \r EcmaScript"; //cut JavaScript
// console.log(string);
// let str = "obvious puprose \t several math"; //tab
// console.log(str);
// let a = "Several\b parametres \f for \v; //function \v we use \u000A9"; //\b erase letter l so that it erase before itself element,\f move under raw,\v is move veritcal tab,we use \uxxxx type for some complete characters in the string
// console.log(a);
// let str2 = ~40;
// let str3 = 40;
// console.log(str2);
// console.log(str3.toString(32));
// console.log(String.fromCodePoint(95)); //get string elements from ASCII table
//Exercise 1
// let ucFirst = "john";
// console.log(ucFirst.slice(1));
// console.log(ucFirst[0].toUpperCase() + ucFirst.slice(1));
//Exercise 2
// function checkSpam(str) {
//   if (
//     str.toLowerCase().includes("viagra") ||
//     str1.toLowerCase().includes("xxx")
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkSpam("buy Viagra"));
// console.log("NNNN".toLowerCase());
//Exercise 3
// function truncate(str, x) {
//   let str2 = str.slice(0, x);
//   return str2 + "..";
// }
// console.log(truncate("what i'd like to tell on this topic"));
// //Exercise 4
// function extracurrencyValue(str) {
//   let str2 = +str.slice(1);
//   return str2;
// }
// console.log(extracurrencyValue("$120"));
//by webbrain courses
//Exercise 1
// function checkPart(str1, str2) {
//   if (str1.includes(str2)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkPart("webbrain", "a"));
//Exercise 2
// let str = "webbrain academy";
// function countLett(str) {
//   let arr = {};
//   for (let value of str) {
//     if (str.includes(value)) {
//       arr[value] = ~~arr[value] + 1;
//       console.log(arr[value]);
//     }

//     console.log(value);
//   }
//   return arr;
// }
// console.log(countLett(str));
//Exercise 3
let str = "web@#@#rainacademy1112223";
function countChar(str) {
  let obj = {};
  for (let x of str) {
    console.log(x.codePointAt());
    if (47 > x.codePointAt(0) && x.codePointAt(0) < 57) {
      obj["number"] = ~~obj["number"] + 1;
    } else if (64 > x.codePointAt(0) && x.codePointAt(0) < 123) {
      obj["letter"] = ~~obj["letter"] + 1;
    } else {
      obj["char"] = ~~obj["char"] + 1;
    }
  }
  return obj;
}
console.log(countChar(str));
