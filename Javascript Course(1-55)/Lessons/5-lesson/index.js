//5-lesson
//while,do while,function
//while,do while
//when we use while we only check condition and running code
//we accept null.undefined,false,0,NaN are false values.we may declare step values i above while code certainly it is first parametr of for loop we write third parametr in the while.
// let i = 4;
// while (NaN) {
//   console.log(i);
//   i++;
// }
//we write do while when we do code before while parametres as while
// do {
//   console.log(i++);
// } while (i < 12);

//Function
//we declare variables values however we doesn't declare whole of metods or operations.So we create function which is nammed whole of operations.we use this function desired position. Functions represents () or simple brackets.
//Function Declaration
//function deslaration has scope that is closed whole of operations
// function getAvr(a, b) {
//   //   let a = 12,
//   //     b = 34;
//   console.log((a + b) / 2);
// }
// getAvr(15, 48);
// //Function Expression is we attach function to variable.We use const variable type because we don't use again this function's name
// let checkC = function () {
//   console.log("this function expression");
// };
// checkC();
//Hosting is use create function expression and variables usually above code because when we create down code its we don't use above codes,function declaration  doesn't hosting because interpreter separate first these functions in the queu.
//Arrow function attaches to variable,too.however we don't use function keyword instead we use arrow =>
//callback function come some function's parametr
//function parametr is variable that is declared for only function operations.we use several parametres and we give default value to its.If we use not declared parametr machine return error what is not defined
// const getName = (name = "Anna") => {
//   console.log(name + 2);
// };
// getName();
// getName("Marcel");
// const checkParam = (name = "Tim", surname, age) => {
//   console.log(name);
//   console.log(surname);
//   console.log(age); //return undefined
// };
// checkParam();
//inner variable and outer variable
//if we declare variable with let this variable doesn't access out function.Outer variables use for function but they don't change though function execute some operation on it.
//shadow variable when we use var type variables in the function and we used variables name above codes.If we run code same variable change function's variable value
// let name = "Jim";
// const test = () => {
//   name = "Max";
//   console.log(name);
// };
// test();
// console.log(name); //now value is Max
//before default parametres that is JS versoin older than ES6.Programmers needed to write "" for not given parametres and thi executed through checked.
const checkDefPar = (name, surname) => {
  surname ? (surname = surname) : (surname = "");
  console.log(name, surname);
  // console.log(name, surname || "");
};
checkDefPar("Tim");
// let mix = 1;

// console.log(typeof mix);
// console.log(mix === undefined);
// if (mix === undefined) mix = "6";
// else mix = "5";
// // mix === undefined ? mix == mix : mix == "5";
// // console.log(mix === undefined ? mix == mix : mix == "5");
// console.log(mix);
// // console.log(typeof "");
// // console.log(mix === undefined);
//function return
//when we use several operations in the function and we need to value of operand and we use return.It attaches value to function

function getGPA(a = 0, c = 0) {
  let res = (a + c) / 2;
  return res;
}
getGPA(5, 4);
console.log(getGPA(5, 4));
console.log(getGPA());
console.log(typeof getGPA()); //now number if we don't write return function and machine returns reference.We don't use referense as value
const getKey = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};
console.log(getKey(100, 95, 86, 72));

//clean code
//we use different names to give name function or variables.they must understand every programmer We use CamelCase format.We need to add get,create,check and other key words to variables when we declare its
