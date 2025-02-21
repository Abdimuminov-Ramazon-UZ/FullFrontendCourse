//10-11-lesson
//10-lesson
//Arrays(basic)
//array is indexed data though object is more complex than array however array is convenient case for use.We declare array with square brackets so constructor array use also.we separate elements with comma and they are indexed autotically.
//we access elements with index through 0,1,2,3....we begin to count with 0
// let arr = [1, 2, 23];
// console.log(arr);
// console.log(arr[0]); //1
// //we use static property length and print last element
// console.log(arr.length);
// console.log(arr[arr.length - 1]);
// //we use at() when we use negativ index
// console.log(arr.at(-2));
// //constructor array is new Array()
// let arr2 = new Array(5); //If we write only five in constructor it returns empty array but it means array's length.If we add sixth element with brackets arr2 has five empty eleemnts and given  element though first five element is empty they occupies place in array
// arr2[6] = 1;
// console.log(arr2);
// arr2 = [5, 6];
// console.log(arr2);
//we use toString() for convert array to string so that some complex metod is join() we use it cut commas and spaces
// console.log(arr.toString());
// console.log(arr.join());
// console.log(arr.join(""));

// console.log(arr.join(",")); //we write anything here
//we add arrays with concat If we add with + so arrays add such as string
// console.log(arr + arr2); //such as string 1,2,235,6
// console.log(arr.concat(arr2)); //[ 1, 2, 23, 5, 6 ]
// console.log(arr.concat(arr2, [], function name() {})); //we give anything parametres in the concat
//If we check type  array with typeof machine returns object so that we check array type with isArray() metod
// console.log(Array.isArray(arr)); //true ,when we use such metods we must use build-in libraries which are Array,Number,String and Object
//comparison arrays
// let arr3 = [];
// console.log(arr3 == 0); //true empty array returns 0 however we comparison array with "0" machine retruns false because "0" is string
//Loops
//Of course we use for...of for print values if we use fore in machine returns indexes
// let arr4 = [1, 2, 3, 4, 5, true, false, null, 6, 7, 8, 9, function name() {}];
// for (x of arr4) {
//   console.log(x + 5);
// }
// for (x in arr4) {
//   console.log(x);
// }
//Metods
//add and remove elements
//push() add element end of array
// let ar = [1, 2, 3, 4, 65, 6];
// ar.push(5, 8); //parameters are unlimited as concat
// console.log(ar); //add 5
//pop() remove element end of array
// ar.pop(); //no parametr
// console.log(ar);
//If we want to remove first position we use shift() for adding use unshift()
// ar.unshift(4, 87); //unlimited parametres
// console.log(ar);
// ar.shift();
// console.log(ar);
//cut elements from array
//splice() is powerful metod that is added,removed and updated datas in the array
// ar.splice(0, 2, "asus"); //it changes ar and cut from 0 index  2 element and third and next parametr   occupies cut elements
// console.log(ar); //cut
// ar.splice(2, 0, "lenovo"); //replace third element to "lenovo"
// console.log(ar);
//slice() cut elements from array  however arrary doesn't change
// ar.slice(0, 2); //no change array
// console.log(ar);
//indexOf() searchs asked element
// console.log(ar.indexOf(5)); //-1
// console.log(ar.indexOf(65, 2)); //4 first parametr is searched element second parametr means which index is beginning search action
// console.log(ar.lastIndexOf(65)); //4
// //split("") is convert string to array
// let str = "1,2,,5";
// console.log(str.split(","));
// //reverse() write left to right array
// console.log(ar.reverse()); //[ 6, 65, 4, 'lenovo', 3, 'asus' ]
// //includes() searches asked element
// console.log(ar.includes(6)); //true
//=====================================
//11-lesson
//Array advanced metods
//filter() filtered array datas,it has callback function with three parametres.First parametr is value of array elements,second is index of every element,third is given whole array.If we return true or 1 filter returns given array
let num = [1, 2, 34, 3, 22, 45, 0];
let str = ["orange", "apple", "banana", "kiwi"];
let obj = [
  { id: 1, year: 2000, name: "Python" },
  { id: 2, year: 2002, name: "Csharp" },
  { id: 3, year: 2003, name: "Swift" },
  { id: 4, year: 2002, name: "Golang" },
  { id: 5, year: 1995, name: "JavaScript" },
  { id: 6, year: 2005, name: "PHP" },
  { id: 7, year: 2006, name: "Java" },
  { id: 8, year: 2001, name: "Fsharp" },
  { id: 9, year: 2000, name: "Assembler" },
];
// let res = num.filter((value, index) => {
//   return 1 < value;
// });
// console.log(res);
// //we write filter with function
// let res1 = str.filter(function (value, index) {
//   return value.length <= 5;
// });
// console.log(res1);
//we use filter in obj
// let res = obj.filter((value, index) => value.year === 2002);
// console.log(res);
// let res = obj.filter((value, index) => 1 >= value.id && value.id <= 5);
// console.log(res);
//sort()  sorts array In contrast from find() it has several special ways. So sort() sorts numbers with ASCII table and it  sorts  wrong bigger than 10 numbers
// let res = num.sort((a, b) => a + b); //It is  more incomprehensible  algoritm however it is internal algoritm for JavaScript
// console.log(res);
// let res = num.sort((a, b) => a - b); //now sort works right because it sorts with compare numbers
// console.log(res);
//If we use sort() with strings so we careful of comparison with ASCII table
// let res = str.sort((a, b) => a.localeCompare(b)); //there localeCompare() ignores Uppercase and compare with lowercase letters
// console.log(res);
// let res = obj.sort((a, b) => a.name.localeCompare(b.name));
// console.log(res);
//find() we search one elemnts we use it
//we don't forget though we use array metods in array its return array
// let res1 = obj.find((value) => {
//   return value.id === 5;
// });
// console.log(res1); //v{ id: 5, year: 1995, name: 'JavaScript' }
// console.log(
//   obj.find((value) => {
//     return (value.id = 5);
//   }).name
// ); //Python
//findIndex() search datas with index
// let res = obj.findIndex((value) => {
//   return value.id === 5;
// });
// console.log(res); //4
//In contrast find() stops when it gets asked value filter() doesn't stop it runs all array though it finds asked element
//findLastIndex() when we need to search asked value end of array
//forEach() is loop metod for array but it doesn't return array
// let res = num.forEach((value, index) => {
//   console.log(value);
//   return value + 2; //run but don't out in the displays
// });
//map() the same forEach() but in contrast it returns array
// let resMap = num.map((value, index) => {
//   return value + 2;
// });

