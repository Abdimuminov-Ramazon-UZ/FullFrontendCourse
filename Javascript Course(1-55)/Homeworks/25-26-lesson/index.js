//25 - lessons
//Classes
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }
// console.log(typeof User);
// class manual {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//   age = 18;
//   ["say" + "name"]() {
//     //computed names
//     console.log(this.name + this.surname + age); //we call buid in variables
//   }
// }
// let sayName = new manual("John", "Doe");
// sayName.sayname(); //here age isnot defined it doesn't prototype
// class getsSets {
//   constructor(name) {
//     this.name = name;
//   }
//   get name() {
//     return this._value;
//   }
//   set name(value) {
//     if (value.length > 5) {
//       console.log("alert");
//       return;
//     }
//     this._value = value;
//   }
// }
// let saySecname = new getsSets("amx1116666");
// console.log(saySecname.name);
//Exercise 1
//rewrite clock

// function Clock({ template }) {
//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   this.stop = function () {
//     clearInterval(timer);
//   };

//   this.start = function () {
//     render();
//     timer = setInterval(render, 1000);
//   };
// }

// let clock = new Clock({ template: "h:m:s" });
// // clock.start();
// class clockClass {
//   constructor(h, m, s) {
//     this.h = h;
//     this.m = m;
//     this.s = s;
//   }
//   timer;
//   render() {
//     let date = new Date();

//     this.h = date.getHours();
//     if (this.h < 10) this.h = "0" + this.h;

//     this.m = date.getMinutes();
//     if (this.m < 10) this.m = "0" + this.m;

//     this.s = date.getSeconds();
//     if (this.s < 10) this.s = "0" + this.s;
//     let output = `${this.h}:${this.m}:${this.s}`;
//     console.log(output);
//   }
//   stop() {
//     clearInterval(timer);
//   }

//   start = () => {
//     this.render();
//     this.timer = setInterval(this.render, 1000);
//   };
// }
// let clockM = new clockClass();
// clockM.start();
//extends keyword
// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//     this.run();
//   }
//   age = 7;

//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name}+ age ${this.age} runs with speed ${this.speed}`);
//   }
//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} stands still`);
//   }
// }
// new Animal().run(); //we call as class metods with bracket
// console.log(Animal);
// let newAnimal = new Animal("Rabbit");
// // console.log(newAnimal);
// class Rabbit extends Animal {
//   name = "rabbit";
//   age = 8;
//   hide() {
//     console.log(`${this.name} hides`);
//   }
//   stop() {
//     super.stop();
//     //we use super for call parent's metod
//     this.hide();
//   }
// }
// let rabbit = new Rabbit("rabbit");
// console.log(rabbit.run());
// rabbit.run(5);
// rabbit.hide();
// rabbit.stop();
//class is inheritanced extended metods and construtor,static  variables
// function f(phrase) {
//   return class {
//     sayHi() {
//       console.log(phrase);
//     }
//   };
// }
// class User extends f("Hello") {}
// new User().sayHi();
// class Animal {
//   showName() {
//     console.log("animal");
//   }
//   name = "animal";

//   constructor() {
//     this.showName();
//     console.log(this.name);
//   }
// }

// class Rabbit extends Animal {
//   name = "rabbit";
//   showName() {
//     console.log("rabbit");
//   }
// }

// new Animal(); // animal
// new Rabbit(); // animal
// we create constructor metod for solve
// let animal = {
//   name: "Animal",
//   eat() {
//     console.log(`${this.name}  eats.`);
//   },
// };
// let rabbt = {
//   __proto__: animal,
//   name: "Rabbit",
//   eat() {
//     // this.__proto__.eat.call(this);
//     //here we install rabbt's proto data's for current this
//     super.eat();
//   },
// };
// let longEar = {
//   __proto__: rabbt,
//   eat() {
//     // this.__proto__.eat.call(this);
//     //we arrive here so rabbit's proto longEar but we call longEar proto. longEar proto is rabbit which we give with proto in firsta raw
//     super.eat();
//     //we use super here for stop infinity loop
//   },
// };
// rabbt.eat();
// longEar.eat();
//here becomes infinity this loop
// console.log(rabbt);
//Exercise 1
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     //we add super(name) for call parent's constructor variables
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
// alert(rabbit.name);
//Exercise 2
// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }
//statc metods
// class Rabbit {
//   constructor(name1) {
//     this.name1 = name1;
//   }
//   static run(prop) {
//     // let name1 = function () {
//     //   return new Rabbit("white");
//     // };

//     console.log("my rabbit's speed" + prop);
//   }
//   jump(height) {
//     this.height = height;
//     Rabbit.run(height + 5);
//     console.log(height);
//   }
//   static car = "old Rabbit logic car";
// }
// let nRabbit = new Rabbit("White");
// nRabbit.height = 5;
// nRabbit.jump(8);

