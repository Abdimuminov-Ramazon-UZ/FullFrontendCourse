//Recurseive function
// let obj = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
// obj.next.next = obj.next;
// console.log(obj);
// //Exercise 1
// function Sumto(n) {
//first way
//   if (n == 1) {
//     return 1;
//   } else {
//     return n + Sumto(n - 1);
//   }
//second way
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
//third way
//   return (n * (1 + n)) / 2;
// }
// console.log(Sumto(5));
// console.log(Sumto(10000));
//Exercise 2
// function sumFac(n) {
//   if (n == 1) {
//     return n;
//   } else {
//     return n * sumFac(n - 1);
//   }
// }
// console.log(sumFac(10));
//Exercise 3
// function orderFibNum(n) {
//   //first way
//   // if (n == 1 || n <= 0 || n == 2) {
//   //   // arr[n] = n;
//   //   return 1;
//   // } else {
//   //   return orderFibNum(n - 2) + orderFibNum(n - 1);
//   // }
//   let a = (b = 1);
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }
// console.log(orderFibNum(77));
//
// console.log(-1 >= 0);
//Exercise 4
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };
// function printList(data) {
//   for (let value of Object.values(data)) {
//     if (typeof value == "number" || value == null) {
//       console.log(value);
//     } else {
//       printList(value);
//     }
//   }
// }
// printList(list);
// for (let value of Object.values(list)) {
//   console.log(value);
// }
// let name = "Anna";
// function sayHi() {
//   console.log(name);
// }
// name = "Max";
// sayHi(name); //Max
// function makecounter() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }
// let counter = makecounter();
// console.log(counter());//0
// console.log(counter());//1
// console.log(counter());//2//there has saved lexical environment and it uses changing count

// console.log(makecounter()());//0 there doesn't save lexical environment
// console.log(makecounter()());//0
//Exercise 1
// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter();

// console.log(counter1()); //couter's lexical environment
// console.log(counter1());
// //they are  independent tohers than
// console.log(counter2()); //counter2's lexical environment
// console.log(counter2());
// //Exercise 2
// function Counter() {
//   let count = 0;

//   this.up = function () {
//     return ++count;
//   };
//   this.down = function () {
//     return --count;
//   };
// }

// let counter = new Counter();
// console.log(counter.up()); //1
// console.log(counter.up()); //2
// console.log(counter.down()); //1
// //Exercise 2
// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }

// sayHi(); //undefined
// // console.log(user);/user is not defined
// //Exercise 3
// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// console.log(sum(4)(5)); //9
// let newS = sum();
// console.log(newS(4)(5));
//Exercise 4
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.filter = function (data) {
//   console.log(data);
//   return data;
// };
// function inBetween(a, b) {
//   // let arr1 = [];
//   // for (a; a <= b; a++) {
//   //   arr1.push(arr[a]);
//   // }
//   // return arr1;
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }
// console.log(arr.filter(inBetween(3, 6)));
// function inArray(arr1) {
//   return function (x) {
//     return arr1.includes(x);
//   };
// }
// console.log(arr.filter(inArray([1, 2, 10])));
//Exercise 5
// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];
// // users.sort((a, b) => (a.name > b.name ? 1 : -1));

// // console.log(users);
// function byField(type) {
//   return (a, b) => (a[type] > b[type] ? a : -1);
// }

// users.sort(byField(users));
// console.log(users);
//Exercise 5
// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i <= 10) {
//     let shooter = function () {
//       return i++;
//     };
//     shooters.push(shooter());
//   }
//   console.log(shooters);
//   return shooters;
// }

// let army = makeArmy();
// console.log(army[0]);
// console.log(army[5]);
//var,let and const
// console.log(tes);

// tes = "x";
// console.log(tes);
// function test() {
//   console.log(tes);
//   var tes = "significanse";
//   return tes;
// }
// test();
// console.log(test.name);
// function f(sayHi = function () {}) {
//   console.log(sayHi.name); // sayHi (works!)
// }

// f();
// function test2(
//   sayGood = function () {
//     return 1;
//   }
// ) {
//   return sayGood;
// }
// test2();
// function test(a, b) {
//   test.count = 0;
//   return a;
// }
// test(5);
// console.log(test.name, test.length, test.count);
//Exercise 1
// let a = 1;
// function f() {
//   let count = 0;
//   function counter() {
//     return count++;
//   }
//   f.set = (value) => {
//     value = count;
//   };
//   f.decrese = () => {
//     return count--;
//   };
//   return counter();
// }
// console.log(f());
// console.log(f.set());
// console.log(f());
// console.log(f());
// console.log(f());
// console.log(f.toString());
//Exercise 2
// let a = 0;
// function sum(a) {
//   let currentSum = a;

//   function f(b) {
//     currentSum += b;
//     return f;
//   }

//   f.t = function () {
//     return currentSum;
//   };

//   return f;
// }
// // // // sum(5);
// c = sum(5)(6) + 5;
// // alert(sum(4)(-2));
// console.log(c);
// console.log(sum(5)(6));
// console.log(sum(5)(6));
// console.log(sum.toString());
// function s() {
//   a = s.toString();
//   return a;
// }
// console.log(s());
// function sayHi(data) {
//   console.log(data);
// }
// let id = setTimeout(sayHi, 1000, "anna");

// clearTimeout(id);
// let id2 = setInterval(sayHi, 2000, "Tm");
//Exercise 1
function printNum(from, to) {
  if (from <= to) {
    let id = setInterval(() => {
      if (from <= to) {
        console.log(from);
        from++;
      }
    }, 1000);
  }
}
//printNum(1, 15);
function printM(from, to) {
  if (from <= to) {
    let id = setTimeout(function go() {
      if (from <= to) {
        console.log(from);
        from++;
        setTimeout(go, 1000);
      }
    }, 1000);
  }
}
//printM(1, 14);
//Exercise 2
let i = 0;

let start = Date.now();

function count() {
  if (i == 1000000000) {
    console.log("Done in " + (Date.now() - start) + "ms");
  } else {
    setTimeout(count);
  }

  // a piece of heavy job
  for (let j = 0; j < 1000000; j++) {
    i++;
  }
}

// count();
// let timer = setInterval(count);
function countSI() {
  for (let j = 0; j < 1000000; j++) {
    i++;
  }
  if (i == 1000000000) {
    console.log("Done in " + (Date.now() - start) + "ms");
    clearInterval(timer);
  }
}
// countSI();
//Exercise 3
//when we write codes wit setTimeOut and setinterval so time codes fall down under row queue so that first loop executes then time codes run.i equals to 100000 in the end
setTimeout(() => {
  console.log(i);
}, 100);
for (let j = 0; j < 10000000; j++) {
  i++;
}
