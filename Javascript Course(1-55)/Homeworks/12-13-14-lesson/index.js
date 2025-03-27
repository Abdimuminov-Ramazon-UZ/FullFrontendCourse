//CRUD
//Exercise 1
//count capital and lowercase letters
// let range = {
//   from: 1,
//   to: 5,
// //   length: 2,
// };
// for (let i of range) {
//   console.log(i);
// }
// let obj = {
//   0: "Hello",
//   1: "Anna",
//   length: 2,
// };
// let arr = Array.from(obj);
// let arr = Array.from(range);
// console.log(obj, arr);
// let str = "Tim";
// let chars = Array.from(str);
// console.log(chars);
// let newM = new Map();
// newM.set("name", "Anna");
// console.log(newM);
// console.log(newM.get("name"));
// newM.set("1", "first").set(2, "second");
// console.log(newM);
// console.log(newM.entries());
// let arr = "webbrain".split("").entries();
// console.log(arr);
// let nSet = new Set(arr);
// console.log(nSet);
// let john = {};
// let john1 = [john];
// let weak = new WeakMap();
// weak.set(john, "ok");
// john = null;
// console.log(weak.get(john)); //undefined
// console.log(weak.get(john1));
// console.log(weak.keys());
//JavaScript Info exercises
//Exercise 1
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function anagClean(data) {
//   //   let res = data.sort((a, b) => a.localeCompare(b));
//   let res = data
//     .map((item) => {
//       return item
//         .toLowerCase()
//         .split("")
//         .sort((a, b) => a.localeCompare(b));
//     })
//     .map((item) => item.join(""));
//   let newS = new Set(res);
//   return newS;
// }
// console.log(anagClean(arr));

// let obj = Array.from(arr);
// console.log(obj);
//Exercise 2
// let map = new Map();
// map.set("name", "John");
// let keys = map.keys();
// let obj = Array.from(keys);
// console.log(obj);
// console.log(keys, obj.push());
//Execise 3
// let messages = [
//   { text: "hello", from: "john" },
//   { text: "How goes?", from: "john" },
//   { text: "See you soon?", from: "alice" },
// ];
// let Nmap = new Map();
// messages.unshift("anna");

// let set = new Set();
// set.add(messages[0]);
// set.add(messages[1]);
// console.log(messages);
// // Nmap.set(messages[0]);
// console.log(set);
// console.log(`Read it:${set.has(messages[0])}`);
// let readMap = new WeakMap();
// let obj = messages[1];
// let date = new Date();
// console.log(obj, date);
// readMap.set(messages[1], new Date(2025, 5, 12));
// // console.log(readMap.get(messages[1]));
// console.log(readMap);
// let obj = {
//   text: "simple",
//   copy: false,
//   size: "1.4mb",
//   data: "unknown",
// };
// let entries = Object.entries(obj);
// console.log(Object.values(obj)); //return array
// console.log(Object.keys(obj));
// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));
//Exercise 4
// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };
// let res = (data) => Object.values(data).reduce((sum, item) => (sum += item), 0);
// console.log(res(salaries));
//Exercise 5
// let count = (data) => Object.keys(data).length;
// console.log(count(salaries)); //3
// //Destructing
// let [a, b, c] = "abcs"; //ignore fourth element
// console.log(a, b, c);
// let [one, three] = new Set([1, 2, 3]);
// console.log(one);
// let obj = { name: (width = 200), surname: "mike", max: 1 };
// let [user, name] = Object.entries(obj);
// console.log(user);
// console.log(obj.width);
// function show({ title = "senior", salary = 1200 } = {}) {
//   console.log(title, salary);
// }
// show({ title: "junior", salary: 200 });
// let { max: min } = obj;
// console.log(min);
// let { witdth: w = 200 } = {};
// console.log(w, width, obj);
//exercise 1
// let user = { name: "John", years: 30 };
// let { name, years: age, isAdmin: isAdmin = false } = user;
// console.log(name, age, isAdmin);
// //Exercise 2
// let salaries = {
//   // John: 100,
//   // pete: 200,
//   // mary: 250,
// };
// console.log(Object.entries(salaries));
// function topSal(data) {
//   let res = [],
//     ob = null;

//   for (let [key, value] of Object.entries(data)) {
//     // console.log(key, value);
//     if (Object.entries(data).length == 0) {
//       return ob;
//     } else {
//       res.push(value);
//     }
//   }
//   return Math.max(...res);
// }

// console.log(topSal(salaries)); //250
// console.log(res);s
// for (let [key, value] of Object.entries(salaries)) {
//   console.log(key, value);
// }
//timezone
// let newD = new Date();
// console.log(newD.getTimezoneOffset()); //-300 we are living in GMT +5 timezone so value equals 300
// console.log(newD.setMonth(5));
// let Daten = new Date(2016, 2, 25);
// console.log(Daten - newD);
// let newD = new Date();
// console.log(newD);
// for (let i = 0; i < 100; i++) {
//   i = i * i * i;
//   console.log(i);
// }
// let oldD = new Date();

// console.log(oldD - newD);
// function newDa(a = "n") {
//   console.log(a);
// }
// //Exercise 1
// let newF = Date();
// console.log(newF);
// //Exercise 2
// console.log(newD.getDay());
// let weekday = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

// function getWeekD(data) {
//   let weekD = data.getDay() - 1;
//   return weekday[weekD];
// }
// console.log(getWeekD(newD));
// let newD = new Date();
// console.log(newD);
// weekday.pop();
// let arr = ["Su", ...weekday];
// console.log(arr);
// function euroDay(data) {
//   return arr[data.getDay()];
// }
// console.log(euroDay(newD));
//Exercise 3
// let day = newD.getDate();
// function getDatedAgo(data, x) {
//   return data.getDate() - x;
// }
// console.log(getDatedAgo(newD, 6));//19
//Exercise 4

// function getLastmonth(x, y) {
//   let newd = new Date();
//   newd.setFullYear(x, y, 0);
//   return newd.getDate();
// }
// console.log(getLastmonth(2012, 2));
// //Exercise 5
// function coundSec(data) {
//   return data.getHours() * 3600 + data.getMinutes() * 60 + data.getSeconds();
// }
// console.log(coundSec(newD));
// function tillTomorrow(data) {
//   return (
//     24 * 3600 -
//     data.getHours() * 3600 +
//     data.getMinutes() * 60 +
//     data.getSeconds()
//   );
// }
// console.log(tillTomorrow(newD));
// //Exercise 6
// function formatdate(data) {
//   let m = newD - data;
//   console.log(m);
//   if (data <= 1) {
//     return "right now";
//   } else if (newD - data <= 60000) {
//     return `${m / 1000} sec.ago`;
//   } else if (m >= 6000) {
//     return `${m / 60000} min. ago`;
//   }
// }
// console.log(formatdate(new Date(newD - 30 * 60 * 1000)));
//Json
//Exercise 1
let user = {
  name: "John Simth",
  age: 35,
};
let str = JSON.stringify(user);
console.log(str);
let toStr = JSON.parse(str);
console.log(toStr);
//Exerxise 2
let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;
// console.log(room);
let str2 = JSON.stringify(meetup, function replacer(key, value) {
  //   return key == "self" || key == "place" || key == "occupiedBy"
  return key != "" && value == meetup ? undefined : value;
});
console.log(str2);
