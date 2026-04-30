//Tutorial for Samar Badriddinov
//Important datas
//Differencies of variables
//JavaScript is more sensitive in variable names we don't create characteric variables
// let max = 'anna'
// let tim = 'jean'
// let anna = () => {}
// const maximal = Infinity
// var age = 26
// date = 41
// console.log(date, maximal + 1)
// const person = {
// 	name: 'Lenovo',
// }
//we may change person's properties so we don't create absolute constantas in Js
//Important part of variables is difference between let and var
//===================//
//Data types
//undefined,null,string,number,object,array,boolean others are objects
//if we  create variable and it is empty  machine returns undefined if we need special empty variable  so we give null to it
// let freeze
// let cool = null
// console.log(freeze, cool)
//interpolation is that we use bacticks
// console.log(cool + 1 + freeze)
//===================//
//Conditions
// let trafficlight = 'red'
// switch (trafficlight) {
// 	case 'green':
// 		console.log('may') //first condition wroks and others stop
// 		break
// 	case 'red':
// 		console.log('may')
// 		break
// 	case 'green':
// 		console.log('may2')
// 		break
// }
//if else is strictly than switch case
//===================//
//Cycles
//when we need steps similar to others we use cycles
let number = 2;
// while (number > 6) {
//   console.log(1);
//   number++;
// }
// do {
//   console.log("x");
// } while (number);
//we have break and continue operators for jump or stop procedures
// for (let i = 0; number < 20; number++, i++) {
//   console.log(i);
//   if (number === 5) {
//     console.log(number);
//     break; //here codes are stopped
//     // continue;//we don't get number === 5 elements
//   }
// }
//Ternariy operator
// number == 2 ? console.log(true) : console.log(false);
//Type functions
//function declarations is simple functions and call with parenthess
//when we assign variables for function declaration we have  function's value
// add(9, 10);
// console.log(add(9, 10));
// function add(a = 5, b = 6) {
//   return a + b;
// }
// const addictive = add();
// const nodefault = add(8, 9);
// console.log(addictive + 7);
// console.log(nodefault + 7);
//if we assign function to vaiable in the beginning we have value of function but we don't have hosting so don't use before decalaration as variable
// showHello(8, 9);
// const showHello = (a, b) => {
//   return a + b;
// };
//we have arrow function and it is brief function constructor but we don't have this here
//String metods doesn't have newans
//Math library is famous with metod of random
//callbacks are function and it gives function's parametr.It helps controlled of function's execute order
// let firstLog = (callbacks) => {
//   console.log(1);
//   callbacks();
// };
//we don't give name for callback function and we don't call it with brackets it executes itselves
// firstLog(function () {
//   console.log(2);
// });
//Object and destruction
//for in is for Objects
//for of is for Array elements
//Array doesn't have newans
// let array = [1, 2, 3, 4, 5, 65, 67, 8];
// for (let i of array) {
//   console.log(i++);
// }
//Array has empty elements when we create with array constructor
//Copies for variables
// let a = 10;
// let b = a;
// b = b + 10;
// console.log(a, b);
//Deep clones with Objects
//4 hour 30 minutes
//Clones as primitives
// const person = {
//   name: "Max",
//   age: 41,
//   hobbies: {
//     games: "chess",
//   },
// };

