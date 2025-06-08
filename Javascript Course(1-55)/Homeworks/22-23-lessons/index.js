//Object descriptors getters and setters
//we create values with defineproperty metod
// let obj = {};
// Object.defineProperty(obj, "user", { value: "copy1" });
// console.log(obj.user);
// let descriptors = Object.getOwnPropertyDescriptor(obj, "user");
// console.log(descriptors, obj);
// obj.user = "max";
// console.log(obj.user);
// // console.log();
// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
// console.log(clone);
// let obj = {
//   name: "ava",
//   last: "Max",
//   get fullName() {
//     return this.name + "  " + this.last;
//   },
//   set fullName(value) {
//     this.name = value[0];
//     this.last = value[1];
//     if (this.name == "Tim") {
//       this.name = "Kim";
//     }
//   },
// };
// obj.fullName = ["Tim", "max"];
// console.log(obj.fullName);
// let descriptors = Object.getOwnPropertyDescriptor(obj, "fullName"); //there are other descriptors
//{
//     get: [Function: get fullName],
//     set: undefined,
//     enumerable: true,
//     configurable: true
//   }
// Object.defineProperty(obj, "fulllength", {
//   get() {
//     return this.name.length;
//   },
//   set(value) {
//     this.name = value;
//   },
//   enumerable: true,
//   configurable: true,
// });
// let des = Object.getOwnPropertyDescriptor(obj, "fulllength");
// console.log(des);

// console.log("anna".length);
// console.log(obj.fulllength, obj);
// console.log(descriptors);
// console.log(obj.fullName);
//smarter getters and setters
// let user = {
//   get name() {
//     return this._name;
//   },
//   set name(value) {
//     if (value.length < 4) {
//       console.log("name is too short");
//       // return;
//     }
//     this._name = value;
//   },
// };
// user.name = "value";
// console.log(user.name);
// let a = "a";
// console.log(a - null); //anull and Nan in minus
// console.log(1 + null); //1
//__proto__
// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       console.log("I walk");
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   },
// };
// let name = "X";
// let rabbit = {
//   name: "super speed",
//   __proto__: animal,
//   new: function () {
//     return this.name;
//   },
// };
// console.log(rabbit);
// console.log(rabbit.new);
// console.log("=========");
// rabbit.sleep();
// console.log(rabbit);
// console.log(rabbit.isSleeping);
// for (let vl in rabbit) {
//   console.log(vl);
// }
// console.log(Object.keys(rabbit));
// console.log(rabbit.hasOwnProperty("name"));
// Object.getPrototypeOf(rabbit);
// console.log(Object.getPrototypeOf(animal)); //if we ask prototype of animal so we see null object if we ask rabbit's prototype so it returns animal
//Exercise 1
// let animal = {
//   jumps: null,
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };

// console.log(rabbit.jumps); // true

// delete rabbit.jumps;

// console.log(rabbit.jumps); // null prototype

// delete animal.jumps;

// console.log(rabbit.jumps); // nothing
// //Exercise 2
// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed,
// };
// console.log(table.glasses);
// console.log(pockets.glasses); //almost equal
// //Exercise 3
// let animal1 = {
//   eat() {
//     this.full = true;
//   },
// };

// let rabbit1 = {
//   __proto__: animal1,
// };

// rabbit1.eat();
//twice
//because we ask rabbit1.eat() then full installes rabbit1 too and monitored equals
//Exercise 4
//because eat() calls  and install stomach in two objects
// let animal2 = {
//   eats: true,
// };

// function Rabbit1(name) {
//   this.name = name;
//   // return name;
// }
// // console.log(Rabbit1.name);
// Rabbit1.prototype = animal2;

// let rabbit2 = new Rabbit1("White Rabbit"); //  rabbit.__proto__ == animal

// console.log(rabbit2.eats); // true
//Exercsie 1
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };

// let rabbit = new Rabbit();
// // Rabbit.prototype = {};
// // console.log(rabbit.eats); //here true

// // Rabbit.prototype.eats = false;
// // console.log(rabbit.eats); //here  true
// delete rabbit.eats;
// console.log(rabbit.eats); //true
// delete Rabbit.prototype.eats;
// console.log(rabbit.eats); //undefined

//Exercise 2
// let obj2 = new obj.constructor();
// function user(name) {
//   this.name = name;
// }
// user.prototype = {};
// let user1 = new user("John");
// let user2 = new user1.constructor("pete");
// console.log(user1.name);
// console.log(user2.name);
// console.log(user.constructor);
// //Exercsie 1
// function f() {
//   console.log("Hello !");
// }
// Function.prototype.defer = function defer(t) {
//   setTimeout(f, t);
// };
// f.defer(1000);
// Exercise 2
// function f(a, b) {
//   console.log(a + b);
// }
// Function.prototype.defer = function (t) {
//   let f = this;
//   return function (...args) {
//     setTimeout(() => f.apply(this, args), t);
//   };
// };
// f.defer(1000)(1, 2);
// const person = {
//   name: "Max",
//   year: "ANna",
//   __proto__: { 1: "A" },
// };
// const hi = {
//   m: "m",
// };
// const me = Object.create(Object.prototype);
// console.log(me);
// console.log(Object.getPrototypeOf(person));
// console.log(Object.setPrototypeOf(person, hi));
// console.log(hi);
// let obj = { name: "anna", __proto__: "max" };
// console.log(obj.__proto__);
// //Exercise 1
// let dictionary = Object.create(null, {
//   tostring: {
//     value() {
//       return Object.keys(this).join();
//     },
//   },
// });
// console.log(dictionary);
// dictionary.apple = "apple";
// dictionary.__proto__ = "tets";
// console.log(dictionary);
// dictionary.tostring = function () {
//   for (let key in dictionary) {
//     console.log(key);
//   }
// };
// dictionary.tostring();

//Exercise 2
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");
rabbit.sayHi(); //work
Rabbit.prototype.sayHi(); //don't work because prototype has object prototype
Object.getPrototypeOf(rabbit).sayHi(); //undefined because prototype rabbit isn't array
rabbit.__proto__.sayHi(); //__proto__ isn't prototype here
//this == rabbit it doesn't equal  Rabbit.prototype
