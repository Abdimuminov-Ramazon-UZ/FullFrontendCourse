//Advanced arrays
//From Webbrain
// let arr = [
//   function (l) {
//     console.log(l + "l");
//   },
//   "aa",
// ];
// arr[function()]
// arr[0]();
// arr.test = "Tim";
// console.log(arr); //test: 'Tim' ] add as object's key value pair
// console.log(arr[2]); //undefined
// arr.length = 1;
// console.log(arr);
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let res = matrix.flat(Infinity).reduce((sum, value) => {
//   return (sum += value);
// }, 0);
// console.log(res);
//Exercise 1
// let fruits = ["Apples", "Pear", "Orange"];

// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push("Banana");

// // what's in fruits?
// console.log(fruits.length); // 4
//Exercise 2
// let styles = ["Jazz", "Blues"],
//   l = Math.round(styles.length / 2);
// styles.push("Rockn-roll");
// styles[l] = "Classics";
// styles.shift();
// styles.unshift("Rap", "Reggae");
// console.log(styles);
//Exercise 3
// let arr1 = ["a", "b"];

// arr1.push(function () {
//   console.log(this);
// });

// arr1[2](); // return current array becuse this reference itself object
//Exercise 4
// function SumInput() {
//   let numbers = [];
//   while (true) {
//     let value = prompt("enter number", 0);
//     if (value === "" || value === null || !isFinite(value)) break;
//     numbers.push(+value);
//   }
//   let sum = numbers.reduce((sum, value) => {
//     return (sum += value);
//   });
//   return sum;
// }
// let res = SumInput();
// alert(res);
// let a = 5;
// console.log(isFinite(a));
//Exercise 5
// function getMaxSubSum(arr) {
//   let res = [];

//   for (let v in arr) {
//     if (arr[v] > 0 && arr[+v + 1] > 0) {
//       res.push(arr[v], arr[+v + 1]);
//     } else if (arr[v] > 0 && arr[+v + 1] < 0 && arr[+v + 2] > 0) {
//       res.push(arr[+v + 1], arr[+v + 2]);
//     }
//   }
//   console.log(res);
//   let rs = res.reduce((sum, v) => (sum += v), 0);
//   return rs;
// }
// // console.log(getMaxSubSum([1, -2, 3, 4, -9, 6]));
// // let array = [1, -2, 3, 4, -9, 6];
// // let arrf = array.filter((value) => value < 0);
// // console.log(arrf);
// console.log(getMaxSubSum([-1, 2, 3, -9]));
// console.log(getMaxSubSum([2, -1, 2, 3, -9]));
// console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
// console.log(
//   getMaxSubSum([-2, -1, 1, 2]),
//   getMaxSubSum([100, -9, 2, -3, 5]),
//   getMaxSubSum([1, 2, 3])
// );
// // let arr = [1, 5, 4];
// // arr.shift();
// // console.log(arr);
// console.log(-1 > 0);
// let arr = [1, 4, 5, 6, 72];
// let arr2 = ["a", "m", "n"];
// console.log(arr.splice(1, 1), arr); //splice cut one element which it is given index
// console.log(arr.splice(1, 2), arr); //cut  two elements
// console.log(arr.splice(1, 1, 1), arr); //remove one index data and change with third parametr
// console.log(arr.splice(1, 0, 9), arr); //change first indexed data with third parametr
// console.log(arr.splice(-1, 1), arr);//we use negative indexes for come last of array
// console.log(arr.slice(1, 2), arr); //metod slice doesn't change array it gives only data
// let obj = {
//   5: "1", //here order is forced otherwise machine return 1 empty item
//   1: "2",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2,
// };
// let a = arr.concat(obj);
// console.log(arr, a);
// console.log(arr.includes(1));
// let rs = arr2.reduceRight((sum, item, index, arr) => {
//   return (sum += item + index);
// }, 0);
// console.log(rs); //0n2m1a0
// //reduceRight() works right to left
// console.log(Array.isArray(rs)); //false
// let arrs = ["orange", "blossom", "grapes"];
// console.log(arrs.join(" "));
// //Exercise 1
// function camelize(data) {
//   let arr = data.split("-").join("");
//   console.log(arr);
//   //   return arr;
// }
// camelize("background-color");
// camelize("background-color"); // == 'backgroundColor';
// camelize("list-style-image"); //== 'listStyleImage';
// camelize("-webkit-transition"); //== 'WebkitTransition';
//Exercise 2
// let arr = [5, 3, 8, 1];
// function filterRange(arr, a, b) {
//   let arr1 = arr.filter((item) => a <= item && item <= b);
//   return arr1;
// }
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
//Exercise 3
// function filterRange(arr, a, b) {
//   let arr1 = arr.filter((item) => a <= item && item <= b);
//   return arr1;
// }
// arr = filterRange(arr, 1, 4);
// console.log(arr);
//Exercise 4
// let arr = [5, 2, 1, -10, 8];
// arr = arr.reverse();
// console.log(arr);
// Exercise 5
// let arr = ["HTML", "JavaScript", "CSS"];
// function copySorted(arr) {
//   return arr.sort((a, b) => a.localeCompare(b));
// }
// let sorted = copySorted(arr);
// console.log(sorted);
//Exercise 6
// function Calculator(data)
// let calculator = {
//   calculate(data) {
//     return eval(data);
//   },
//   addMethod(name, a, b) {
//     return eval(`${a}${name}${b}`);
//   },
// };
// console.log(calculator.calculate("3+7"));
// console.log(calculator.addMethod("*", 8, 9));
//Exercise 7
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];
// console.log(users);
// let names = users.map((item) => item.name).join(",");
// console.log(names);
//Exercise 8
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];
// let surnames = users.map((item) => item.name + " " + item.surname);