// const secondPerson = person;
// secondPerson.name = "Anna";
// console.log(person, secondPerson);
//way of iteration
// let copyObj = (obj) => {
//   const clone = {};
//   for (let key in obj) {
//     clone[key] = obj[key];
//   }
//   return clone;
// };
// let secondPerson = copyObj(person);
// console.log(person, secondPerson);
//simple clones with iterators but we change person's elements
//object assign
// const thirdPerson = Object.assign({}, person);
// //with spread operator
// // Array clones
// let cars = ["bmw", "mercedec", "citroen"];
// let clone = cars.slice();
// clone.push("byd");
// console.log(clone, cars);
// //with spread operator
// let secondClone = [...cars];
// function log(a = "Max") {
//   console.log(arguments);
// }
// log((a = "wine"));
//proto
// let obj = {
//   name: "anna",
//   age: "31",
// };
// const newObj = Object.create(obj);
// console.log(obj, newObj);
//DOM
// let div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = "red";
// document.getElementById("element").append(div);
// div.insertAdjacentHTML("afterbegin", "<h1>Read more</h1>");
// //Events
// let button = document.createElement("button");
// button.style.width = "24px";
// button.style.height = "24px";
// button.style.backgroundColor = "blue";
// div.append(button);
// button.onclick = () => {
//   alert(5);
// };
//here only works 7
// button.onclick = () => {
//   alert(7);
// };
//6 hour five minutes
//if we add several addeventlistener it works with queu,and get way of button's style with event.target
// button.addEventListener("click", (e) => {
//   console.log("first");
// });
// button.addEventListener("mouseenter", (event) => {
//   console.log("second");
//   event.target.style.backgroundColor = "yellow";
// });
// button.removeEventListener("click", () => {
//   console.log("back");
// });
//we need get outer function for second argument removeListener
//as second argument of addEventListener
// let counter = 0;
// const deleteCounter = () => {
//   counter++;
//   console.log(counter);
//   if (counter == 4) {
//     button.removeEventListener("click", deleteCounter);
//   }
// };
// button.addEventListener("click", deleteCounter);
//we remove event of click from button element
// const link = document.querySelector("a");
// link.addEventListener("click", (event) => {
//   // event.preventDefault();
//   //we may stopped browser's default actions and events
//   console.log("click");
// });
// const btns = document.querySelectorAll("button");
// btns.forEach((item, index) => {
//   console.log(index + 1);
//   item.addEventListener(
//     "click",
//     (event) => {
//       event.target.style.margin = "40px";
//     },
//     { once: true }
//   );
// });
//we have third option of addeventlistener it changes times of work button's events so if we click twice on button it works once time though we touch several times
// const data = document.querySelector("[data-item='3']");
// console.log(data);
//we may get important element with data- attribute
// const element = data.nextSibling;
// console.log(element);
//Js has text elements as empty string row so machine gets empty strings as element
//event.target has more metods as reset() that is removes elementsin input value
// 6 hour 55 minutes
//classlIst
// const list = document.querySelectorAll("button");
// console.log(list[0].classList);
// //we may add,remove and control classes with classlist
// if (list[0].classList.contains("red")) {
//   console.log("element");
// }
//classlist has toggle metod so if class has in element it removes current class,if none has it adds current class
// const wrapper = document.querySelector(".wrapper");
// wrapper.addEventListener("click", (event) => {
//   if (event.target && event.target.tagName === "BUTTON") {
//     console.log("delegation");
//   }
// });
// wrapper.addEventListener("click", (event) => {
//   if (event.target && event.target.matches("button.blue")) {
//     console.log("delegation");
//   }
// });
//we need avoid upper-down cliks as delegation
//setTimeOut
// const id = setTimeout(logger, 2000);
// function logger() {
//   console.log("timer");
// }
// // clearInterval(id);
// //we may stop setTimeout with clearInterval
// //7 hour 30 minutes
// let btn = document.createElement("button"),
//   params = 0;
// element.append(btn);
// btn.style = `width:20px;height:20px`;
// function logger() {
//   if (params === 5) {
//     console.log("enough please don't touch anything");
//     // clearInterval(timerId);
//   }
//   params++;
// }
// let timerId;
// // btn.addEventListener("click", logger);
// btn.addEventListener("click", () => {
//   timerId = setInterval(logger, 500);
// });
//Date()
// let startDate = new Date();
// for (let i = 0; i < 1000000; i++) {
//   let number = i ** 3;
// }
// let endDate = new Date();
// console.log(`loop was worked ${endDate - startDate}`);
// document.addEventListener("keydown", (event) => {
//   if ((event.code = "Escape")) {
//     confirm("please use other key");
//   }
// });
//constructor functon
//we may create function prototype object
// function Person(params, args) {
//   this.params = params;
//   this.args = args;
// }
// let isPerson = new Person("sums", "noelement");
// console.log(isPerson);
//we have function constructor object
//9 hour 10 minutes
//we create object thus type and we write the same names current name and object property name
// function loggers() {
//   let day = new Date();
//   let current = day.getDay();
//   return { current: current };
// }
// function loggers() {
//   let day = new Date();
//   let current = day.getDay();
//   return { current };
// }
// let day = loggers();
// console.log(day);
//if we don't give use strict in function so context this equals window object if we give use strict this equals to undefined
//function constructor is used for if we create many the same objects if we create little variables object literal is enough
//if we create internal function as arrow function we create it as variable so context this doesn't follow outer object because it's  object doesn't exist it creates as variable
//if we create it in object metod it gets outer object context thus means outer object we may get outer object's refernce in current oobject
//call and aplly metods give object literal to function
// let drugs = { res: "respirator" };
// function named() {
//   console.log(this);
//   return this;
// }
// named.apply(drugs);
// // named();
// //we use bind metod for chaines this to primitive values we create other function which is this=2
// let numbers = named.bind(2);
// console.log(numbers());
// function ret(a, b, ...rest) {
//   console.log(a, b, rest);
// }
// ret(3, 4, 5, 6, 67);
//rest parametr is function's abstract part.It returns as array
//9 hour 40 minutes
//we may use classes thus  appearance
// console.log("read");
// class Grammar {
//   constructor(firstName, meanings, type, physicalInfo) {
//     this.firstName = firstName;
//     this.meanings = meanings;
//     this.type = type;
//     this.physicalInfo = physicalInfo;
//   }
//   readData() {
//     if (this.type == "grammar") {
//       return this.type + "Book";
//     }
//   }
//   render() {
//     this.readData();
//     let div = document.createElement("div");
//     element.append(div);
//     div.innerHTML = `
//    <p>So we have more grammar books we discussed about ${this.firstName} it has ${this.physicalInfo} we get it from ${this.type}.${this.meanings}</p>
//     `;
//   }
// }
//first way
// let firstOffer=new Grammar(  "Azar",
//   "third edititon books and it has third part",
//   "grammar",
//   "expensive")
// firsOffer.render()
//second way
// new Grammar(
//   "Azar",
//   "third edititon books and it has third part",
//   "grammar",
//   "expensive"
// ).render();

