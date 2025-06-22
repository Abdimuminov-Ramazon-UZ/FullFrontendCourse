//28-lesson
//Generator functions
//when we create function we need to pause or continue code executed we use generator functions
// function* getdata() {
//   //we write function* for generator functions
//   yield 5; //yield like return for generator functions
//   yield 2;
// }
// const generator1 = getdata();
// console.log(generator1.next());
// console.log(generator1.next());
// console.log(generator1.next());
// console.log(generator1.next());
// { value: 5, done: false }
// { value: 2, done: false }
// { value: undefined, done: true }//undefined because yield has two values
// { value: undefined, done: true }
// for (let vl of generator1) {
//   console.log(vl);
// }
//as 5 2
//the way of loop but we switch for loop before this code machine returns empty array so when we ask values of generator functions we get one time values if we ask again its generator function doesn't return values
// console.log([...generator1]);
let users = [
  {
    id: 1,
    name: "magic",
  },
  {
    id: 2,
    name: "magic2",
  },
  {
    id: 3,
    name: "magic3",
  },
  {
    id: 4,
    name: "magic4",
  },
  {
    id: 5,
    name: "magic5",
  },
  {
    id: 6,
    name: "magic6",
  },
];
const onDelete = (id) => {
  let res = users.filter((vl) => vl.id != id);
  users = res;
};
// function* makeId(param) {
//   let id = 0;

//   while (true) {
//     yield ++id;
//     if (id === 3) {
//       return 10; //return stops function code blocks and yield pauses function we may pause function anywhere with yield and continues anywhere with yield
//     }
//   }
// }
// let generator = makeId();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
//when we call generator next so we create new id and code bloks continues as position
// const add = (usr) => {
//   // let res = usr.filter((vl) => vl.id !== id);
//   // users = res;
//   users = [...users, { id: generator.next().value, name: usr }];
// };

// // onDelete(3);
// console.log(users);
//we create here unique id so we change add function
// onDelete(3);
// add("unveil");
// add("unveil2");
// onDelete(7);

// add("unveil3");
// add("unveil4");
// onDelete(7);

// console.log(users);
// function* getdata(param) {
// param.forEach((element) => {
//   yield element
// });
// for (let v of param) {
// // console.log(v);
// let newVl = yield v;
// console.log(newVl);
// }
// let i = 0;

// while (true) {
//   let gn = yield ++i;
//   if (gn) i += gn;
//we catch here next's parametr so we give parametr to next and use it
//   }
// }
// let generic = getdata();
// console.log(generic.next(5));
// console.log(generic.next(2));
//here appears undefined
//if we ask elements with of so machine returns 0 and 1 and it isn't element of array parametr

//28-lesson
//Modules
//when we have big code blocks and we use it other file so we use modules
//we separate files big code blocks for simplicity
//29-lesson
//curry functions
//we use curry functions for complex algebraic problems
var name = "1";
function name1(params) {
  console.log(this);
}
// name1();
function getData(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
console.log(getData()); //getData curries next functions
//we write it some simplicity
const simpleFunc = (a) => (b) => (c) => {
  return a + b + c;
};
console.log(simpleFunc()); //the same its
//so we separate more small functions which is complex and big function
//we use it HOF so it means high order functions
const operations = (type) => {
  return (a) => (b) => (c) => {
    switch (type) {
      case "add":
        return a + b + c;
        break;
      case "minus":
        return a + b + c;
        break;
      case "divide":
        return a + b + c;
        break;
      case "multiply":
        return a + b + c;
        break;
    }
  };
};
const math = operations("multiply");
console.log(math(1)(3)(4));
