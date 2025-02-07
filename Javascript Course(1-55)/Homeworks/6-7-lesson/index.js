// #    /////////////////object/////////////////
// tasks get from Sardor Muxtorov's GitHub profile.
// No1
//Do find object's keys ?
// let obj = {
//   id: 1,
//   name: "WebBrain",
// };
// for (let x in obj) {
//   console.log(x);
// }
// output
// id,name

// no2
// find object values equal to numbers
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// for (let x in obj) {
//   typeof obj[x] == "number" ? console.log(x) : x;
//   //   console.log(typeof obj[x] == "number");
// }
// output
// id
// No3

//return boolean type object keys and values
// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };
// function checkBool(obj) {
//   let testobj = {};
//   for (let x in obj) {
//     if (typeof obj[x] == "boolean") {
//       testobj[x] = obj[x];
//     }
//   }
//   return testobj;
// }
// console.log(checkBool(obj));
// console.log(obj);
// output
// {   offline:true,
//     online:true,
//     individual:false
// }
// No4

//return string type value object keys
// let obj = {
//   id: 1,
//   name: "WebBrain",
//   surname: "Academy",
//   offline: true,
//   online: true,
//   individual: false,
// };
// function Search(obj, str) {
//   let testObj = {};
//   for (let x in obj) {
//     if (typeof obj[x] == "string" && obj[x] == str) {
//       testObj[x] = obj[x];
//     }
//   }
//   return testObj;
// }
// console.log(Search(obj, "WebBrain"));

// chiqish
//     name:"WebBrain"
// No5

//return string type value from given object
// let obj = {
//   id: 1,
//   name: "atirgul",
//   color: "qizil",
//   count: 10,
//   price: "10$",
// };

// for (const x in obj) {
//   if (typeof obj[x] == "string") {
//     console.log(obj[x]);
//   }
// }
// atirgul,qizil
// console.log(searchValue(obj));
// No6

// find sum nested age
// let person = {
//   id: 1,
//   name: "Odil",
//   age: 78,
//   child: {
//     id: 1,
//     name: "Ali",
//     age: 48,
//     child: {
//       id: 1,
//       name: "Umar",
//       age: 20,
//     },
//   },
// };
// let sum = 0;

// while (person) {
//   sum = sum + person.age;
//   person = person.child;
// }
// console.log(sum);
// // output
// // 146
// function checkNestObj(obj) {
//   let sumAge = 0;
//   for (let x in obj) {
//     if (typeof obj[x] == "object") {
//       checkNestObj(obj[x]);
//     } else {
//       if (x == "age") {
//         sumAge = sumAge + obj[x];
//       }
//     }
//   }
//   function checkInternestObj(obj) {
//     for (let x in obj) {
//       if (typeof obj[x] == "object") {
//         checkInternestObj(obj[x]);
//       } else {
//         if (x == "age") {
//           sumAge = sumAge + obj[x];
//         }
//       }
//     }
//   }

//   return sumAge;
// }

// console.log(checkNestObj(person));

// No7
// clone object other object and not change first object's data
// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
// };
// let obj1 = structuredClone(obj);
// console.log(obj1);
// No10
// add key and value for object
// let newObj = {};

// function add(obj, key, value) {
//   return (obj[key] = value);
// }
// add(newObj, "address", "toshkent");
// console.log(add(newObj, "address", "toshkent"));
// console.log(newObj);
// No8
// agar object ichida practice 1 dan katta bolsa 'qabul qilindi'.aks holda 'ming bor uzur.'
// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
//   practice: 1,
// };
// console.log(obj.practice > 1);
// function addChecker(obj) {
//   if (obj.practice > 1) {
//     obj["checker"] = "Aceepted";
//   } else {
//     obj["checker"] = "Sorry";
//   }
//   return obj;
// }
// console.log(addChecker(obj));
// output
// accepted
// No11
// if has talaba in object add kredit:true not add kredit:"not gave"
// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
//   practice: 1,
//   talaba: true,
// };

// function checkStud(obj) {
//   if (!(typeof obj["talaba"] == undefined)) {
//     obj["kredit"] = "true";
//   } else {
//     obj["kredit"] = "not gave";
//   }
//   return obj;
// }
// checkStud(obj);
// console.log(obj);
// chiqish
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1,
//     talaba:true,
//     kiridit:true
// }
// No12
// if age is wrong return "give wrong data"
// let obj = {
//   id: 1,
//   name: "Usmon",
//   age: 34,
//   year: 1990,
// };
// let getYear = new Date();
// function checkAge(obj) {
//   if (getYear.getFullYear() - obj["year"] > obj["age"]) {
//     return "give wrong data";
//   }
// }
// checkAge(obj);
// console.log(checkAge(obj));
// console.log(obj);
// console.log(getYear.getFullYear());
// output
// 'xato malumot kiritdingiz'

