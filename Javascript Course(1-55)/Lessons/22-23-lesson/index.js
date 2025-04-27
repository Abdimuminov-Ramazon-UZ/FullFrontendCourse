//22-23-lesson
//Advanced Objects, getter and setter
//descriptors are flags. we use object datas for numerable ,configurable,loop and writable so we may turn off its
// let obj = {
//   name: "webbrain",
//   title: "academy",
//   go() {
//     return 1;
//   },
// };
//we use    getownpropertydescriptor metod for see  descriptors

// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// //now we use defineproperty for change descriptors
// Object.defineProperty(obj, "name", { writable: false });
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// obj.name = "wba";
// console.log(obj.name); //no change
//now we want which data not delete from object
// Object.defineProperty(obj, "name", { configurable: false });
//when we use confgurable then even we don't use descriptors because we close configuration way
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// delete obj.name;
// console.log(obj);
//we torn off loops as object datas
// Object.defineProperty(obj, "name", { enumerable: false });
// for (let vl in obj) {
//   console.log(vl);
// }
//Built-in object library has static methods with descriptors.First method is Object.freeze().when we use it then we don't change descriptors as object
// Object.freeze(obj);
// console.log(Object.getOwnPropertyDescriptors(obj, "name"));
// : {
//   value: 'academy',
//   writable: false,
//   enumerable: true,
//   configurable: false
// }
//we see here configurable false so we don't change descriptors
//other metod is Object.seal().when we use it then we don't change something though we only loop values Object.freeze().as object.seal() we may change
// Object.seal(obj);
// console.log(Object.getOwnPropertyDescriptors(obj, "name"));
// {
//   value: 'academy',
//   writable: true,
//   enumerable: true,
//   configurable: false
// }
// obj.name = "IT";
// console.log(obj); //here name changes IT
//object.preventExtensions() keeps changes so we don't add prototype metods , properties  and anytihing changes
// Object.preventExtensions(obj);
// Object.defineProperty(obj, "name", { writable: false });
// console.log(Object.getOwnPropertyDescriptors(obj, "name"));
// obj.game = "cs1.6";
// console.log(obj); //here
//we may check this methods used or not thruogh other metods
//object.ispreventextensions() ,object.isFrozen(),Object.isSealed()
// console.log(Object.isExtensible(obj)); //so we don't change it
// console.log(Object.isSealed(obj)); //false we don't seal it
// console.log(Object.isFrozen(obj)); //false we don't freeze it

//getter and setters
//when we create functions in object datas we meet some confusion changes
// let obj = {
//   name: "webbrain",
//   title: "academy",
//   get go() {
//     return this.name + this.title;
//   },
//   set go(value) {
//     this.name = value.first;
//     this.title = value.second;
//     return value;
//   },
// };
// console.log(obj.go); //[Function: go]
//if we change it primitive value
// obj.go = "name";
// console.log(obj); //now go isnot function it is primitive value how we don't lose function. we use getter and setters
//getter installs functions without function parametres
//how we use functions with parameres with objects
//we use set for install parametres
// console.log(obj.go); //however we meet with error because we don't assign parametres as function its.we assign parametres as assign variables and don't use scopes
// obj.go = { first: "Max", second: "Min" };
// console.log(obj.go); //max,min
//though we set setter even we don't change function codes it is executed with getter however we change obj this values
//23-lesson
//Prototype,__proto__
//Inheritance  - we use built-in constructions every variable and code structures
// let user1 = { type: "Anna" };
// let user2 = { name: "Max" };
// Object.assign(user1, user2);
// console.log(user1, user2); //we add user1 and user2 however we don't delete user2 datas
//we use proto
// user1.__proto__ = user2;
// console.log(user1); //console doesn't appearance user2 datas but we call with dot all actions execute in the background
// console.log(user1.name); //there are user2 datas
// alert(user1)
//we see google console __proto__ equals Prototype but we don't use it as __proto__ it is old and useful method
//we use prototype when we add unique,new and useful metods for us
let user = { name: "Ava", last: "Max" };
Object.prototype.fullname = function () {
  return this.name + " " + this.last;
};
let test = user.fullname();
console.log(test); //Ava max
//Every built-in library has protype way so we write new built in metods for its.for example array,number string and etc