// console.log(Rabbit.car);
// console.log(nRabbit);
// class Bunny extends Rabbit {
//   static run(prop) {
//     console.log(prop);
//   } //here worked this metod not Rabbit's static metod
//   see() {
//     console.log("Max distance 10 kms");
//   }
// }
// Bunny.run(2);
//Exercise 1
// class Rabbit extends Object {
//   name1 = "name1"; //we create object's property  here
//   constructor(name) {
//     super(name); //we call super for call Object's constructor variables because Obejct has constructor variables
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit("Rab");
// console.log(rabbit);
// console.log(rabbit.hasOwnProperty(name)); // Error
// class Car {
//   constructor(_age, age2) {
//     this._age = _age;
//     this.age2 = age2;
//   }
//   get value() {
//     return this._age * 2;
//   }
//   set value(age) {
//     this._age = age;
//     age = 2 * age;
//     return age * age;
//   }
// }
// console.log(Car.value);
// let nCar = new Car("12");
// class motorWay extends Car {
//   constructor() {
//     super();
//   }
// }
// let oldWay = new motorWay("54");
// console.log(nCar._age);
// console.log(nCar.value);
// console.log(motorWay.get);
// console.log(motorWay.age2);
// console.log(oldWay.get);
// class Coffe {
//   _waterAmount = 0;
//   set water(v) {
//     this._waterAmount = v;

//     if (v < 15) {
//       v = 40;
//     }
//   }
//   get water() {
//     return this._waterAmount;
//   }
//   constructor(power) {
//     this._power = power;
//   }
// }
// let newC = new Coffe(200);
// console.log(newC._power);
// newC.water = 4;
// console.log(newC.water);
// class Animal {
// constructor() {
//   this.field = "FIELS";
//   this.statics;
// }
// width = 5;
// static round = 48;
// static roundC(r) {
//   return r * this.round;
// }
//   constructor(_prot) {
//     this._prot = _prot = 85;
//   }
//   _water = "water boiling";
//   #regionended = "my region";
//   getS() {
//     return this.#regionended;
//   }
// }
// console.log(Animal);
// console.log(new Animal()._prot);
// console.log(new Animal().region);
// // console.log(Animal.getS());
// console.log(new Animal().getS());
// console.log(new Animal().field);
// console.log(new Animal().statics);
// console.log(new Animal().width);
// console.log(Animal.round);
// console.log(Animal.roundC(2));
// let newA = new Animal(45);
// console.log(newA);
// console.log(newA._prot);
// console.log(newA._water);
// console.log(newA.statics);
// console.log(newA.width);
//work with metods
// class Animal {
//   constructor(speed, limit) {
//     this.speed = speed;
//     this.limit = limit;
//   }
//   static sVar = "variable";
//   get getS() {
//     return this.speed;
//   }
//   getSpeed(speed) {
//     speed = this.speed;
//     if (speed < 30) {
//       // console.log("return low");
//       return "low";
//     } else if (speed > 30 || speed < 70) {
//       // console.log("speed midlee");
//       return "middle";
//     } else {
//       // console.log("speed high");
//       return "high";
//     }
//   }
//   getLimit(limit) {
//     limit = this.limit;
//     let speed = this.getSpeed();
//     console.log(speed, limit);
//     if (limit == 100 && speed == "high") {
//       return "faster";
//     } else if (limit == 100 && speed == "middle") {
//       return `fast + ${Animal.sVar}+${Animal.SetMet(4)}`;
//     }
//   }
//   static SetMet(prop) {
//     if (prop == 5) {
//       return `best + ${new Animal(80, 100).getSpeed()}`;
//     } else if (prop == 4) {
//       return "good";
//     }
//   }
// }

