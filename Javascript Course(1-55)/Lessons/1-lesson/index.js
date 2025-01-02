//We start learn Javascript programming language.
// We work with Javscript through three way.First,We connect Js file to HTML and use Browser console.Second way is code editor's console.Third way is online code editors.Now,we use offline code editor's console through install Node JS on our computer
// console.log("Hello Js");
// Variables
// We create variables for connect more or lesser datas to one variable.Javasript has three variables.Its are var,let,and const.let doesn't take place from memeory when we call it.var is old variable and sometime it is inconvenient in the scope.const accept only constanta values and it doesn't change second time.if we try to change it virtual machine gives syntax error.We may write with spacing programm,however vas code configuration ignore spacing when it turns on.We attach data through one equal symbol.Every code ends with semicolon.It means finished line or code.If we don't write it machine takes out Syntax error.

// let text = "webbrain academy";

// Javscript is single thread programm language.computer or machine prints its' codes.If We change something in the code machine does't print old codes and print only changing codes.
//
// let text;
// console.log(text);
// console.log(test);
// If we write some variable ,however anything is't attached it
// machine return undefined,If we ask not announced variable machine returns this variable is not defined that is reference error.If we announce variable  not write variable type it gets var type.Javascript is case nsetive.we declare myVariable and myvariable.Its aren't the same as variables.We don't use reserve keywords.They are function,class and etc.

// Javascript has eight data types.They are divides twice.First is primitive second is non-primitive.Primitive are number,string,undefined,null,Boolean,Symbol and  BigInt  .non-primitive is object.we use typeof for know data type .when we ask about data type primitives return value non-primitives returns reference.Object consist of function,object and array.We learn first string.

// let txt = "123";
// let tst = "webbrain academy";
// let t = `sure are`,
let k = 'academy superb "violet"',
  l = 'lorem ipsum \n  "dolor"';
console.log(k, l);
// We write string datas in backtick,double quotation mark,single quotation mark.if we want to write string in d.q.m we don't write d.q.m in the this string ,so we write string in s.q.m and we may write d.q.m in it.for s.q.m this action is reversed.Backtick is universal we may write s.q.m and d.q.m.
// string appears with yellow color in terminal.we may use backslash for ignore s.q.m and d.q.m.however it is some uncomfortable.we write /n for new line in s.q.m and d.q.m.If we write backtick above truobles solved
// console.log(txt, tst);

// Secont data type is number.Number appears with white color on the terminal.
// let number = 1;
// console.log(number);
//Third data type is BigInt.when we use maximal number and we need to bigger number we crete it uses with n.

// let num = 9000000000000000000000;
// console.log(9000000000000000000000n + 1n);

// boolean has true and false.it is logician data type.
// let b = true;
// let c = false;
// console.log(a, b);

// Null isnot given anything data.But null is object data type.when we use null for empty variables
// let d = null;
// console.log(d);
// Undefined isn't attached anything data to variable.Undefinet is primitive.
let e;
let d = null;
console.log(typeof d);
console.log(e === d);
// symbol is unique data.It reverse for const.Name is unique for const.Symbol is unique for data type.
let g = "Learn";
let h = "Learn";
const j = "Learn";
const v = Symbol("Learn");
const m = "Learn";
// j = "other";
let f = Symbol("Learn");

console.log(g, h, j, f, v, m);

// object is collect datas.array is indexed object.obj is some completely data it create keys,property,value.function is the same as try it collects codes and it returns some value.we must call function for done.we count from 0 in the programming.
let ar = [1, 2, "academy"];
let obj = { a: 1, c: "collect" };
let func = () => {
  console.log(m);
};
function rest() {
  return console.log(d + m);
}
rest();
// console.log(ar, obj, func, rest());
