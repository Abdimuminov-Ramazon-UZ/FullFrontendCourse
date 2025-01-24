// 2-lesson
// Type convirsons
//If Given data changes other type this is type convirsons.
// Now we see changing string and number
// let a = 1;
// let b = "1.11";
// console.log(typeof b);
// When we add string and number,number change string.
// we use arithmetic actions above string it changes number if string datas consist of numbers.
// c = a + b;
// console.log(a + b);
// we use isNan method for check number type
// console.log(isNaN(b));
// we give hint string and it changes to number,we change its to number through Number.parseInt and other metods.
// console.log(a + +b);
// console.log(a + -b);
// console.log(Number.parseInt(b));
// console.log(typeof c);
// let str1 = "webbrain",
//   str2 = "academy";
// console.log(str1 + str2);
// we comparison boolean type to other types

//true = !0 !null,!undefined

// console.log(false == 0);
// console.log(true == 1);
// console.log(false == null);
// console.log(undefined == null);
// console.log(false == undefined);
// true equals only number one string data,other strings maybe 2 and letters don't equal true

// console.log(true == "1");
// console.log(true == "2");
// console.log(true == "a");

//Operators
//addition(+),substraction(-),multiplication(*),division(/),remainder(%),exponatation(**) are mathematic operators and other mathematic tracks are in the math library.
// let a = 1,
//   b = "10";
// console.log(a + +b);
// let c = 110,
//   d = 12;
// console.log(c % d);
let a = 11;
// c = 12;
// console.log(a ** c);

//Prefixes (Increment and decrement)
//++ add 1 given value,but we write next to value and it adds 1 then run code
// console.log(a++); //there a=a+1
// console.log(++a); //thera 1+a=a is done

//-- substraction 1 given value.
// console.log(--a);
// console.log(c--);
// console.log(c);

// Equals  are -=,+=,*=,/= and **=.
// a-=2 means a=a-2,a+=3 means a=a+3 and etc
// console.log((a -= 2)); //a=11
// console.log((a += 2)); //a=9 ....
// console.log((a **= 2));
// console.log((a /= 2));
// console.log((a *= 2));
// console.log((a %= 2)); //there a=11, however then this condition a equals remains
// console.log(a);
// console.log((a -= 2));

//Comparisons
//<,>,==,===,<=,>= and ! are comparised type or datas,but that is returned Boolean datas.Sometimes data may be equals checked datas but we need to value so we use <=,>= and others
// console.log(true < false); //false,because true equals 1 ,false equals to 0 or undefined,null
// console.log(1 < 2);
// console.log(0.99999 <= 1);
// when we use == we checked values,If we use === machine checks also type.
// console.log(0 == false);
// console.log(true == false);
// When we comparise string datas machine not checked capitalize or lowercase it checks position elements in ASCII tables.there a come first in the ASCII table A is under on the table.
// let str1 = "A";
// let str2 = "a";
// console.log(str1 === str2);
// here machine checks first letter but its the same,then machine checks second letter and it is different from another
// let m = "ser",
//   n = "sve";
// console.log(m == n);
// console.log(m < n);

//when we use ! before data it means what we ask reverse values above data.however it returns only Boolean datas
// console.log(!a);
// console.log(!true);
// console.log(!false);
// console.log(!null);
// console.log(!undefined);
// console.log(!0);
// console.log(!"str");

//Logical Operators

// // Or ,we know about addition in the math,we use it here but it is binary addition.So if add zero to one it equals 1 but we add true to true it equals to true
// console.log(true || false);
// console.log("srt1" || "str2"); //here answer "str1",so if data string or some type which is not boolean operator return first faced  true value
// console.log(false || false);
// console.log(1 || 1);

// && And,It is binary multiplication.If we multiplicated zero to one it eqauls to zero.If we multiplicated  several datas and here has false value answer equals to false.Only all datas eqauals to true it returns true
// console.log(true && false);
// console.log(1 && 1);
// console.log(false || (false && true)); //false,Usually multiplication is done first,If more comparised datas are true ,machine returns last true data
// console.log("str1" && "str2");
// console.log("str1" && "str2" && "str23" && "str4");