// let CarSpeed = new Animal(65, 100);
// console.log(CarSpeed.getSpeed());
// console.log(CarSpeed.getLimit());
// // console.log(true && false);
// console.log(CarSpeed);
// console.log(Animal.SetMet(4));
// // console.log(CarSpeed.SetMet(5));
// console.log(Animal.SetMet(5));
//work with extend keyword
// class MyClass {
//   constructor(speed, limit) {
//     this.speed = speed;
//     this.limit = limit;
//   }
//   varField = "variable field";
//   static var = "variable static";
//   static metodS(prop) {
//     if (prop == "static") {
//       console.log("static metod", this.var);
//     }
//   }
//   getInstance(param) {
//     param = this.limit;
//     if (param == 100) {
//       return "return getInstance Metod";
//     }
//   }
// }
// class secondClass extends MyClass {
//   constructor(border, check, speed, limit) {
//     //we may change it here
//     super(speed, limit);
//     this.border = border;
//     this.check = check;
//   }
//   varF = "variable instance of second class";
//   static varS = "static variable of second class";
//   getSecClass(property) {
//     if (property == "second") {
//       return property + this.check;
//     }
//   }
//   static getStaSecClass(parametr) {
//     if (parametr == "parametr") {
//       return new secondClass().varField; //we use as it
//     }
//   }
// }
// //call parent static variable
// console.log(secondClass.var); //we may call static variables of parent
// //call parent static metod
// console.log(secondClass.metodS("static")); //we may call static metod of parent
// //call instance metod of parent
// console.log(new secondClass().getInstance(100)); //we may call it
// //call parent's instance variable
// console.log(new secondClass().varField);
// //call parent's constructor variables
// console.log(new secondClass("alert", "red", 80, 48));
// //use parent's variable in second class
// console.log(secondClass.getStaSecClass("parametr"));
// //use parent's metod in  second class
// console.log(new secondClass("border", "check").getSecClass("second"));
//work with Extended built in objects
// class Animal extends Object {
//   constructor(speed, limit) {
//     this.speed = speed;
//     this.limit = limit;
//   }
//   static vr = "variable";
// }
// console.log(Animal.is(Object)); //false
// console.log(Animal.prototype);
//work with getter setter
// class Animal {
//   constructor(speed, limit) {
//     this.limit = limit;
//     this.speed = speed;
//   }
//   get getConsMet() {
//     return this.speed;
//   }
//   set setConsMet(speed) {
//     this.speed = speed + 85;
//   }
// }
// let nAnim = new Animal(50, 100);
// nAnim.getConsMet = 50;
// // console.log(Animal);
// // console.log(nAnim.speed);
// class Rabbit extends Animal {
//   constructor(full, half, speed, limit) {
//     super(speed, limit);
//     this.full = full;
//     this.half = half;
//   }
//   get getProp() {
//     return super.getConsMet;
//   }
//   set setProp(prop) {
//     this.full = `prop:${prop}+super:${super.getConsMet}+instance property:${
//       this.full
//     }`;
//   }
// }
// let newRab = new Rabbit(100, 200, 500, 400);
// newRab.setProp = "second set property";
// newRab.setConsMet = 600;
// // console.log(newRab.getProp);
// console.log(newRab.full); //here change full property
// console.log(Rabbit.getProp);
// console.log(Rabbit);
// console.log(nAnim.getConsMet);
// console.log(nAnim.getConsMet);
// let obj = {
//   speed: "limit",
//   run: "race",
//   get fullName() {
//     return this.speed + this.run;
//   },
//   set fullName(underProp) {
//     const Props = underProp + this.speed;
//     this.run = Props;
//   },
// };
// console.log(obj.fullName);
// obj.fullName = "Max";
// console.log(obj.fullName);
// console.log(obj.speed, obj.run); //here change run so we may change obj properties with set metods
//instanceof metod
// class Animals {
//   constructor(speed, limit) {
//     this.limit = limit;
//     this.speed = speed;
//   }
//   static [Symbol.hasInstance](obj) {
//     if (obj.canEat) return "this isn't inheritance";
//   }
// }
// let object1 = { canEat: true };
// console.log(object1);
// console.log(object1.__proto__ === Class.prototype);
// console.log(object1);
// console.log(object1);
// console.log(object1);
// console.log(object1);
// console.log(object1);

// console.log(object1 instanceof Animals);
// let Rabbit = new Animals(35, 70);
// console.log(Rabbit instanceof Animals);
// console.log(Rabbit);
// class Wolf extends Animals {
//   constructor(name) {
//     this.name = name;
//   }
// }
// console.log(Wolf instanceof Animals);
// console.log(Wolf.prototype);
// console.log(Rabbit.prototype);
// console.log(Object instanceof Animals);
// //instanceof checks prototype which is create itself
// console.log([Symbol.hasInstance]);
//toString metod
// let obj = { name: "MAx", [Symbol.toStringTag]: "user" };
// console.log(obj);
// console.log(obj.toString());
// console.log(obj);
// let objectToString = Object.prototype.toString;
// let arr = [];
// console.log(objectToString.call(arr)); //object Array
// //Symbol.toStringTag()
// console.log({}.toString.call(obj));
//surely here need to appear [object Object] but we change second name Object so we change even Tag name
//so typeof is for primitives constructor  instanceof is for classes which is constructor toString for objects
//Exercise 1
// function A() {}
// function B() {}

// A.prototype = B.prototype = {};

// let a = new A();

// console.log(a instanceof B); // true //because a is constructed by B
//Mixins
//we inherit obj to only obj in JavaScript but we add metods other ways
// mixin
let sayMixin = {
  say(phrase) {
    console.log(phrase);
  },
};
let sayHiMixin = {
  __proto__: sayMixin,
  sayHi() {
    super.say(`hello ${this.name}`); //here call protos get metod and we change this's direction to class constructor variable
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  },
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);
//here User.prototype and sayHiMixin is attached other than

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!
console.log();
//we use even __proto__