// No13
// If object has nested objects return true
// let obj = {
//   id: 1,
//   title: "the best",
//   address: { street: "Farobiy", number: "34" },
// };
// function checkNestObj(obj) {
//   let res = false;
//   for (value in obj) {
//     if (typeof obj[value] == "object") {
//       res = true;
//       break;
//     } else {
//       res = false;
//     }
//   }
//   return res;
// }
// console.log(checkNestObj(obj));
// checkNestObj(obj);
// output
// true
// No13
// // add IELTS
// let person = {
//   id: 1,
//   name: "Umar",
//   surname: "Ismoilov",
// };
// function addIELTSmark(obj, mark) {
//   return (obj["IELTS"] = mark);
// }
// console.log(addIELTSmark(person, 5.5), person);

//ouput
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }

// second issue

//if IELTS mark is bigger than 5.5 return accepted else return resubmission on console
// let person = {
//   id: 1,
//   name: "Umar",
//   surname: "Ismoilov",
//   IELTS: 5.5,
// };
// function addIELTSmark(obj, mark) {
//   obj["IELTS"] = mark;
//   return obj["IELTS"] >= 5.5 ? "accepted" : "resubmission";
// }

// console.log(addIELTSmark(person, 7));
// // accepted
// third issue

//if ielts is bigger than 5.5 add new pair student:true
// let person = {
//   id: 1,
//   name: "Umar",
//   surname: "Ismoilov",
//   IELTS: 5.5,
// };
// function addIELTSmark(obj, mark) {
//   obj["IELTS"] = mark;
//   return obj["IELTS"] >= 5.5
//     ? (obj["student"] = true)
//     : (obj["student"] = false);
// }

// console.log(addIELTSmark(person, 7), person);

// output
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true
// }

// // extra
// fourth issue
// // if student is true add key with random number
// person = {
//   id: 1,
//   name: "Umar",
//   surname: "Ismoilov",
//   ielts: 5.5,
//   student: true,
// };
// function addKey(obj) {
//   if ((obj["student"] = true)) {
//     obj["key"] = parseInt(Math.random() * 1000 + obj["id"]);
//   } else {
//     obj["student"] = false;
//   }
//   return obj;
// }
// console.log(addKey(person), person);
// output
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true,
//     parol: 101
// }
// 5 - shart
// // talaba bazaga kirishi kk shunday funksiya yarating u parol va name ni jonatsin. agar qarol bn name bazadagi
// // parol bn name ga togri kelsa consoleda hush kelibsiz aks holda parol yoki name xato chiqsin
// person = {
//   id: 1,
//   name: "Umar",
//   surname: "Ismoilov",
//   ielts: 5.5,
//   student: true,
//   password: 101,
// };

// function EnterBase(obj, password, name) {
//   if (obj["password"] === password && obj["name"] === name) {
//     return "Welcome base !!!";
//   } else {
//     return "Password or name is wrong";
//   }
// }
// console.log(EnterBase(person, 101, "Umar"));
//output
//"welcome base !!!"

//by Javscript Info

//Tasks
//Exercise 1
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
//Exercise 2
// let schedule = {};

// function isEmpty(obj) {
//   for (value in schedule) {
//     return false;
//   }
//   return true;
// }
// console.log(isEmpty(schedule)); //true
// //Exercise 3
// const user = {
//   name: "John",
// };
// user.name = "pete";
// console.log(user); //pete because doesn't change object reference
// //Exercise 4
// let salaries = {
//   John: 100,
//   Ann: 160,
//   pete: 130,
// };
// let sum = 0;
// for (value in salaries) {
//   sum += salaries[value];
// }
// console.log(sum);
// before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// const multiplyNumeric = (obj) => {
//   let element = 0;
//   for (const key in obj) {
//     if (typeof obj[key] == "number") {
//       element = element + obj[key];
//     }
//   }
//   return element;
// };
// console.log(multiplyNumeric(menu)); //500

// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu",
// };
// console.log(multiplyNumeric(menu)); //1000
// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;
//   console.log(woman, typeof woman, woman.husband);
// }
// marry("jim", "anns");
// console.log(marry("jim", "anna"));