// let a = 4;
// console.log(a << 5);
//we have several binary operatorlar so we move elements use expontial
//toLocaleString() is used for readable money exchanger and other famous elements
// let num = 4;
// console.log(
//   num.toLocaleString("en-UZ", { style: "currency", currency: "UZS" })
// );
//JSON is format of send data to backend service
//from JSON to XML
//10 hour
//if we clone as deep objects with JSON so we don't lost objects first values though we change it's later
// let sum = document.querySelector("#sum"),
//   usd = document.querySelector("#usd"),
//   change = document.querySelector("#change");
// console.log(usd.id);
// //   console.log(usd.value)
// sum.addEventListener("input", () => {
//   let request = new XMLHttpRequest();
//   request.open("GET", "./current.json");
//   request.setRequestHeader("Content-Type", "application/json");
//   request.send();
//   request.addEventListener("load", () => {
//     if (request.status === 200) {
//       let data = JSON.parse(request.response);
//       console.log(data, usd.value, data.current);
//       let currentMoney = +sum.value / data.sum;
//       usd.value = currentMoney.toLocaleString("en-US", {
//         style: "currency",
//         currency: "USD",
//       });
//     } else {
//       usd.value = "Something went wrong";
//     }
//   });
// });
//10 hour 20 minutes
// let sum = document.querySelector("#sum"),
//   usd = document.querySelector("#usd"),
//   change = document.querySelector("#change");

// let data = {
//   active: true,
//   sum: 12300,
//   usd: 1,
// };
// let active = true;
// change.addEventListener("click", () => {
//   active = !active;

//   sum.placeholder = "usd";
//   usd.placeholder = "sum";
//   console.log(active);
// });
// if (data.active) {
//   sum.addEventListener("input", () => {
//     usd.value = (sum.value / data.sum).toLocaleString("en-US", {
//       style: "currency",
//       currency: "USD",
//     });
//   });
// } else {
//   usd.addEventListener("input", () => {
//     sum.value = (usd.value * data.sum).toLocaleString("en-UZ", {
//       style: "currency",
//       currency: "UZS",
//     });
//   });
// }

// console.log(active);
// class Exchanger {
//   constructor(active, value) {
//     this.active = active;
//     this.value = value = 12300;
//   }
//   change() {
//     let sum = document.querySelector("#sum"),
//       usd = document.querySelector("#usd"),
//       change = document.querySelector("#change");

//     change.addEventListener("click", () => {
//       if (this.active === undefined) {
//         this.active = true;
//       } else {
//         this.active = false;
//       }
//       usd.value = sum.value = 0;
//       this.change();
//     });
//     console.log(this.active);
//     if (this.active === true) {
//       sum.placeholder = "sum";
//       sum.addEventListener("input", () => {
//         usd.value = (sum.value / this.value).toLocaleString("en-US", {
//           style: "currency",
//           currency: "USD",
//         });
//       });
//     } else {
//       sum.placeholder = "usd";
//       usd.placeholder = "sum";
//       sum.addEventListener("input", () => {
//         usd.value = (sum.value * this.value).toLocaleString("en-UZ", {
//           style: "currency",
//           currency: "UZS",
//         });
//       });
//     }
//   }
//   render() {
//     let div = document.createElement("div");
//     element.append(div);
//     div.innerHTML = `
//    <input type="text" id="sum" placeholder="sum" />
//    <button id="change">Change</button>
//    <input type="text" id="usd" placeholder="usd" />
//    `;
//     this.change();
//   }
// }
// // new Exchanger().render();
// class Exchanger {
//   constructor(active, value) {
//     this.active = active;
//     this.value = value || 12300; // value = 12300 to'g'rilandi
//   }

