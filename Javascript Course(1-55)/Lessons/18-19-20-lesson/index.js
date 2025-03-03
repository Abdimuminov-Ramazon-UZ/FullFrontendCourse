//18-lesson
//setTimeOut(),setInterval()
//we use not built in libraries in JavaScript as Settitmeouts
//they aren't built in libraries but support every browser
//SetTimeOut(callback,time,...args) when we enter some websites it suggest us registraion certainly it acts known time we enter delay time as second parametr

// console.log(1); //first out
// setTimeout(
//   () => {
//     console.log("after one sec"); //fifth out
//   },
//   1000,
//   "hey flower"
// );
// setTimeout(() => {
//   console.log("after 0.5 sec"); //fouth  out
// }, 500);
// console.log(3); //second out
//setimeout isn't sinchron it is asinchron  when we write codes and run its then they are ordered first call stack.so interpretor place inside first high presidence here setttimeut not sinchron and it places last position.codes goes queu and acts with order.If we create several settimout with different delay times then machine orders according to increase delay times.If we  give 0 to delay time then between settimouts that acts first but after another codes or depending on presidence
// setTimeout(
//   (a, b) => {
//     console.log("after 0 sec" + a + b);
//   },
//   0,
//   "hey",
//   "flower"
// ); //third out
// setInterval();
//setInterval() runs every given time
// setInterval(
//   (a, b) => {
//     console.log(a, b);
//   },
//   1,
//   "hey ",
//   "girl"
// );
// setInterval(() => {
//   let date = new Date();
//   console.log(`today: ${date.getDate()}`);
// }, 2);//it isn't stopped we stop with command in console
//we use clearInterval() and cleartimout() for stopped and directed its garbage collection because they don't direct to garbage collection itself
// let id = setTimeout(() => {
//   console.log("after");
// }, 1000);
// clearTimeout(id); //id doesn't run
// let id2 = setInterval(() => {
//   console.log("Interval");
// }, 1000);
// clearInterval(id2); //id2 doesn't run
//19-lesson
//Advanced functions
//If fucntion return nonprimitibe data then this loses
//call()
// let data = [
//   { name: "anna", old: "21" },
//   { name: "alex", old: 22 },
//   { name: "tim", old: 22 },
//   { name: "max", old: 22 },
//   { name: "tom", old: 22 },
// ];
// let obj = {
//   name: "Mix",
//   old: "25",
//   getName() {
//     console.log(`getname ${this.name}`);
//   },
// };
// let obj2 = {
//   name: "digital",
//   old: "25",
//   getName() {
//     console.log(`getname ${this.name}`);
//   },
// };
// obj.getName();
// obj.getName.call(obj2); //here we use call metod due to run obj2
//when we give obj2 to getname then obj2 is "this" for getname and now getname is dynamic
// function test(data) {}
// obj.getName.call(data[0]);
// //we write named  function
// function testget(a, b) {
//   console.log(`getname ${this.name}` + a + b);
// }
// testget.call(obj); //here may be first parametr is {name:"anna"}
// for (let i of data) {
//   testget.call(i, "120", "37"); //out names here second and others are  function paramters
// }
//here we need to use dynamic functions but objects aren't root its so we give this=obj then obj ir root for given function
//apply()
// for (let i of data) {
//   testget.apply(i, ["130", "38"]); //we give function parametres as array to apply
// }
//bind()
//we use bind when we must create new function
// let id = testget.bind(obj, "anna", "tom");
// id(); //we run id function and bind works right
//however we use it invokable fiunction'
// testget.bind(obj, "1", 2)(); //here bind works right
//20-lesson
//Caching
//we learn here evade DDOS attack
function getData() {
  // setInterval(() => {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json
  );
  // }, 1);
}
//caching is stopped thea same requests by frontend
function getCache(func) {
  let cache = new Map(); //create new map()
  return function (x) {
    //call for getdata()
    if (cache.has(x)) {
      console.log(cache.get(x)); //this return promise
      //check cached datas
      return cache.get(x); //if data has then return it
    }
    let res = func.call(this); //If hasn't data we get it and we use call(this) for use objects here we call current object
    return cache.set(x, res); //place in cached Map
  };
}
getData = getCache(getData); //if we ask getdata first time it place in cache we ask second time it then it returns datas from cached datas
let usr = {
  name: "webbrain",
  getData() {
    return fetch(`https://jsonplaceholder.typicode.com/${this.name}`).then(
      (res) => res.json
    );
  },
};
usr.getData = getCache(usr.getData);
//when we use cached function simple requests we use it right
