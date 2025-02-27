//13-14-lesson
//Destructing
// let ar = [1, 2, 4, 5];
// ar.splice(2, 0, 3);
// console.log(ar);
let obj1 = [
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
// let res = obj.reduce(() => {}, obj); //reduce circle all items, first it returns obj but second time it returns undefined
// console.log(obj, res); //res is undefined
// let res2 = obj.reduce((sum, curr) => {
//   console.log(sum, curr);
// }, obj);
// console.log(res2); //undefined
// let obj = {
//   name: "webbrain",
//   title: "It center",
//   data: {
//     year: "1920",
//     age: 85,
//   },
// };
// let {
//   name: newName,
//   title,
//   data: { year }, //we destructs nested array data
// } = obj; //destructing is right to left algorithm we separate variables thruogh names we may give new name,we destructs nested objects
// console.log(newName, title, year);
let arr = ["Peach", "grapes", "banana"]; //we may destructs arrays to variables but array hasn't key we use indexes
let [zeroIndex] = arr;
zeroIndex = zeroIndex + " fruits";
// console.log(zeroIndex); //peach
//however we don't need remains other first data we collect new array through spread operator
let [zero, ...res] = arr;
// console.log(zero, res);
//we use destructive paramtres as function
function getSur({ data, name }) {
  //however it isn't reversible
  console.log(data);
}
// getSur({ data: "anna", surname: "Lee" });
//Object.entries() is object to array
// Object.entries(arr).map(([key, value]) => {
//   //we desruct elements in runtime
//   console.log(key, value);
// });
//Date library
//we use data values with real project.Date is built in library in Javascript
// let data = Date.now();
// let date = new Date();
// console.log(date); //2025-02-25T12:54:58.720Z
//JSON Javacript Object notation
//we use JSON for API.It has two metod.first is stringfy() that changes Json format.Second is parse we reverse Json format to object format.Json format is cmpleted for every programming language.
//Stringfy() has three parametr.first is value,second is replacer, third is indentation.If we want only name and year key:value pairs we need to give its to second parametr.If we have nested objects we may separate its with indents machine opens nested objects automatically
// let user = {
//   name: "webbrain",
//   year: 2015,
//   age: 10,
//   data: {
//     founder: "unknown",
//     place: "32-40",
//   },
// };
// let res1 = JSON.stringify(user, ["name", "year", "data", "founder"], [4]);
// console.log(res1); //{"name":"webbrain","year":2015,"data":{"founder":"unknown"}}
// let res2 = JSON.parse(res1);
// console.log(res2);
//new Map is as the object
// let obj = { name: "webbrain" },
//   map = new Map();
// map.name = "webbrain"; //it is way  as object
// console.log(obj, map);
//But name doesn't numerable and unvisible because when we use map as object so it makes exclusive reference at this time we use map as array it creates another one reference.So that we have two reference and when we delete one reference second reference dosn't remove.one out of two save datas
//we use special metods for add datas to map as set() here datas saved as array,set() has two parametr first is key second is value we get datas through metod get()
// map.set("year", "anna");
// console.log(map);
// console.log(map.get("year")); //anna
// //we don't use numbers in object key but it is possible in map
// map.set(false, "center");
//we delete datas through delete() metod
// map.delete(false);
//we clear all map datas through clear() metod
// map.clear();
//we use keys() and values() as iterator
let newMap = new Map([
  ["id", 1],
  ["host", "yes"],
  ["pos", "undeclared"],
]);
newMap.name = "Tim";
console.log(newMap.keys()); //[Map Iterator]
console.log(newMap.values()); //[Map Iterator]
console.log(newMap.entries()); //[Map Entries]
// Object.entries(map).next();
console.log(newMap);
//we use generator functions for manual iterator
console.log(newMap.entries().next()); //{ value: [ 'id', 1 ], done: false }
//when we ask again next() and it runs until last element it returns done:true
//we return map to object through fromentries() metod
let obj = Object.fromEntries(newMap); //{ id: 1, host: 'yes', pos: 'undeclared' }
console.log(obj);
console.log(obj.name); //undefined
//we use forEach for iteration metod in map but we don't use map() metod
console.log(
  newMap.forEach((element) => {
    console.log(element);
  })
);
//new Set() is only value collection
let newSet = new Set();
newSet.add(obj); //add()  addes only value
console.log(newSet);
console.log(newSet.has(obj)); //we check elements with  has()metod
//set remove similar elements and create unique collection
//new WeakMap() and new WeakMap()  when we use new map() and new Set() there machine create reference if we equals map to null garbage collection doesn't delete Map().So we evade problem we use WeakMap() metods are as Map()
let weak = new WeakMap();
// weak.set(obj);
// console.log(weak);
