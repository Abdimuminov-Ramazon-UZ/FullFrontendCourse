//6-lesson
//Objects
//object contains of key and value;
let testObj = {
  testName: "JavaScript",
  type: "dynamic",
  "super name": "Weird Js",
  1: 1996,
};

//other create way of objects with constructors
// let dateObj = new Object();
// let dateObj2 = {}; //now are empty
// console.log(typeof dateObj === typeof dateObj2);
// add key and values
// dateObj.name = "Python";
// console.log(dateObj);
//access way if asked key doesn't have machine return undefined
// console.log(testObj.name);
// console.log(testObj.surname); //we create but we doesn't assign value
//the same as array index is one way of access

// console.log(testObj["name"]); //sometimes we write keys with hypens as super-name and it helps for readability complex type keys
// console.log(testObj["super name"]); //only way  calls this type value
// console.log(testObj[1]); //we write in the string and write numeric equals way machine doesn't return error

//variable vs key
// let keyTest = "testName";
// console.log(testObj[keyTest]); //when we attach key name with variable we separate testObj's name keys and we access without string in brackets
// console.log(typeof keyTest); //sometimes we need to action on object keys so we attach its to variable easier  use on it
//We may change values through access ways
// testObj["super name"] = "EcmaScript 6";
// console.log(testObj["super name"]);
//If we add new value to key or enter same nammed key in the object machine accepts only lastest its,other same key and values where its come first are ignored.
//If we need to delete object's key we use delete keyword
// delete testObj["type"];
// console.log(testObj); //there hasn't type key and value
//we freeze objects through Object.freeze()
// Object.freeze(testObj);
// testObj["same language"] = "Kotlin";
// console.log(testObj); //new key doesn't add to testobj,so that we don't add,delete,change.
//we use to Object.seal when we want to change key and values but keys don't delete
// Object.seal(testObj);
// testObj["super name"] = "EC7";
// testObj["major"] = "Browser"; //there major doesn't add to testObj
// console.log(testObj);
// delete testObj["1"]; //there 1 key doesn't delete
// console.log(testObj);
//comparisons
const testAcc1 = {
  name: "hero",
  surname: "Arceyn",
};
const testAcc2 = {
  name: "hero",
  surname: "Arceyn",
};
const testAcc3 = testAcc1;
console.log(testAcc3 == testAcc1); //true because ac3 accept ac1's link in the memory and linkis are same,there we use both object names and key:values adds,changes and deletes.

console.log(testAcc3 === testAcc1); //true due to typeof objects are both objects
//when we create objects that create link in the memory similar to box
//However we need to copy current object as original so that is no link.So we use structuredClone()
testAcc4 = structuredClone(testAcc1);
console.log(testAcc4); //they are same
console.log(testAcc4 == testAcc1); //But doesn't equal structuredclone create new link object
//variable to key:value;
//if we have several primitive values and we need  to add as key value chain to object;
let testName = "name",
  testNumber = 2025;
//first variant key names are special
let testVarToObj = {
  name: testName,
  number: testNumber,
};
console.log(testVarToObj);
//second variant we use variable name as key name
let testVarToObj2 = {
  testName,
  testNumber,
};
console.log(testVarToObj2);
//check key name has or no in object
console.log("name" in testVarToObj); //key has test Obj
//Object.assign adds key:values other objects to  another
Object.assign(testVarToObj, testVarToObj2);
console.log(testVarToObj);
//we use key and values through loop.we use for in
for (let x in testVarToObj) {
  console.log(testVarToObj[x]);
}
// for (let x of testVarToObj) {
//   console.log(x);
// }
for (let x of testAcc1) {
}
