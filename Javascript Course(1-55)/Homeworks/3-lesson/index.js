//3-lesson
//alert,confirm,prompt
// alert("How old are you ?");
// let age=prompt("How old are you Tim ?",100);
//prompt has second parametr.first is title or question.Second is default what if visitor touch cancel and it returns default value.
// let res = confirm("Are you student ?");
// console.log(typeof res);
// alert(res);
// alert("Hello I'm first web Page");
// let getName = prompt("Please write your name.", "User");
// let endPage = confirm("Is it fine ?");
// alert(`Thank you ${getName} !`);
let cond = (year = 2015);
console.log(cond, year);
console.log(cond === year);
//Exercise 1
// if ("0") {
//   alert("Hello");
// }
//it is shown because '0' doesn't equal false.
//Exercise 2
// let getName = prompt(`What's the "official" name of Javascript ?`);
// if (getName === "ECMAScript") {
//   alert("Right!");
// } else {
//   alert("You don't know ? 'ECMAScript'");
// }
//Exercise 3
// let checkNum = +prompt("Please enter number", "0");
// if (checkNum < -1) {
//   alert("It is less than zero");
// } else if (checkNum == 0) {
//   alert("It equals zero");
// } else {
//   alert("It is greater than zero");
// }
//Exercise 4
// let a = +prompt("value of a", 0),
//   b = +prompt("value of b", 0),
//   result = "";
// a + b < 4 ? (result = "Below") : (result = "Over");
// alert(result);
//Exercise 5
// let message = "",
//   login = prompt("enter your Level", "");
// login == "Employee"
//   ? message = "Hello"
//   : login == "Director"
//   ? message = "Greetings"
//   : message = "No Login";
// alert(message);
//Exercise  6
// alert(null||2||undefined);//2
//Exercise  7
// alert(alert(1)||2||alert(3));
//alert(1) returns undefined value and goes on checking values

//Exercise  8
// alert(1&&null&&2);//null
//Exercise  9
// alert(null || (2 && 3) || 4); //3
//Exercise 10
// let getAge = +prompt("Your age ?", "");
// getAge === 14 ? alert("You are adult") : alert("you are old");
// if (getAge >= 14 && getAge <= 90) {
// alert("You are adult");
// } else alert("you are old");

//Exercise 11
let checkAge = 25;
if (checkAge <= 14 && checkAge >= 90) {
  console.log(checkAge);
} else {
  console.log((checkAge = 14));
} //first
checkAge = 25;
if (!(checkAge >= 14 && checkAge <= 90)) {
  console.log(checkAge + "  Age");
} else {
  console.log(checkAge);
}
//Exercise 12
if (-1 || 0) {
  console.log("first");
} //first
if (-1 && 0) {
  console.log("second");
} //nothing
if (null || (-1 && 1)) {
  console.log("third");
} //third
//exercise 13
let checkWho = prompt("Who's there ?", "");

if (checkWho == "" || checkWho == null) {
  alert("canceled");
} else if (checkWho == "Admin" || checkWho == "admin") {
  alert("Password!");
  var getPass = prompt("Enter Your Paswword!");
  if (getPass == "" || false || null) {
    alert("canceled");
  } else if (getPass == "TheMaster") {
    alert("Welcome !");
  }
} else {
  alert("I don't know you");
}
