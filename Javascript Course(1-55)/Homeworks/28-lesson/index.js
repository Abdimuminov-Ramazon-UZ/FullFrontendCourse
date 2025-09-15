//28-lesson
//Error handling
// function loadScript(src) {
//   // creates a <script> tag and append it to the page
//   // this causes the script with given src to start loading and run when complete
//   let script = document.createElement("script");
//   script.src = src;
//   document.head.append(script);
// }
// loadScript("script.js");
// let prms = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("done"), 1000);
// });
// let prms2 = new Promise((resolve, reject) => {
//   let err = new SyntaxError();
//   setTimeout(() => {
//     reject(new Error("whoops"));
//   }, 1000);
// });
// let prms3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("value"), 2000);
// })
//   .finally(() => console.log("Promise ready")) // triggers first
//   .then((result) => console.log(result)); // <-- .then shows "value"
// // console.log(resolve("done"))
// function (param1,callback2){
//     return param1+callback2(2)
// }
// function testFunction(callback) {
//   console.log("Start");
//   callback();
//   console.log("End"); // Bu har doim ishlaydi
// }

// testFunction(function () {
//   console.log("Callback");
//   return anna; // Faqat callback ni to'xtatadi
// });
// let newProm = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("we give 2 s to settimeout");
//   }, 2000);
//   resolve("done");
// })
//   .finally(() => console.log(` go out first then run settitmeout`))
//   .then((value) => console.log(value));
//Exercise 1
// let promise = new Promise(function (resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });

// promise.then((value) => {
//   console.log(value);
// }); //here machine returns 1 and code stopped
// //Exercise 2
// function delay(ms) {
//   let prms = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), ms);
//   });
//   return prms;
// }

// delay(3000).then(() => console.log("runs after 3 seconds"));
//Exercise 3
// let header = document.querySelector("#header");
// function showCircle(a, b, c) {
//   let prms = new Promise((resolve, rej) => {
//     let div = document.createElement("div");
//     div.style = `margin-left:${a}px;
//     margin-top:${b}px;
//     border-radius:50%;
//     width:${c}px;
//     height:${c}px;
//     background:red`;
//     document.body.append(div); //error time
//     resolve(div);
//   });
//   return prms;
// }
// // console.log(showCircle(100, 140, 150));
// showCircle(150, 150, 100).then((div) => {
//   div.classList.add("message-ball");
//   div.append("Hello, world!");
// });
// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     console.log(resolve); // function() { native code }
//     // resolve with this.num*2 after the 1 second
//     setTimeout(() => resolve(this.num * 2), 1000); // (**)
//   }
// }

