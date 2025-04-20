//19-lesson
// console.log("a");
// function go(a, b) {
//   go.name = "MAX";
//   console.log(this.name, a, b);
// }
// let obj = {
//   name: "Anna",
// };
// go.call(obj, "Max", "Tim"); //first argument is object and others are arguments
// go.call(this, "Tilda", "tencent");
// let worker = {
//   someMethod() {
//     return 1;
//   },
//   slow(x) {
//     console.log(x);
//     return x;
//   },
// };
// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     // actually, there can be a scary CPU-heavy task here
//     console.log("Called with " + x);
//     return x * this.someMethod(); // (*)
//   },
// };
// // worker.slow(5);
// worker.slow = cachingDec(worker.slow);
// worker.slow(6);
// function cachingDec(func) {
//   let cache = new Map();
//   return function (x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func.call(this, x);
//     cache.set(x, result);
//     return result;
//   };
// }
// console.log(worker.slow(1));
// console.log(worker.slow(1));
// console.log(worker.slow(1));
// function go(min, max) {
//   go.extra = 11;
//   //   console.log(this);
//   return function () {
//     // console.log(this);

//     return min + max;
//   };
// }
// let count = [5, 7, 8, 9];
// // go.apply(this, count);
// console.log(go.apply(this, count)());
// function funtThis(min, max) {
//   //   this.nan = 6;
//   this.man = 7;
//   //   console.log(this.man);
//   //   console.log(man);
//   return this.nan + min + max;
// }
// // console.log(funtThis());
// let obj = {
//   nan: 1,
// };
// console.log(funtThis.call(obj, 1, 2));
// let args = [1, 2],
//   key = hash(args);

// function hash(args) {
//   return args[0] + "," + args[1];
// }
// console.log(typeof key);
//Exercise 1
//Spy decorator
// function work(a, b) {
//   return a + b;
// }
// function go(func) {
//   return func;
// }
// function spy(func) {
//   function wrapper(...args) {
//     wrapper.calls.push(args);
//     return func.apply(this, arguments);
//   }
//   wrapper.calls = [];
//   return wrapper;
// }
// work = go(work);
// work = spy(work);
// console.log(work);
// console.log(work(1, 2));
// console.log(work(4, 5));
// for (let args of work.calls) {
//   console.log(args.join());
// }
// for (let args of work.calls) {
//   console.log("call:" + args.join());
// }
//Exercise 2
//Delaying decorator
// function f(test) {
//   console.log(test);
// }
// function delay(f, t) {
//   return function (...args) {
//     let savedThis = this;
//     setTimeout(function () {
//       return f.apply(savedThis, args);
//     }, t);
//   };
// }
// delay(f, 1000);
// let f1000 = delay(f, 1000);
// // console.log(typeof f1000);
// console.log(f1000("test"));
//Exercise 3
//Debounce decorator
// function f(a, b) {
//   return a + b;
// }
// function debounceDec(f, t) {
//   debounceDec.calls = [];
//   debounceDec.calls.push(t);
//   let a = debounceDec.calls.length - 1;
//   if (t > debounceDec.calls[a]) {
//     return function (...args) {
//       let savedThis = this;
//       return setTimeout(function () {
//         return f.apply(savedThis, args);
//       }, t);
//     };
//   }
// }
// debounceDec(f, 100);
// debounceDec(f, 500);
// let func = debounceDec(f, 1000);
// console.log(debounceDec.calls.length);
// console.log(debounceDec.calls[0]);
// func(1);
// function debounceDec(f) {
//   let isCoolDown = false;
//   return function () {
//     if (!isCoolDown) return;
//     f.apply(this, arguments);
//     isCoolDown = true;
//     setTimeout(() => (isCoolDown = false), ms);
//   };
// }
// let func = debounceDec(f, 1000);
// func(1);
// func(2);
//Exercise 4
//Throttle Decorator
// function throttleDec(f, t) {
//   let isCoolDown = false,
//     savedThis,
//     savedArgs;
//   function wrapper() {
//     if (isCoolDown) {
//       savedArgs = arguments;
//       savedThis = this;
//       return;
//     }
//     f.apply(this, arguments);
//     isCoolDown = true;
//     setTimeout(function () {
//       isCoolDown = false;
//       if (savedArgs) {
//         wrapper.apply(savedThis, savedArgs);
//         savedArgs = savedThis = null;
//       }
//     }, t);
//   }
//   return wrapper;
// }
// function f(a) {
//   console.log(a);
// }
// let f1000 = throttleDec(f, 1000);
// f1000(f, 1000);
// f1000(f, 2000);
// let obj = {
//   name: "anna",
//   sayHi() {
//     this.name = "MAx";
//     console.log(this.name);
//     return function () {
//       let savedThis = this;
//       // console.log(savedThis);
//       console.log(this.name);
//     };
//   },
// };
// obj.sayHi()();
// let obj = {
//   name: "anna",
//   sayHi(phrase) {
//     console.log(phrase, this.name);
//   },
// };
// obj.sayHi("Hello");
// setTimeout(obj.sayHi.bind(obj, "bye"), 1000);
// function f(a) {
//   console.log(a, this.name);
// }
// let func = f.bind(obj, 7);
// func();
//Exercise 1

// function f() {
//   console.log(this);
// }
// let user = {
//   g: f.bind(null),
// };
// f();
// user.g(); //the same as f() nothing
//Exercise 2
// f = f.bind({ name: "john" }).bind({ name: "Ann" });
// f();// anything change
//Exercise 3
// function sayHi() {
// console.log(this.name);
// }
// sayHi.test = 5;
// let bound = sayHi.bind({ name: "John" });
// console.log(bound.test); //first property doesn't inheriteance for second function it gives only methods
//undefined
//Exercise 4
// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar")
//     ok.call(user); //here we use call because bind returns function link
//   else fail.bind(user);
// }

// let user = {
//   name: "John",

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// askPassword(user.loginOk, user.loginFail); //john doesn't print
// alert("g");
// console.log("a");
// function mul(a, b, c) {
//   return a * b * c;
// }
// let double = mul.bind(null, 2, 5);
// console.log(double(3)); //we give second or last paremtr through bind function parametr
// console.log(double);
function print(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(print(5)(4)(1));
let printA = print(7); //now function is anonymous
console.log(printA);
// print = _.curry(print);
console.log(printA(5)(6)); //18
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
function sum(a, b, c) {
  return a + b + c;
}
let curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3));
curriedSum(1, 2, 3);
//Exercise 1
function askPassword(ok, fail) {
  let password = "rockstar";
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    console.log(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?
