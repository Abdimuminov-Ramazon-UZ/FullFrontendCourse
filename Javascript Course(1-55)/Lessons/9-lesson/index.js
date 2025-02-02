//9-lesson
//String
//String is mainly text datas.In Js string write in the quotes.Quotes are three kind.
//First quote is Double quote "" second is second quote ''.we don't write quites ib the same quotes.Third quotes are bacticks`` and that are more commonly than others.we write only ${} in the it and other quotes easily write in it.However double quotes use for create keys and array values.Backticks are special for string datas.
//let str1='JavaScript are "dynamic" \n programming language'
//console.log(str1)

//we jump new row when we use characters as \n (new line )  and \t (tab which is 8 space)so that regular expressions in the single and double quotes.we jump new row without characters in the only backtick.
//we add strings with several ways such as plus sign
//let str2=` weak and weird but it is
//more popluar`// we can use \n and \t in backticks.
//console.log(str1+str2)
//let str3='EcmaScript \t is engine for it'
//console.log(str3)
//string literal
//let str4=`we use though it is \t  ${str2}`
//console.log(str4)
//create ways
// let str1 = "test mutable";

// let str2 = new String("tes");
// console.log(typeof str1, typeof str2); //string and object(["string":"way")
//But sometime we use localecompare() for compare create with quotes string and create with constructor string
// console.log(str1.localeCompare(str2)); //if they are the same machine returns 0,no same returned -1,if str2 has partially machine returns 1
// console.log(str1[1]); //e //we may use square  brackets for reference indexed string parts.However string are unmutable so that we don't writen or change it's through square brackets
//we use metods build in string
// console.log(str1.charAt(2)); //s return asked index in string,indexs start with 0
// console.log(str1.at(-6));
// let index = -6;
// console.log(typeof str1.at(index)); //u //at() metod accepts positive and negative numbers if we give positive it returns left to right order indexed string else it reurns right to left indexed returns
//we use static metod legth for get string's length
// console.log(str2.length); //3
//toUppercase()  returns capital letters string
// console.log("test".toUpperCase()); //TEST
//toLowerCase()  retuns lower letters
// console.log("WEBBRAIN".toLowerCase()); //webbrain
//we face sometime number and string dats we may use `${}` for it .Because this returns only string and machine doesn't return though datas are numeric
// let number = 1245;
// console.log(`${number}`.toLowerCase()); //1245
//we use toLocalLowercase() and toLocalUpeerCase() when we seprate other grammar human languages they may be arabic and chinese
// let str3 = "центр";
// console.log(str3.toLocaleLowerCase("ru-en"));
//indexOf() returns asked value's index
// console.log(str1.indexOf("es", 0)); //es start 1 index,we give second parameter for check search given index.we use reverse checking indexs
// console.log(str1.lastIndexOf("ab")); //8 both metods return indexes
//includes() checks asked data in given string and returns true or false
// console.log(str1.includes("st"));
//startsWith() checks which is started from asked data reverse metod is endWith()
// console.log("academy".startsWith("a")); //true
// console.log("center".endsWith("l")); //false
//we may add data  string's beginneng and end through padEnd() and padStart()
// console.log(str1.padEnd(25, ".")); //first parametr means start to add datas index,second parametr is added data
// console.log(str2.padStart(10, "?"));
//slice() use cut datas
// console.log("computer science".slice(7, 11)); //cut from first parametr to second parametr but not including end
// console.log("computer science".slice(0, 11));
// console.log("computer science".slice(0, -7)); //webbr //accepted negative index values
//substring()  is the same slice but it doesn't accept begative index
// console.log("webbrain".substring(0, 5));
//eval() calculate datas in string but datas  strictly contain of numbers and operators
// console.log(eval("2+2*2")); //6
//sometime spaces provides in the beginning and end string.metod trim() cuts they.trimEnd() and trimStart() use for special datas
let str1 = "     webbrain academy    ";
console.log(str1);
console.log(str1.trim()); //webbrain academy
console.log(str1.trimEnd());
console.log(str1.trimStart());

//split() becomes strings to array data type
console.log(str1.split()); //["webbrain acdemy"]
console.log(str1.split(" ")); //[ '', '', '', '', '', 'webbrain', 'academy', '', '', '', '' ]
//concat() adds two strings
console.log(str1.concat("hey", "console")); // webbrain academy    heyconsole

//other string metods use for regular expressions when we learn its then we use its
//loops we use for...of  loop for strings
for (let char of str1) {
  console.log(char);
}