// new Promise((resolve) => resolve(1))
//   .then((result) => {
//     return new Thenable(result); // (*)
//   })
//   .then((value) => console.log(value)); // shows 2 after 1000ms
//we use then several time for promise chaining as fetch and other promises
// let prms = new Promise((res, rej) => {
//   res(1);
// }).then((value) => value * 2); //here returns promise
// .then((value) => console.log(value * 5)); //here returns 10 but if we separate then metods they work independendtly
// prms.then((v) => {
//   return console.log(v * 8); //we get here new value
// });
// console.log(prms.then((v) => v * 10)); //here state pending so we use other promise
// prms.then((v) => console.log(v * 7)); //14 so we get value 14 because first then returns only two and we create two thens they returns independednt values
//Exercise 1
// let prms = new Promise((resolve, reject) => {
//   resolve(9);
// });
// prms
//   .then((v) => {
//     alert(v * 7);
//   })
//   .catch((v) => {
//     console.log(v);
//   });
// prms.then((v) => {
//   return console.log(v * 8);
// });
//Fragments don't equal because when prmose state is rejected after catch worked so only then works or catch works second code then works step by step
// /error handling
// new Promise((res, rej) => {
//   throw new Error("Whoops i create error"); //we create error then throw it outside and catch  metod prints it
// }).catch((err) => alert(err)); //we catch here error and use it
//Exercise 1
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     throw new Error("Whoops!");
//   }, 1000);
// }).catch((err) => alert(err)); // doesn't work because rej returns only this data and catch is later here
//promise metods
// let prms = new Promise();
// console.log(new Promise((res, rej) => {}));
// class Make {}
// let nMake = new Make();
// console.log(nMake);
// //Promise metods
// let arr =
// Promise.all([
//   new Promise((res, rej) => {
//     let a = 48;
//     res(a + 2);
//   }),
//   new Promise((res, rej) => {
//     let a = 48;
//     res(a + 3);
//   }),
//   new Promise((res, rej) => {
//     let a = 48;
//     res(a + 4);
//   }),
//   new Promise((res, rej) => {
//     let a = 48;
//     res(a + 5);
//   }),
// ]).then((v) => console.log(v)); //we get answers as array
// console.log(arr);
// Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 8000);
//   }), //here promise.all wait first element answer so weird rral promise codes doesn't asychronus for settitmeout but promise all asynchrounsly
//   new Promise((res, rej) => {
//     rej("throw error");
//   }), //if we write error here other promises ignored and we don't get answer
//   3,
// ]).then((v) => console.log(v)); // 1, 2, 3
//Promise.allSettled
//to reverse for promise.all works promise all but it doesn't returns ansswers it returns states
// Promise.allSettled([
//   new Promise((res, rej) => {
//     let a = 48;
//     res(a + 2);
//   }),
//   new Promise((res, rej) => {
//     rej(6);
//   }),
//   new Promise((res, rej) => {
//     rej(5);
//   }),
//   new Promise((res, rej) => {
//     let a = 48;
//     res(a + 5);
//   }),
// ]).then((v) => console.log(v));
//Promise.race which returns first answer that wins race so which promise returns promise only it accept as value others are ignored
// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 2000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ])
//   .catch((err) => {
//     console.log(err);
//   })
//   .then((v) => console.log(v));
//Promise.any when we have result or resolve element so we use any() metod because we catch common error
// Promise.any([
//   //   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 2000)
//   ),
//   //   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).catch((err) => {
//   console.log(err);
// });
// function name(...args) {
//   let { rest } = { ...args };
//   return console.log(rest);
// }
// let prms = Promise.resolve("no error"); //create promise's resolve result
// console.log(prms);
//async await
//it means we write async which we use function and we use important functions that are getting more time for executing awaitn stops codes and when it gets result then run codes async function returns promise ibject so we get using promise metods
// async function f(result) {
//   let prms = await new Promise((res, rej) => {
//     setTimeout(res("done"), 2000);
//     // res("done");
//   });
//   let anna = await "await";
//   return result + prms + anna;
// }
// // f("max");
// console.log(f("anna"));
//Exercise 1
// async function loadJson(url) {
//   let res = await fetch(url);
//   return res.status === 200
//     ? console.log(res.json())
//     : console.log(new Error(res.status));
// }

// loadJson("https://javascript.info/no-such-user.json").catch(alert); // Error: 404
//Exercise 2
// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = "HttpError";
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   let res = await fetch(url);
//   return res.status == 200 ? res.json() : new HttpError(res);
// }

// // Ask for a user name until github returns a valid user
// async function demoGithubUser() {
//   let name = prompt("Enter a name?", "iliakan");

//   let res = await loadJson(`https://api.github.com/users/${name}`);
//   try {
//     function user(user) {
//       alert(`Full name: ${user.name}.`);
//       return user;
//     }
//     user(res);
//   } catch {
//     function error(err) {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("No such user, please reenter.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     }
//     error(err);
//   }
//   return res;
// }

// demoGithubUser();
//Exercise 3

// async function wait() {
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return 10;
// }
// // console.log(wait().then((v) => v));
// function f() {
//  let res= async () => {
//     return wait();
//   };
// ...what should you write here?
// we need to call async wait() and wait to get 10
// remember, we can't use "await"
//   let res = wait().then((v) => alert(v));
//   return res;
// }
// console.log(f());
//Exercise 4
// let database;

// function connect() {
//   database = {
//     async query(isOk) {
//       if (!isOk) throw new Error("Query failed");
//     },
//   };
// }

// function disconnect() {
//   database = null;
// }
// // Helper function to call async function `fn` after `ms` milliseconds
// function delay(fn, ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => fn().then(resolve, reject), ms);
//   });
// }

// async function run() {
//   connect();

//   try {
//     await Promise.allSettled([
//       // these 3 parallel jobs take different time: 100, 200 and 300 ms
//       // we use the `delay` helper to achieve this effect
//       delay(() => database.query(true), 100),
//       delay(() => database.query(false), 200),
//       delay(() => database.query(false), 300),
//     ]);
//   } catch (error) {
//     console.log("Error handled (or was it?)");
//   }

//   disconnect();
// }

// console.log(run());
async function test() {
  console.log("1");
  await new Promise((resolve) => setTimeout(resolve, 1000)); //
  console.log("2");
}

console.log("Start");
test();
console.log("End");
// PARALLEL
async function parallel() {
  const promise1 = fetch("https://api.example.com/1");
  const promise2 = fetch("https://api.example.com/2");

  const [result1, result2] = await Promise.all([promise1, promise2]);
  console.log("Parallel ended");
}
parallel();
// SEQUENTIAL
async function sequential() {
  const result1 = await fetch("https://api.example.com/1");
  const result2 = await fetch("https://api.example.com/2");
  console.log("Sequential ended");
}
