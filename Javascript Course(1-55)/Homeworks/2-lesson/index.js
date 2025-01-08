"use strict";
// checking data type
// console.log("" + 1 + 0); //string 10
// console.log("" - 1 + 0); //-1
// console.log(true + false); //1
// console.log(6 / "3"); //number 2
// console.log("2" * "3"); //number 6
// console.log(4 + 5 + "px"); //string 9px
// console.log("$" + 4 + 5); //string $45
// console.log("4" - 2); //number 2
// console.log(" -9  " + 5); //string -9  5
// console.log(null + 1); //number 1
// console.log(undefined + 1); // number NaN
// console.log(false + 1); //number 1
// console.log(true - 1); //number 0
// postfix and prefix

let a = 1,
  b = 1;
let c = ++a;
let d = b++;
console.log(d); //yet d=1
console.log(c); //2

// assignment result

a = 2;
let x = 1 + (a *= 2); //x=5,a=4
console.log(x, a);

// comparisons
console.log(5 > 4); //true
console.log("2" > "12"); //true (lexicographical)
console.log(undefined == null); //true  null=0
console.log(undefined === null); //false undefined is primitive but null is object
console.log(null == "\n0\n"); //false null=0
console.log(null === +"\n0\n"); //false
console.log();
console.log();