//Symbol
// let id = Symbol("id");
// // console.log(id);
// // console.log(typeof id.toString());
// // console.log(id.description);
// let testObj6 = { [id]: "super", name: "mega" };
// // console.log(testObj6);
// for (key in testObj6) {
//   console.log(key + 5);
// }
// let name1 = Symbol.for("name");
// testObj6[name1] = name1;
// console.log(testObj6[name1]);

//Exercise 1
// let user = {
//   name: "John",
//   go: function () {
//     console.log(this.name);
//   },
// };
// user.go(); //doesn't run because hasn't semicolon ;
// //Exercise 2
// let obj, method;

// obj = {
//   go: function () {
//     console.log(this);
//   },
// };

// obj.go(); // (1) [object Object]//this reference object

// obj.go(); // (2) [object Object]//there alse this references object

// (method = obj.go)(); // (3) undefined//metod hasn't in obj and this doesn't bound object and this returns errort

// (obj.go || obj.stop)(); // (4) undefined//|| operator stopped when condition true there obj.stop declared so that it has in obj
//while we are asking him with dot it returned our value undefined
//Exrercise 3
// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let user = makeUser();
// console.log(typeof user);
// console.log(user.ref.name); // What's the result?
//undefined because this doesn't bound when we declare ref () function and it works with this true
//Exercise 4
// let calculator = {
//   read: () => {
//     this.a = 10;
//     this.b = 10;
//   },
//   sum: () => {
//     return this.a + this.b;
//   },
//   mul: () => {
//     return this.a * this.b;
//   },
// };
// console.log(calculator.read());
// console.log(calculator.sum());
// console.log(calculator.mul());
// //Exercise 5
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     // console.log(this);
//     return this;
//   },
//   down() {
//     this.step--;
//     // console.log(this);
//     return this;
//   },
//   showStep: function () {
//     // shows the current step
//     // console.log(this.step);

//     return this;
//   },
// };
// // ladder.up().up().down().showStep(); // 1
// // ladder.test();
// console.log(ladder.up());
// console.log(ladder.toString() + "s"); //ladder becomes [object Object] string answer is [object Object]s
// console.log(ladder.valueOf() + 2);

//function constructor
// function SameName(name) {
//   this.age = 15;
//   this.name = name;
// }
// console.log(SameName("anna"));
// let Cain = new SameName("cain"); //function costtructor gives convenient work when we use the same as objects
// console.log(Cain);
// let Tim = {
//   age: 15,
//   name: "tim",
// };
// console.log(Tim);
// //function constructor without new words
// function SameAge(age) {
//   if (!new.target) {
//     //we write new object without new word
//     return new SameAge(age);
//   }
//   this.time = false;
//   this.age = age;
// }
// console.log(SameAge(50));
// let GrandFather = SameAge(51);
// console.log(GrandFather);
// //return with constructors
// function SameGroup(number) {
//   this.age = 5;
//   this.number = number;
// return { length: 15 }; //If we write someting here machine doesn't return bounding datas with this it returns length:15 object,so return doesn't write sometime
// }
// let GroupSmall = new SameGroup(5);
// console.log(GroupSmall);
// let GroupBig = new SameGroup();
// console.log(GroupBig.age); //number undefined
// //functions with function constructor
// function SameNet(net) {
//   this.name = "Satellites";
//   this.net = net;
//   this.SayNet = function (type) {
//     if (!type) {
//       return this.name;
//     } else {
//       return type;
//     }
//   };
// }
// let local = new SameNet("local");
// console.log(local.SayNet());
//Exercise 1
// function A() {}
// function B() {}

// let a = new A();
// let b = new B();

// // alert( a == b ); // true
// //doesn't true because links doesn't similar even if we write similar code its don't equal
// console.log(a == b); //false
//Exercise 2
// function Calculator(a, b) {
//   this.read = function () {
//     console.log(a, b);
//     return a, b;
//   };
//   this.sum = () => {
//     return a + b;
//   };
//   this.mul = () => {
//     return a * b;
//   };
// }
// let calculator = new Calculator(5, 7);
// calculator.read();
// console.log("Sum = " + calculator.sum());
// console.log("Mul = " + calculator.mul());
// alert( "Sum = " + calculator.sum() );
// alert( "Mul=" + calculator.mul() );
//Exercise 3
function Accumulator(number) {
  this.value = number;
  this.read = () => {
    this.value += 1;
  };
}
let accumulator = new Accumulator(1); // initial value 1
accumulator.read(2); // adds the user-entered value
accumulator.read(1); // adds the user-entered value
console.log(accumulator);
console.log(accumulator.value);
// alert(accumulator.value); // shows the sum of these value
