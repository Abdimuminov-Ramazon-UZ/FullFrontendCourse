// 26-lesson
//Error handling
//we use try catch methods for  eliminate to stop projects
//we write codes in the try when return errors from try catch replies or sends codes or messages to machine then project continues
// try {
//   console.log(number);
//   //we have throw so we return here current error
//   throw new Error("smt went wrong");
// } catch (
//   error
//   //we have error methods name,message
// ) {
//   console.log(error.message);
// }
// //we create error by handle with Error library
// let newE = new Error();
// console.log(newE.message);
//Callbacks
//Asynchrouns and Synchronus JS
let database = {
  world2: {
    login: "winner",
    password: "w1233",
  },
  world1: {
    login: "loser",
    password: "war",
  },
};
// console.log("started...");
// const login = (lg, pw, callback) => {
//   //here we declare callback function and write function body under
//   setTimeout(() => {
//     if (database.world1.login == lg && database.world1.password === pw) {
//       return callback(`${database.world1.login},welcome to social media`);
//     } else {
//       return callback("password isn't correct");
//     }
//   }, 1000);
// };
// const callback = (usr) => {
//   console.log(usr);
//   console.log("finished");
// };
//we write function individual codes out and use it in loginn's parametr
// login("winner", "war", (info) => {
//   console.log(`user1 's ${info}`);
//   console.log("finished..."); //we write outer codes here
// });
// const user2 = login("winner", "war");
// console.log(user1); //started...
// undefined
// finished..
//here answer is weird because  executing  login function codes doesn't expect given time actually machine attached undefined and code ended here appear wrong values which is login function value we have to fix it with callbacks
// console.log("finished...");
//special mean callback is given function to outer function's parametr  though we use several functions in outer function parametr it forecloses weird errors
//callbacks hell is in the callback function has  other calback function we suggest machine solves with Promises
//we use Promise with two function first works when checking result is true second function
console.log("started...");

let user = new Promise((resolve, reject) => {
  if (database.world1.login === "loser" && database.world1.password === "war") {
    return resolve("welcome to Facebook");
  } else reject("password is wrong");
});
//we use then,catch and finally method for use promise
// user
//   .then((res) => {
//     console.log(res);
//   }) //here we give data to promise

//   .catch((err) => {
//     console.log(err);
//   }) //catch errors
//   .finally(() => {
//     console.log("finished...");
//   }); //enter finally codes

let All = Promise.all([
  new Promise((resolve, reject) => {
    if (
      database.world1.login === "loser" &&
      database.world1.password === "war"
    ) {
      return resolve("welcome to Facebook");
    } else reject("password is wrong");
  }),
  new Promise((resolve, reject) => {
    if (
      database.world1.login === "loser" &&
      database.world1.password === "war"
    ) {
      return resolve("welcome to Facebook");
    } else reject("password is wrong");
  }),
  new Promise((resolve, reject) => {
    if (
      database.world1.login === "loser" &&
      database.world1.password === "war"
    ) {
      return resolve("welcome to Facebook");
    } else reject("password is wrong");
  }),
]);
// All.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });
//[ 'welcome to Facebook', 'welcome to Facebook', 'welcome to Facebook' ] all promise answers given as array type if false some promose all doesn't return its value.Other values don't return only false returns
//async await
//if difficult and hard work promises we may use async await
// async function get() {} //we add async keyword
const get = async () => {
  let res = await user; //we write here first queue function and when it executes then others execute
  console.log(res);
  console.log("finished..");
};
get();
// user.then((res) => {
//   console.log(res);
// });
//async await is syntax sugar for promise
