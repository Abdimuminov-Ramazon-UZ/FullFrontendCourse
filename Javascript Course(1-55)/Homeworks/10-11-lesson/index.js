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
