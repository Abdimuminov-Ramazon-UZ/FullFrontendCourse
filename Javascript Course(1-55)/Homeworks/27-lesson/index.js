//27-lesson
//Errors
// try {
//   // let index = copy;
//   // {{{{{{{{{//try catch only for runtime errors so we doesn't use it for syntax wrong codes
//   setTimeout(() => {
//     llll;
//     return console.log("we fix 1000 ms"); //here try catch lates
//   }, 1000);
// } catch (err) {
//   console.log("variable isn't defined");
//   // console.log(err);
// }
// let err = new Error();
// console.log(err.message);
// setTimeout(function () {
//   try {
//     noSuchVariable; // try...catch handles the error!
//   } catch {
//     console.log("error is caught here!");
//   }
// }, 1000);
//we have error object which is defined errors
// try {
//   lllll;
// } catch (error) {
//   //here we use error object's property
//   console.log(error.message);
//   console.log(error.name);
//   console.log(error.stack);
// }
//throw operator
let json = `{"age":30}`;
// try {
//   let user = JSON.parse(json);
//   if (!user.name) {
//     throw new SyntaxError("Incomplete json : "); //we create important error which is catch's parametr
//   }
//   console.log(user.name);
// } catch (err) {
//   console.log("JSon eror: " + err.message);
// }
// let json = '{ "age": 30 }'; // incomplete data
// try {
//   let user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name");
//   }

//   blabla(); // unexpected error

//   alert(user.name);
// } catch (err) {
//   if (err instanceof SyntaxError) {
//     console.log("JSON Error: " + err.message);
//   } else {
//     throw err; // rethrow (*)
//   }
// }
// console.log("a");
// try {
// try {
//   let user = JSON.parse(json);

//   // if (!user.name) {
//   //   throw new SyntaxError("Incomplete data: no name");
//   // }

//   blabla(); // unexpected error

//   alert(user.name);
// } catch (err) {
//   throw err; // rethrow (*)
// }
// }
// catch (error) {
//   console.log(error);
// }
// console.log("b"); //cathc throw error to global scope after program stop and not run next codes
// function func() {

//   try {
//     return 1;

//   } catch (err) {
//     /* ... */
//   } finally {
//     alert( 'finally' );
//   }
// }

// alert( func() );
//finally
//when we use finally so we decide runc code
// function blabla(params) {
//   return params;
// }
// try {
//   // blabla();
//   return 1;
// // } finally {
//   //first finally run then return runs
//   // } catch (err) {
//   //   console.log(err.message); //catch works
//   // }
//   console.log("work finally"); //then finally works though try doesn't catch errors
// }
//node js errors with global
// window.onerror = function (message, url, line, col, error) {
//   console.log(line, col, error, message, url);
// };
// blabla(); //113 1 ReferenceError: blabla is not defined
// at index.js:113:1 'Uncaught ReferenceError: blabla is not defined' 'http://127.0.0.1:5500/27-lesson/index.js'
//Exercie 1
//of course fragments aren't because machine runs finally though try catch errors or not second fragment maybe codes stops here
//custom errors
// class Error {
//   constructor(message) {
//     this.message = message;
//     this.name = "Error";
//   }
// }
// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }
// function test() {
//   throw new ValidationError("Whoops !");
// }

// try {
//   test();
// } catch (err) {
//   console.log(err.message);
//   console.log(err.name);
// }
// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// // Usage
// function readUser(json) {
//   let user = JSON.parse(json);

//   if (!user.age) {
//     throw new ValidationError("No field: age");
//   }
//   if (!user.name) {
//     throw new ValidationError("No field: name");
//   }

//   return user;
// }

// // Working example with try..catch

// try {
//   let user = readUser('{ "age": 25 }');
// } catch (err) {
//   if (err instanceof ValidationError) {
//     console.log("Invalid data: " + err.message); // Invalid data: No field: name
//   } else if (err instanceof SyntaxError) {
//     // (*)
//     console.log("JSON Syntax Error: " + err.message);
//   } else {
//     throw err; // unknown error, rethrow it (**)
//   }
// }

class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error";
  }
}
class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = "FormattingError";
    // this.stack = stack;
  }
}
let err = new FormatError("formatting error");