//   change() {
//     let sum = document.querySelector("#sum"),
//         usd = document.querySelector("#usd"),
//         changeBtn = document.querySelector("#change");

//     // Avvalgi eventlarni tozalash (agar mavjud bo'lsa)
//     if (this.sumHandler) sum.removeEventListener("input", this.sumHandler);
//     if (this.usdHandler) usd.removeEventListener("input", this.usdHandler);

//     if (this.active === true) {
//       // SUM -> USD (so'mdan dollarga)
//       sum.placeholder = "So'm";
//       usd.placeholder = "USD";
//       sum.value = "";
//       usd.value = "";

//       this.sumHandler = () => {
//         let sumValue = parseFloat(sum.value.replace(/\s/g, '')) || 0;
//         usd.value = (sumValue / this.value).toLocaleString("en-US", {
//           minimumFractionDigits: 2,
//           maximumFractionDigits: 2
//         });
//       };

//       this.usdHandler = () => {
//         let usdValue = parseFloat(usd.value.replace(/\s/g, '')) || 0;
//         sum.value = (usdValue * this.value).toLocaleString("en-US", {
//           minimumFractionDigits: 0,
//           maximumFractionDigits: 0
//         });
//       };

//     } else {
//       // USD -> SUM (dollardan so'mga)
//       sum.placeholder = "USD";
//       usd.placeholder = "So'm";
//       sum.value = "";
//       usd.value = "";

//       this.sumHandler = () => {
//         let usdValue = parseFloat(sum.value.replace(/\s/g, '')) || 0;
//         usd.value = (usdValue * this.value).toLocaleString("en-US", {
//           minimumFractionDigits: 0,
//           maximumFractionDigits: 0
//         });
//       };

//       this.usdHandler = () => {
//         let sumValue = parseFloat(usd.value.replace(/\s/g, '')) || 0;
//         sum.value = (sumValue / this.value).toLocaleString("en-US", {
//           minimumFractionDigits: 2,
//           maximumFractionDigits: 2
//         });
//       };
//     }

//     // Eventlarni bog'lash
//     sum.addEventListener("input", this.sumHandler);
//     usd.addEventListener("input", this.usdHandler);

//     // Change tugmasi uchun event
//     changeBtn.addEventListener("click", () => {
//       // active qiymatini toggle qilish
//       this.active = !this.active;
//       console.log("Active o'zgardi:", this.active);

//       // Qayta konfiguratsiya qilish
//       this.change();
//     });
//   }

//   render() {
//     let div = document.createElement("div");
//     let container = document.getElementById("app") || document.body;
//     container.append(div);
//     div.innerHTML = `
//       <input type="text" id="sum" placeholder="So'm" />
//       <button id="change">↺ Almashtirish</button>
//       <input type="text" id="usd" placeholder="USD" />
//     `;
//     this.change();
//   }
// }

// Ishga tushirish
// new Exchanger(true).render();
//Promise
// const statusF = true;
// let request = new Promise((res, rej) => {
//   if (statusF) {
//     res();
//   } else {
//     rej();
//   }
// });
// request.then(() => {
//   console.log("max");
// });
//Formdata
// let dataForm = new FormData(data);
// console.dir(data);
// let dataForm = document.querySelector("form");
// we must use DOMContentloaded to window
// window.addEventListener("DOMContentLoaded", () => {
//   console.log("max");
// });
// dataForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formData = new FormData(dataForm);
//   const obj = {};
//   formData.forEach((value, key) => {
//     obj[key] = value;
//   });
//   console.log(obj);
// });
//we use form for work with common elements
//work with telegram bot
let telegramToken = "8652583030:AAFDPMERarIaF1HnqwsyG2So8S-5DRGaH90",
  ChatID = "5081822186";
let dataForm = document.querySelector("form");
dataForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(dataForm);
  const object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  const json = JSON.stringify(object);
  fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: ChatID,
      text: `Name:${object.title},title:${object.body}`,
    }),
  });
});
//EsLInt
let arr = [1, 2, 343];
//use strict ignores old codes and use new version ECMA principes,if it write we lost function this
//regEx
//we use regular expressions with patterns regex use //pattern/name as
const firstName = "Lankaster";
const regEx = /a/i;
//it returns array index so it gets elements as array
console.log(firstName.search(regEx));
//i with index,g - global,m - more raws
console.log(firstName.match(regEx));
//if it returns -1 so this element doesn't exist here
const password = "element....";
console.log(password.replace(/./g, "*"));
// /./ means all elements
console.log(password.replace(/\./g, "*"));
//regex mainly means working with string elements
const test = /a/g;
console.log(test.test(regEx)); //true
// \d - digits
// \w - words
// \s -  space
