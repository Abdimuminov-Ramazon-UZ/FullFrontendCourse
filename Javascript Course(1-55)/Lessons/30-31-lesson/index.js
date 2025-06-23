//30-31-lesson
//proxy
//Handler object descriptors
// proxy is handler control of configuration object.it has two param first is given object second is configuration
//we use proxy for validation so mainly checking and changing
let user = {
  user: "max", //in programming we use bottom line in writing properties so they are private
  __stir: "123646", //if we change flags of its currently we use descriptor and flags
};
// let proxy = new Proxy(user, {
//if we write here given object then all prototypes and configuration are lost instead of we write get function
// get(target, prop) {
// console.log(target, prop);
// return target[prop];
// if (prop.startsWith("_")) {
// return `access for ${prop} denied`;
//   } else {
//     return target[prop];
//   }
// },
// set(target, prop, value) {
//   if (prop == "pw") {
//     return false;
//   }
//   target[prop] = value;
//   return true;
// },
//here we set metod as target so we don't want to change password and we use set metod and we install return . if someone may changes password and we install set metod then someone doesn't change pw prop
// });
// proxy.title = "It center";
// console.log(user);
// console.log(proxy.name);
// console.log(proxy.user); //here we call anyname with dot though target's property names aren't the same we call here with name
//here we call anyname with dot though target's property names aren't the same we call here with name
// 31-lesson
//proxy and Reflect
//we use object loops as keys,entries,value
let range = {
  from: 1,
  to: 10,
};
// let proxy = new Proxy(range, {
//   // ownKeys(target) {
//   //   return Object.keys(target).filter((vl) => !vl.startsWith("_"));
//   // },
//   has(target, prop) {
//     return target.from <= prop && target.to >= prop;
//   }, //here we check properties in object properties
// }); //here we hide pw or other important object datas
// for (vl in proxy) {
//   console.log(user[vl]);
// }
// console.log(1 in proxy);
//Reflect
Reflect.set(user, "title", "It center"); //{ user: 'max', __stir: '123646', title: 'It center' } it adds title:"It center" data
console.log(Reflect.get(user, "user")); //get datas from user object
//Reflect is syntax sugar for proxy so when we use proxy we work with object flags and change or control entrance metods
