//24-lesson
//classes basic
//when functions hasn't in Js construction we used classes
//class is OOP classes are templates of codes
//OOP - object orientation program it has four columns.Abstraction,encapsulation,inheritance and poltmorphysim
//functions are alternatives for clasees
// class Animal {
//   //   speedA = 12;//it equals this.speedA=speedA
//   age = 0; //when we declare variables we don't use let const words certainly that is being var automatic
//   constructor(title) {
//     this.title = title; //here we connect title and global state so title is global
//     console.log(title); //here title appearance only here it doesn't work out constructor
//   } //we use contructor for hold parametres of class and it runs first
//   welcomeMsg(name) {
//     console.log(name + "  " + this.title); //title is not defined
//   }
//   speed(speedA) {
//     console.log(speedA + " per hour", ++this.age); //we crete function and we use it down code
//   }
// }
//we create template animals
// let rb = new Animal("wild");
// let wf = new Animal("dangerous");
// rb.welcomeMsg("tom");
// console.log(rb, wf);
// rb.speed(12);
// rb.speed(12);
// rb.speed(12); //age changes every call 1,2,3
//but we call wf age not changes
//we use getter setter as object as in classes
// class Cars {
//   get company() {
//     return this.value + " type";
//   }
//   set company(value) {
//     this.value = value;
//   }
// }
// let c1 = new Cars();

// c1.company = "BMW";
// console.log(c1.company);
//computed names
// class user {
//   ["web" + "app"](value) {
//     //there function name is web app
//     console.log(value);
//   }
// }
// let usr1 = new user();
// usr1.webapp("max"); //max
//class inheritance
// class Animal {
//   constructor(value) {
//     this.value = value;
//   }
//   parents() {
//     console.log("new parent method");
//   }
//   speed(val) {
//     console.log(value + " per hour");
//   }
// }
// class rabbit extends Animal {
//   child() {
//     console.log("child");
//   }
//   info(value) {
//     this.child();
//     super.parents(); //we call parents metod
//     console.log("animal is " + value);
//   }
// }
// class wolf extends Animal {
//   //we extend classes with animal class
//   info(value) {
//     console.log("animal is " + value);
//   }
// }
// let rb = new rabbit();
// let wf = new wolf();
// rb.info("rabbit");
// rb.speed(12);
// wf.info("wolfs");
// wf.speed(21);
// console.log(rb); //but speed aren't appearance because it is inheritance
// behind scenes are __proto__
//super calles parent classes metod
// rb.info("hero");
// class Animal {
//   constructor(name) {
//     //we can enter with constructor function in class internal metods
//     this.name = name;
//   }

//   speed(speed) {
//     console.log(`${this.name}  ${speed}km per hour`);
//   }
// }
// class Rabbit extends Animal {
//   constructor(name) {
//     super(name); //we chain internal parametr and outer class parametr
//   }

//   info(name) {
//     console.log("quyonni 2 ta qulog'i bor");
//   }
// }
// let rb = new Rabbit("quyon");
// rb.speed(12);
//constructors default parametr is ...args when we enter simple constructor function it returns super
//25-lesson
//static
//when we use extended classes two and more we face some no change values so we create some static values it is related every calls.while we are calling metod which it is avialable in main class though we use first extented class name or second name an dothers static value change and value is the same all classes
// class age {
//   static ageD = 0;
//   founded(value) {
//     let age1 = 0;
//     let date = new Date().getFullYear();
//     let current = date - value;
//     age1 = ++current;
//     console.log(current, ++age.ageD, age1);
//   }
//   static result(value) {
//     console.log(value / 100);
//   }
// }
// class male extends age {
//   number(value) {
//     console.log(value, ++age.ageD);
//   }
// }
// class female extends age {
//   number(value) {
//     console.log(value, ++age.ageD);
//   }
// }
// console.log(new Date().getFullYear());
// let male1 = new male();
// let female1 = new female();
// male1.number(21);
// male1.founded(5);
// female1.number(9);
// female1.founded(8);
//ageD changes 1 2 3 4
///we may write static metods
//but we call static metods only created class name
// age.result(85);
//private and protected keys
//when we use class variables we must need some private keys that is important especially junior programmers
//we create underscore names so they are public variables
//if we write variable names with hash it is protected value
// class max {
//   _name = "math max number";
//   #protected = "don't touch it ";
//   getName(value) {
//     console.log(value, this.#protected);
//   }
//   get getProtected() {
//     console.log(this.#protected);
//   }
//   set getProtected(vl) {
//     this.#protected = vl;
//   }
// }
// // max.getName();
// let pr = new max();
// console.log(pr); //we don't use protected variables with outer classes we change value of protected variables with getters and setters
// pr.getName(85);
// pr.getProtected;
// pr.getProtected = "I want touch it";
// pr.getProtected; //here protected changes
//built in classes  mean when we extends classes with Array and objects then we use their metods as built in methods
class min extends Array {
  getconstructor(vl) {
    console.log(typeof vl);
  }
}
let ar = new min();
ar.concat(); //we use array metods as array
//instanceof
//when we use several extends classes and we confuse extends so we check its through instanceof , we check datas with it we note object array function class ae objects so it returns every check true
console.log(ar instanceof Array); //true
console.log(ar instanceof Object); //true
let a = "max";
console.log(a instanceof String);
//mixins when we use Object.assign() so we use it as extends we use it with objects js is weird and mains with objects
class max {
  getres(vl) {
    console.log(100 - vl);
  }
}
let obj = {
  max1() {
    console.log(5);
  },
};
Object.assign(max.prototype, obj);
let maxn = new max();
maxn.getres(45);
