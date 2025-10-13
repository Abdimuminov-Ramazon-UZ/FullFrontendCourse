//Modules
//sometime we create big codes and files so we connect it to main blocks with modules
// import { admin, sayHi } from "./mock.js"; //we call elements with original names from other js codes
// import * as mocks from "./mock.js"; //we use as when we must call all coding elements so we place all elements in mocks object

// let d = "data";
// admin.name = "max"; //when we change admin property and it changes other import codes
// console.log(admin.name);
// sayHi(admin.name);
// console.log(d);
// console.log(admin.name);
// console.log(import.meta.url);//we call current import location which is local
// console.log(import.meta);
//we get modules object that has several datas
// console.log(mock);
// console.log(mocks.admin);
// import { admin as user } from "./mock.js"; //we may change exporter's name to other
// console.log(user);
// import Main from "./mock.js";
// console.log(Main); //we call  with it two names
// import { default as mocks } from "./mock.js";
// import "./mock.js"; //we don't assign to mock.js so we don't reference it
// console.log(admin);
// import { admin as user } from "./mock.js";
// console.log(user)
// export { names } from "./module.js"; //we create tunnel here for module.js
// export { admin } from "./mock.js"; //too mock.js
//so we create two tunnels for two code blocks and we export only index.js in other code file and we use module and mock files
//it is named re-export
// import User from "./mock.js";
// import MyUser from "./mock.js";
//we call default elements with more names
// console.log(User, MyUser);
// export * from "./mock.js";
//we face two problems first when we re-export datas to other code files it  leaves default and we force write another one re-export for deafult
//import() expreesion
// let modulepath = prompt("which module") || { name: "no path" };
// import(modulepath).then((obj) => console.log(obj));
//we write async awaits with import expression
let { hi, bye } = await import("./mock.js");
console.log(hi, bye);
