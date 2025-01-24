//4-lesson
//switch,case,default
//switch is similar to if else however it works only strictly equal conditions,it accepts variables.Every switch checks only data and we write break for stop running code.We enter some codes for default conditions.switch case doesn't accept operators it checks datas strictly.
// let data = "rain and sunny";
// switch (data) {
//   case "rain":
//     console.log("Today is rainy day");
//     break;
//   case "snow":
//     console.log("Today is snowy");
//   default:
//     console.log("Today is warm");
//     break;
// }
//for loop
//for loop is used for cycling programs
//It has three parametr first is step order,second is condition,third is rule of chnage.Code runs begin from second parametr ,when code is completed in the brackets then i change with rule.When second parametr is false then code stops to run
//we declare i out for scope and evade problem with closures.
// let i = 0;
// for (; i < 10; ++i) {
//   //if we don't get first parametr for loop counts first step with given value i,If we don't get third parametr loop runs infinity if condtion is true.we must give second parametr
//   console.log("count i", i);
// }
// let i = 1;
// console.log(i++);
// console.log(i);
// console.log(++i);
// console.log(i);
// var sum = 0;
// for (let i = 1; i < 12; i++) {
//   sum += i;
//   console.log(sum, i);
//   if (sum === 10) {
//     console.log(sum, i);
//     break; //we use break with if for stop runnning for loop,there when sum===10 breka stops loop
//   }
// }
//odd or even
// for (let i = 1; i < 10; ++i) {
//   if (i % 2 == 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }
//we use continue word for loop when we need to remove results depending on given condition,reverse is break only stop running for loop.
// for (let i = 1; i < 50; i++) {
//   //now we remove divisible by 3 numbers from list
//   if (i % 3 === 0) continue;
//   console.log(i);
// }
//labels
//when we use inner loops maybe two or more inner loops.we may use labels which inner and outer.
// outer: for (let i = 1; i < 10; i++) {
//   if (i === 5) break;
//   inner: for (let j = 1; j < 15; j++) {
//     // if (i === 5) continue;
//     console.log(i, j);
//   }
// }
outer: for (let i = 1; i < 10; i++) {
  inner: for (let j = 1; j < 15; j++) {
    if (i === 5) break outer; //we write here outer for stop run loop
    console.log(i, j);
    if (j === 10) continue inner; //inner work in themselves so outer work up one step out
    console.log(i, j); //above console doesn't show remive j===10 or couple i and j=10  but this console shows it
  }
  // if (i === 5) continue inner;//inner doesn't work with out
}
