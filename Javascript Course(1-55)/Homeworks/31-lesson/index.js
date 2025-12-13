//31-lesson
//Miscellanous
//eval()
//we use eval when need code minifers
// let res = "alert(5)";
// eval(res);
//no eval is some weak while we are using with lexiacal environment
// let x = 1;
// function res() {
//   let x = 4;
//   let res = "alert(x)";
//   eval(alert(x));
//   //we may use window.eval() for outer variables
//   window.eval(res);
// }
// // res(); //eval print 4
// //we may change values with eval
// eval("x=10");
// console.log(x); //x=10
//eval is used more rarely  instead we need use new Function metod
// eval("let x = 5; function f() {}");
//here doesn't visible functon f and x is undefined for current codes
//Exercise 1
// let expression = prompt("please enter our arithmetic expression");
// alert(eval(expression));
//Reference types
//when we create obejcts we create special references from memory so machine references not object it demands special address from memory while we are working with this it tends
//itself own object but we change link so this losts itself owner and returns error
// Referenece types have several property first is address second is called name third is true or false when true has then runs this
//Exercise 1
// let user = {
//   name: "John",
//   go: function () {
//     console.log(this.name);
//   },
// };
// user.go(); //John
//Exercise 2
// let obj, method;

// obj = {
//   go: function () {
//     console.log(this);
//   },
// };

// obj.go(); // (1) [object Object]

// obj.go(); // (2) [object Object]
//because first and second examples have own reference types the rest of examples lose our links
// (method = obj.go)(); // (3) undefined

// (obj.go || obj.stop)(); // (4) undefined
//BigInt
//when we use BigInt we createn complex works so while we are using more big numbers
// const bigint = 1n;
// console.log(bigint);
// const bigI = BigInt("10"); //it eqauls 10n
// console.log(bigI);
// console.log(bigI + bigint); //11n
// console.log(Number(bigI));
//Math object metods aren't worked we use JSBI library for its
//Currying
//we use curry function when we use several parametres as date,login and may password we doen't write function again we retranslate it. we write another function in current function's return so it is  curry function
// func is the function to transform
// function curried(...args) {
//   //we entered args as destructure
//   if (args.length >= sum.length) {
//     //we comparise with function length
//     // (1)
//     return func.apply(this, args); //and apply argument to function
//   } else {
//     return function (...args2) {
//       //we demand execute if first condition doesn't execute
//       // (2)
//       return curried.apply(this, args.concat(args2)); // second function's args2 are applied to curried
//     };
//   }
// }
// function curry(func) {
//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// }
// function sum(a, b, c) {
//   return a + b + c;
// }
// let current = curry(sum);
// console.log(sum.length);
// console.log(current(5, 6, 8));
//new data function length is how many parametres
//Unicode (String Literals)
// console.log("\x7A");
// console.log("𝒳"[0]);
// console.log("x"[1]);
// console.log("x"[12]);
// console.log("𝒳".charCodeAt(0).toString(16));
// console.log("S\u0307\u0323".normalize());
//Proxy
//when we want use JavaScript Internal metods with object so we use Proxy it means we enter JavaScript objects (all object types as array and funtion ) we use internal metods what we want it.thus we use "handler" it has target and property target is current element property is element's of target
// let target = { old: "15" };
// let proxy = new Proxy(target, {});
// proxy.sold = "5";
// console.log(target, proxy);
// let numbers = [0, 1, 2];
// //we reassign new numbers array so target is numbers array with elements handler is metod get
// numbers = new Proxy(numbers, {
//   get(target, prop) {
//     if (target.length === prop) {
//       return target[prop];
//     } else {
//       return "doesn't enough"; // default value
//     }
//   },
// });
// console.log(numbers[100], numbers);
// let numbers = [];
// numbers = new Proxy(numbers, {
//   set(target, prop, val) {
//     if (typeof val == "number") {
//       target[prop] = val;
//       return true;
//     } else {
//       return false;
//     }
//   },
// });
// numbers.push(1, 2, 3, 4);
// // numbers.push("anna");
// console.log(numbers);
let object = {
  name: "John",
  old: "48",
  _password: "*******",
};
// console.log(Object.keys(object));
// object = new Proxy(object, {
//   ownKeys(target) {
//     return Object.keys(target).filter((val) => !val.startsWith("_"));
//   },
// });
// console.log(Object.keys(object)); //we filter symbolic keys with ownKeys
// let range = { start: 1, end: 10 };
// range = new Proxy(range, {
//   has(target, prop) {
//     //check have or no
//     return prop >= target.start && prop <= target.end;
//   },
// });
// console.log(8 in range); //we check with in 8 has or no in range
//Reflect
//we have as object internal metods it works like Object
// let ref = new Reflect();//we don't create Reflect with constructor
// console.log(ref);
// console.log(Reflect.set(object, "current", "2015")); //we add as set new prop to object
// console.log(object);
//proxy isn't similar to object
// user = new Proxy(range, {});
// console.log(user); //range isn't defined
//revoacable proxy
// let { proxy, revoke } = Proxy.revocable(object, {});
// console.log(proxy);
// revoke(); //remove all reference
// console.log(proxy);
//Exercise 1
// let user = {
//   name: "John",
// };

// function wrap(target) {
//   return new Proxy(target, {
//     get(target, prop) {
//       if (target[prop]) {
//         return true;
//       } else {
//         throw "Reference Error";
//       }
//     },
//   });
// }

// user = wrap(user);

// console.log(user.name); // John
// console.log(user.age);
//Exercise 2
// let array = [1, 2, 3];
// console.log();
// array = new Proxy(array, {
//   get(target, prop) {
//     if (target) {
//       let n = target.length - Math.abs(prop);
//       return target[n];
//     }
//   },
// });
// console.log(array[-1]);
// console.log(array[-2]);
// console.log(array[-3]);

// 3, the last element
// 2, one step from the end
// 1, two steps from the end
//Exercise 3
let handlers = Symbol("handlers");
function makeObservable(target) {
  target[handlers] = [];
  target.observe = function (handler) {
    this[handlers].push(handler);
  };
  return new Proxy(target, {
    set(target, prop, val) {
      let success = Reflect.set(...arguments);
      if (success) {
        target[handlers].forEach((handler) => handler(prop, val));
      }
      return success;
    },
  });
}

let user = {};
user = makeObservable(user);

// alerts: SET name=John

// user.observe((key, value) => {
//   alert(`SET ${key}=${value}`);
// });
user.name = "John";
//WeakRef
let newObj = new WeakREf();
console.oog(newObj);
let newsObj = new FinalizationRegistry();
//they are extra functions don't build-in library we write in codes and use as caching
