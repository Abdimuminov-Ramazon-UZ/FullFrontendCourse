//3-lesson
//If...else...,Nullish  coalescing
//We use some cases  for checking data,it may be separate intermediate. Every data checking each other possible value is impossible.So we enter new explanation if else.We enter some condition for datas.if statement works when condition true else is reverse or false.for example temperature
let t = 5;
// if (t > 8) console.log("temperature is low"); //there condition is false and if doesn't run.If condition equals 0,null,undefined if statement doesn't run.
// if (t < 8) console.log("temperature is middle");
//Now,we add else for if.else doesn't demand condition.it means if statement's reverse.we use operators and comparisons and other metods for condition however we don't forgot if statement demands boolean values.condition's result always equal to boolean data type.
// t = 18;
// if (t <= 8) console.log("temperature is middle");
//if we write one line code we may don't use brackets
// else console.log("Please check temperature");
// However we need to check several conditions we may use if ... else if...else structure

// t = 10;
// if (t < 0) {
//   console.log("Weather if freezy");
// } else if (t > 0) {
//   console.log("Weather is plus");
// } else {
//   console.log("Weather is not defined");
// }
//if we write several if else if else conditions and first condition is true machine doesn't checking other under if else conditions.If we doesn't write else if structure and we write only if structure machine checks every if structure.in else if structre machine doesn't checking the rest conditions though they may be true.
//now we see several completely conditions
if (t > 0 && typeof t === "number") console.log(t);
// when we must write woth brackets in the if structure we use object

// if(true){return t}

// Conditional operator == ternary operator
//we use ternary operator when we use simple comparisons or conditionals.It is continue with several two dots. It is advised when we check two conditional because reading and using codes may be difficult second time

t = 40;
t < 39
  ? console.log("temperature is boiling")
  : t > 0
  ? console.log("temperature is hotter than yesterday")
  : console.log("temperature is hot");

t > 45
  ? console.log("temperature is boiling")
  : console.log("temperature is hot");

//   Nullish operator is checking strictly null and undefined
//null and undefined is primitive however they are empty even boolean false data is false but it is data also.If we use nullish between false and null machine returns false.NaN is data also even false.
console.log(null ?? undefined); //null because null is true for nullish operator ,however we comparison null and undefined machine returns undefined.
console.log(null ?? null);
console.log(undefined ?? null);