// users.map((item, index) => {
//   delete item.name;
//   delete item.surname;
//   item["fullName"] = surnames[index];
// });
// let userMapped = users;
// console.log(userMapped[0]);
// console.log(users);
// console.log(surnames);
// console.log(userMapped);
//Exercise 9
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];
// function sortByAge(arr) {
//   return arr.sort((a, b) => a.age - b.age);
// }
// sortByAge(arr);
// console.log(arr);
//Exercise 10
// let arr = [1, 2, 3];
// function shuffle(arr) {
//   return arr.sort(() => Math.random() - 0.5);
// }
// shuffle(arr);
// // arr = [3, 2, 1]
// console.log(arr);
// shuffle(arr);
// // arr = [2, 1, 3]
//Exercise 11
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 26 };
// let mary = { name: "Mary", age: 27 };

// let arr = [john, pete, mary];
// function getAverageAge(arr) {
//   let AverAge =
//     arr.reduce((sum, item) => {
//       return (sum += item.age);
//     }, 0) / arr.length;
//   return arr.sort((a, b) => a.age - b.age).find((item) => item.age >= AverAge);
// }
// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
// //Exercise 11
// function unique(arr) {
//   // let newSet = new Set(arr);
//   // return newSet;
//   return arr.filter((item, index, arr) => arr.indexOf(item) === index);
// }

// let strings = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// console.log(unique(strings)); // Hare, Krishna, :-O
//From Webbrain academy courses
//Exercise 1
// let str = ["webbrain", "academy"];
// let str2 = str.join("").split("");
// let obj = {};
// for (let k of str2) {
//   obj[k] = 0;
// }
// for (let i in obj) {
//   console.log(obj[i]);
//   for (let j of str2) {
//     if (i === j) {
//       obj[i] = obj[i] + 1;
//     }
//   }
// }

// console.log(obj);
//Exercise 3
// let arr = [11, 22, 33];
// let arr2 = [11, 22, 33];
// console.log(arr.toString() == arr2.toString()); //true
//Exercise 4
let users = [
  { id: 1, year: 1998, engine: 1, name: "Tico" },
  { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
  { id: 3, year: 2010, engine: 1.6, name: "Lacetti" },
  { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
  { id: 5, year: 2012, engine: 1.6, name: "Damas" },
  { id: 6, year: 2000, engine: 2, name: "Malibu" },
  { id: 7, year: 2011, engine: 2.4, name: "Trecker" },
  { id: 8, year: 2015, engine: 1.6, name: "Onix" },
];
// let res = users.filter((item) => item.year <= 2000);
// let res = users.filter((item) => item.year >= 2010);
// let res = users.sort((a, b) => a.engine - b.engine);
// let res = users.sort((a, b) => a.year - b.year);
// let res = users.sort((a, b) => a.name.localeCompare(b.name));
//console.log(res);
// let addData = (arr) => {
//   let res = arr.map((item) =>
//     item.year <= 2000 ? { ...item, status: "old" } : item
//   );
//   return res;
// };
// let addData = (arr) => {
//   let res = arr.map((item) =>
//     2000 < item.year && item.year <= 2010 ? { ...item, status: "middle" } : item
//   );
//   return res;
// };
// let addData = (arr) => {
//   let res = arr.map((item) =>
//     item.year > 2010 ? { ...item, status: "new" } : item
//   );
//   return res;
// };
// console.log(addData(users));
//By special homework
// No7
// find sum of ages
// let user = {
//   id: 1,
//   name: "Odil",
//   age: 78,
//   children: [
//     {
//       id: 1,
//       name: "Umar",
//       age: 54,
//       children: [
//         { id: 1, name: "Asmo", age: 34 },
//         { id: 2, name: "Osim", age: 30 },
//         { id: 3, name: "Xattob", age: 25 },
//       ],
//     },
//     { id: 2, name: "Umar", age: 54 },
//     { id: 3, name: "Umar", age: 54 },
//   ],
// };
// let sum = 0;
// function findAge(obj) {
//   if (obj.children) {
//     obj.children.map((item) => (sum += item.age));
//     let arr = obj.children.find((item) => item.children);
//     if (arr) {
//       sum = sum + obj.age;
//       findAge(arr);
//     }
//   }
//   return sum;
// }
// console.log(findAge(user));
// No8
// return objects which give job
// let arr = [
//   { id: 1, name: "Usmon", job: "developer" },
//   { id: 2, name: "Usmon", job: "developer" },
//   { id: 3, name: "Usmon" },
//   { id: 4, name: "Usmon", job: "developer" },
//   { id: 5, name: "Usmon" },
// ];
// let res = arr.filter((item) => item.job);
// console.log(res);

// No14
//if login and password are true return "welcome",otherwise return "error"
let arr = [
  { id: 3, name: "Usmon", parol: "1231" },
  { id: 1, name: "Umar", parol: "1241" },
  { id: 5, name: "Jasur", parol: "3452" },
  { id: 2, name: "Asmo", parol: "2312" },
  { id: 4, name: "Salohiddin", parol: "3421" },
];
function login(name, password) {
  let res = arr.find((item) => item.name === name && item.parol === password);
  if (res) {
    return "welcome";
  } else {
    return "error";
  }
}
console.log(login("Umar", "1241"));
// logIn('Umar','2113') => error
// logIn('Salohiddin','3421') => welcome
