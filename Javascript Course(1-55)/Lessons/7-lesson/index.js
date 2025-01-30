//Object 2
//dynamic and static access ways
//when we access with point object keys it searchs only this key and we don't change that if we enter obj.test machine search key as test
// let testObj = {
//   name: "heap",
//   step: "stack",
// };
// let testObj2 = {
//   name: "heap",
//   step: "stack",
// };

// let testObj3 = testObj;

// testObj = {};
// console.log(testObj.name); //here machine returns undefined because we attach other data to testObj.When we create object  it occupy memeory from heap and only it's link appears in stack. then we change  or delete datas it becomes unreachable so machine sends it to garbage collection and their link doesn't work too.we copy it  create other variable and attach it
// console.log(testObj3);
//this
//this equals itself object
//if we ask this in chrome console it returns window.Window is root object of JS.Here we ask this machine returns empty object which is  global
// console.log(this);
// let user = {
//   name: "webbrain",
//   sayHi() {
//     console.log(this); //this there reference all user specials.there has confuse.this equals to user why we use user?.Because user changes or deletes from memory but this refers it
//     console.log("hi", ` ${this.name}`); //we use or access to name through this.name
//   },
//   getName: () => {
// console.log("hi", ` ${this.name}`);
//   },
// };
// let usr = user;
// user = null; //here we give new data to user object
// usr.sayHi(); //here function executed true due to we use this if we use user insted of this user becomes null and machine returns error
//we don't use this in the arrow function
// usr.getName(); //here don't work with
// function showThis() {
//   let name = "academy";
//   console.log(this);
// }

// console.log(showThis());
//constructor funcion

// function getName() {
//   // console.log(this);
//   this.name = "webbrain";
//   console.log(new.target); //here target is done
//   this.sayHi = function () {
//     //if we don't write this sayhi doesn't work out
//     // console.log(this);
//     return "o";
//   };
// }
// new getName();
// console.log(new getName().name); //we use function's local variable through constructors
// console.log(new getName().sayHi);

//we check new target metod open with construstor or not functions

// console.log(new.target);
//symbols
//symbols are used for create unique values;
// let id1 = Symbol("id one");
// let id2 = Symbol("id two");
// let id3 = id1;
// console.log(id1 == id2); //false //beacuse values are unique and links are different
// console.log(id1 === id2); //false //even we check strictly are don't equal each other

// console.log(id3 == id1); //true //links are same
//we use as object keys its.
// let testObj = {
//   [id1]: "acaddemy",
//   id2,
//   ["id3"]: "hero",
//   // Symbol("id four"):"error"////we don't use this appearance
// };
// console.log(testObj); //there has several symbol pairs
// console.log(testObj.id2); //Symbol(id two)
//if we use [id1] for variables because we create ["id3"] keys it isn't unique it is simple key with string
//["id2"] equals to id2 are simple keys
//however we write only id2, we represnt id2 variable which is outer variable
//object literal is more complex and convinent for use
//check values with in
// console.log("id3" in testObj); //true so that id3 key has in testobj
//distructure
//distructure is eparated variables from object
// let testObj = {
//   name: "ECMA 6",
//   title: "EDGE",
//   age: "27",
//   child: {
//     testName: "a",
//   },
// };
// const {
//   name: NewName,
//   child: { testName: firstLet },
//   age,
// } = testObj; //we have several key:value pairs in givewn oject we separate important key:value pair as variable and value,so we use distruscture.Key becomes new variable name and the prices its value.we attach newname for separated variable as name:Newname in distructure.But only newname worked for new variable.sometime we don't notice name of outer and distructured variable name so we rename distructured variable.
// console.log(name, title, age);//error because name is not defined NewName is distructured variable name.if we distructure nested object as child we write {testName}  instead fo newname we create testName variable whis is in child obejt's pair testname:"a"
// console.log(NewName, testName, age);
// console.log(testName); // a
// console.log(firstLet); //a we distructured nested object's value
//spread operator (...)
// we use spread operator for spread variable or objects to parts
// console.log({ ..."letter" }); //{ '0': 'l', '1': 'e', '2': 't', '3': 't', '4': 'e', '5': 'r' }
//operator spreaded string to key:value pair in object
// console.log(...testObj);
let testObj = {
  name: "webbrain",
  surname: "academy",
  child: {
    test: "accept",
  },
};
let obj = { ...testObj["child"] }; //= {...testObj.child}
console.log(obj); //test:accept
//we renew object key's name we use spread operator,when we separate  key:value paiirs from object scope we use spread operator
let testObj2 = { ...testObj, name: "IT center" };
console.log(testObj2);
