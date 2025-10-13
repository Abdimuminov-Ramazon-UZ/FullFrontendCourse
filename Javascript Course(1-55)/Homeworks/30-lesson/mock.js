export const data = [
  { id: 1, type: "module" },
  { id: 2, type: "moduel2" },
  { id: 3, type: "module 43" },
  { id: 4, type: "modue 4" },
  { id: 5, type: "module 8" },
];
export let admin = {
  name: "pete",
};
export function sayHi(v) {
  console.log(v + `++++${admin.name}`);
}
// console.log(admin);
// export class User {
//   get() {
//     console.log("anna");
//   }
// }
// export default class Main {
//   constructor(name) {
//     this.name = name;
//   }
// }
// export default class {
//   constructor(name) {
//     this.name = name;
//   }
// }
//every code file has one default export codes we may give name or no we give name while we are getting codes from import
// export { admin as User, data as message }; //we may change names when we want to export datas
// export { admin } from "./mock.js";
// console.log(admin);
export function hi() {
  console.log("hi");
}
export function bye() {
  console.log("bye");
}
export default function () {
  console.log("default");
}