// console.log(res); //undefined because res is undefined
// console.log(resMap); //array undefined if we do some work in array with map metod map returns all array metod and we write return in callback function map returns new array.
//every() checks every elements according to condition If some case is false machine retruns false
// let res = num.every((value) => {
//   return value === NaN;
// });
// console.log(res); //false So NaN elemnts hasn't num object
// let res1 = num.every((value) => typeof value === "number");
// console.log(res1);//true
//some() checks elements the same every() though every() stops when it sees elements which according to condition some() is checking to last element then it returns answer
// let res = num.some((value) => typeof value !== "number");
// console.log(res); //false so num hasn't other type
//fill() changes elements
//let res = num.fill(22, 4); //fill() has three parametr first is new element second is starter third is last position which is changed if we don't write third parametr machine changes all parameters after second parametr
// let res = num.fill(22, 4, 7);
// console.log(res);
//copyWithin() copy elements from given array and replace elements second array
// let res = num.copyWithin(0, 3, 7);//which is 0 index data replace from third index to 7 index
// // console.log(res);[
// //   3, 22, 45, 0,
// //  22, 45,  0
// // ]
// reduce() is powerful metod that calculates some different way
// console.log(num);
// let res = num.reduce((sum, current, i) => {
// console.log(sum, current);
// console.log(i);
// return sum - i; //-16
// }, 5); //here res equals 5 because sum and 5 are only parametr current is elements of array we give callback function's first parametr as starter parametr through second parametr of reduce() we give third parametr to callback function and it means index of array
//reduce() has two parametr first is callback function which reduce() equals it's value,second is starter value reduce()'
//reduce runs on every elements and do condition these elements and calculates usually sum
// console.log(res);
//Muldimensional arrays
//when we create arrays and create nested arrays they are named multidimensional
// let arr = [2, 1, [3, true, false], 5];
// console.log(arr[2][0]); //3
//This is easy but we met quite nested arraays we use flat() and open all arrays to parent array if we use no parametr flat() open only bracket to parent if we write Infinity flat() opens all  nested arrays and summed only parent array
// console.log(arr.flat(Infinity));
//new Set() we use this appearance for create no similar elements array
//There we see some similar versions as new Set()
// let res = num.copyWithin(2, 1, 7);
// console.log(res);
// let res1 = res.filter((value, index, array) => array.indexOf(value) == index);//here logic is indexOf() checked indexes
// console.log(res1);
// let res2 = new Set(res); //new Set() array created
// console.log(res2);
//new Map() creates array as objects
let object = new Map([
  ["a", 1],
  ["b", 2],
]).entries();
console.log(object);
// ); //Map(2) { 'a' => 1, 'b' => 2 }
// //however we use Object.entries() as new Map()
// let object = obj[1];
// let arr = Object.entries(object);
// console.log(arr); //[ [ 'id', 2 ], [ 'year', 2002 ], [ 'name', 'Csharp' ] ]
//from() create array from string or elements and it has second parametr as callback function. Callback function does some works in elements
// let res = Array.from("academy", (v) => v.toUpperCase());
// console.log(res);
// console.log(Array.from("webbrain")); //[
//   'w', 'e', 'b',
//   'b', 'r', 'a',
//   'i', 'n'
// ]
//Generator functions when we call generator function it count next and before elements
// console.log(object.next());
// console.log(object.next());
// console.log(object.next());
// console.log(object.next());
//{ value: [ 'a', 1 ], done: false }
// { value: [ 'b', 2 ], done: false }
// { value: undefined, done: true }
// { value: undefined, done: true }
//As loop we check next elemnts has or no we must use entries()
//otherwise next() doesn't work
