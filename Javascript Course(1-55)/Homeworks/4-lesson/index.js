//4-lesson
// let i = 5;
// for (; i < 15; i++) {
//   if (i > 10) {
//     console.log(i);
//   } else {
//     continue;
//   }
// }
//Exercise 1
// let i = 3;
// while (i) {
//   console.log(i--);
// } //3,2,1
//Loop is running first i=3 then i is decreased when i=0 loop will be stopped.
// let i = 0;
// while (++i < 5) console.log(i); //
// i = 0;
// while (i++ < 5) console.log(i);
//not the same as both loops,second loop when i=4 condition is true and loop runs and i is increased 5
// for (i = 0; i < 5; i++) console.log(i); //0,1,2,3,4
// for (i = 0; i < 5; ++i) console.log(i); //0,1,2,3,4
//the same as loops
// for (i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
//Exercise 2
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// let i = 0;
// while (i < 3) {
//   console.log(i++);
// }
// Exercise 3
// let getNum = +prompt("Give Me Number ?");
// let getNum = 34;
// if (getNum >= 100) {
//   getNum = +prompt("Give Me Number ?", 1);
// }
// for (let i = 1; i <= getNum; i=i+50) {
//   if (getNum <= 100) {
//     getNum = +prompt("Give Me Number ?");
//   }
//   if (getNum == 0) {
//     alert("");
//   } else {
//     alert(i);
//   }
// }
//Exercise 4
//prime numbers
// let getNum = +prompt("Number ?", 1);
// let getNum = 50;

// next: for (let i = 2; i <= getNum; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue next;
//   }
//   console.log(i);
// }
//Exercise 5
//Multiple Table
// let resArr = [];
// for (let i = 2; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     let getMul = i * j;
//     let resStr = `${i} * ${j} = ${getMul}`;
//     console.log(resStr);
//   }
// }

//Exercise 6
//switch case
// let checkBrow = "Edge";
// if (checkBrow == "Edge") {
//   console.log("You've got the Edge !");
// } else if (
//   checkBrow == "Chrome" ||
//   checkBrow == "Firefox" ||
//   "Safari" ||
//   "Opera"
// ) {
//   console.log("Okay we support these browsers too");
// } else {
//   console.log("We hope that this page looks ok !");
// }

//Exercise 7
// let a = 3;
// switch (a) {
//   case 0:
//     console.log(0);
//     break;
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//   case 3:
//     console.log("2,3");
// }
//Exercise 8
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return console.log("did parents allow you ?");
//   }
// }
// checkAge(21);
// console.log(checkAge(23));
// function checkAge2(age) {
//   if (age > 18) {
//     return true;
//   }
//   console.log("check"); //code stops there.
//   return console.log("did parents allow you ?");
// }
// checkAge2(22);
// console.log(checkAge2(24));
// function checkAge(age) {
//   // let res = true;
//   return age > 18 ? true : console.log("test");
//   // if (age > 18) {
//   //   return true;
//   // } else {
//   //   return console.log("did parents allow you ?");
//   // }
// }
// checkAge(22);
// console.log(checkAge(17));
function checkAge(age) {
  return age > 18 || "test";
}
console.log(checkAge(17));
console.log(checkAge(49));
//Exercise 9
function min(a, b) {
  return a < b ? a : b;
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));
//Exercise 10
function pow(x, n) {
  return x ** n;
}
console.log(pow(5, 5));
//Exercise 11
let ask = (question, yes = true, no = false) => {
  if (question) {
    yes();
  } else {
    no();
  }
};

ask(
  "do you agree?",
  () => {
    console.log("you agreed");
  },
  () => {
    console.log("you cancelled the execution");
  }
);
// letsOk()=>{
//   console.log("tim");
// };
// letsOk() //error malformed is a function statement
// let sum = function name(a, b) {
//   console.log(a + b);
// };
// name("a","bs") //error: not declared function
// sum("a", "b");
//Exercise 12
// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", ""),
//   n = prompt("n?", "");
// if (n <= 0) {
//   alert(
//     `Power ${n} is not supported, please enter
//     an integer number greater than zero`
//   );
// } else {
//   alert(pow(x, n));
// }
//Exercise 13
// it("Raises x to the power n", function () {
//   let x = 5;

//   let result = x;
//   assert.equal(pow(x, 1), result);

//   result *= x;
//   assert.equal(pow(x, 2), result);

//   result *= x;
//   assert.equal(pow(x, 3), result);
// });
//one test do ohne thing or checks one operation
