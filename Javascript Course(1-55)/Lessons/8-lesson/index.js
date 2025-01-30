//Primitive Data type Number
//when we usually use numbers we write smaller billion numbers however machine gives possible more numbers
//we know from mathematics e means power of ten however the biggest number 1e500 machine returns Infintiy
// let testNum = 1e6 + 1;
// console.log(1e500 + 1);
// console.log(testNum);
//we may write with underscore numbers
// let testNum2 = 1_000_000;
//but we write number with underscore in string machine return NaN
// console.log(testNum2);
//Some float numbers return no same value because they are period numbers machine counts eighteen number rooms
// console.log(0.2 + 0.2 === 0.4);
//for example 0.2 == 0.20000000003
//we use toFixed metod for decrease number rooms
// console.log((0.1).toFixed(19));
//mainly number buit in metods uses for checked number type or separate to float or integer parts
//paresInt separate integer part
// console.log(parseInt("1.45"));
//parseFloat seprates only float parts
// console.log(parseFloat("1.45"));
// let num = "0.1+0.2";
// console.log(Number(eval(num))); //we use parse int parsefloat and eval function for type convirsion so that is string becomes to number
// console.log(Number.parseFloat(num));
//we use constructor which is built in object in programming language
//Built in Number library has several metods and static values and build in library Math .Static values :
console.log(Math.PI);
console.log(Math.LN10);
console.log(Math.E);
console.log(Math.LOG10E);
console.log(Math.SQRT2);
console.log(Math.LOG2E);
//they are mathematic special numbers
//binary numbers we use decimal number system in real life but computer uses  binary numeric system.again We use hexadecimal(such as for rgb colors),octal numeric systems.
//we show several ways  string to number
//now we becomes number to string.however given number becomes binary if we don't give property.we give 8 to property tosring becomes given number to octal numeric system
let testnum = 5;
console.log(testnum.toString(2)); //101
//for reverse we use parseInt
// console.log(testnum.toLocaleString());
console.log(testnum);
console.log(parseInt("1001", 2)); //9
//isNaN() is checked NaN or no number or variable
console.log(isNaN(+"1000")); //false this is number type
//to.Precision() is cut numbers  according to property
let numb = 5.1246879,
  numb2 = 0.12333333;
console.log(numb.toPrecision(3)); //5.12
console.log(numb2.toPrecision(4)); //0.1233 metof ignores first 0 and returns exist numbers 1233
// If we write this number it adds 1 itself
console.log(9_999_999_999_999_999); //because space dosn't enough in the memory
//Math
console.log(Math.abs(-10)); //return absolut so that plus sign number
console.log(Math.round(78.4666)); //78 so that rounding metod if 5 instead of 4 machine return 79
console.log(Math.floor(5.78)); //5 cut float part though 7 is bigger than 5 but is rounding number if we give minus number such as -10 to it that returns -11
console.log(Math.ceil(10.41)); //11 adds 1 and return 11 though first number of float part is smaller 5
console.log(Math.cbrt(8)); //2 cub root of given number
console.log(Math.trunc(5.99)); //5 cut of float parts no rounding
console.log(Math.random()); //returns random number range of 0 until 1 if we multiple some numbers it return given range such as we multiple 10 range is 0 until 10
console.log(Math.min(1, 5, 8, 54, 78)); //retunr minimal number from the collection
console.log(Math.max(54, 100, 10000, 1502)); //retunr maximal number from the collection
console.log(Math.hypot(41, 31)); //return this is similar to sqrt(a*a + b*b+ etc)
//we are use sin,cos,tan,tanh,asin,atan,acos and others for special of mathematic metods
console.log(Math.sign(true)); //1 metod returns sign of number If number is plus it returns 1 no it returns -1.JavaScript has -0 and +0 numbers we use sign metod on its machine returns -1 and 1
//as rules
//references(speds of metods)
//the slower metods are trunc round floor the fastest metods are bitwise operators
