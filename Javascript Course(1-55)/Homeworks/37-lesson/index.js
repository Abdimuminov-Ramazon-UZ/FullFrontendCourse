//37-leson
//Fetch

// let users = fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => {
//     return json;
//   });
//fetch is way of getting datas from service so we use more complex ways for it
// console.log(users);
// let urlUse = URL.createObjectURL();
// console.log(urlUse);
// let formData = new FormData();
// console.log(formData);
//we use for comfortable fetch html elements with formdata we get submit and ente several inputs
// let aborted = new AbortController();
// console.log(aborted);
// let controller = new AbortController();
// fetch("https://www.jsonplaceholder.typeocode.com", {
//   signal: controller.signal,
// });
// console.log(controller);
//we use aborted signals for abortedcontroller constructor
//we see data i body.headers for downloaded progrress
//we use CORS for stricted url domains don't enter API works
let urlNEw = new URL("https://max.com");
let newUrl2 = new URL("/tester", urlNEw);
// console.log(newUrl2);
// console.log(encodeURI(newUrl2));
//we use encode and decode functions for URL's string appearance when we send data to server so we try to hide path's from seeing
//we use XMLHHTPReauest for old script elements and while we load big datas
let xml = new XMLHttpRequest();
// console.log(xml);
//when we decide send data or file to server we change many headers in fetch datas
// let nre = new EventSource("/events/subscribe");
document.cookie =
  encodeURIComponent("maximus") + "=" + encodeURIComponent("titus");
console.log(document.cookie);
//cookie is 4Kb memory
//if we give xpires and max-age to cookie it lives given time therefore it will have killed when we close current tab
//samesite-lax get create barrier every post metods though they are asked from samesite origins
//GDPR Is politics about when we enter every site it asks from us "we may use your cookies ?"
//if we choose turn off Javascript machine add httpOnly metod to cookies so that cookies doesn't appear document.cookie
//every session creates sessionStorage,every option and site's tabs collection create localstroage
// let openrea = indexedDB.open("max", 5);
// let db = openrea.result;
// openrea.onupgradeneeded = function () {
//   console.log(db);
// };
// db.createObjectStore("books", { keyPath: "id" });
// let transcation = db.transaction("bookses", "readwrite");
// let bookses = transcation.objectStore("bookses");
// let req = bookses.add(book);
// let book = {
//   id: "rim",
//   price: "X",
//   crreated: "Ancients",
// };
// req.onsuccess(console.log("successfully!", req.result));
// let version = 6;
// let openDb = indexedDB.open("cases", version);
// openDb.onupgradeneeded = function () {
//   let db = openDb.result;

//   db.createObjectStore("maximus", { keyPath: "id" });

//   ++version;
//   console.log(db, version);
// };

// let db = openDb.result;
// let transaction = db.transaction("maximus1", "readwrite");
// let armies = {
//   id: "rim",
//   value: 10000,
//   created: "X centus",
// };
// let army = transaction.objectStore("maximus1").add(armies);

// console.log(openDb, version);
// const requestDb = indexedDB.open("myBase", 1);
// requestDb.onupgradeneeded = (event) => {
//   const db = event.target.result;
//   const store = db.createObjectStore("users", {
//     keyPath: "id",
//     autoIncrement: true,
//   });
//   store.createIndex("email", "email", { unique: true });
// };
// requestDb.onsuccess = (event) => {
//   const db = event.target.result;
//   addUser(db);
// };
// function addUser(db) {
//   const transaction = db.transaction(["users"], "readwrite");
//   const store = transaction.objectStore("users");
//   const user = {
//     name: "max",
//     email: "tim@gamial.con",
//     age: 30,
//   };
//   const request = store.add(user);
//   request.onsuccess = (event) => {
//     console.log("Ma'lumot qo'shildi, ID:", event.target.result);
//   };

//   request.onerror = (event) => {
//     console.error("Xatolik:", event.target.error);
//   };
// }

// console.log(requestDb);
// Ma'lumotlar bazasini ochish
// const request = indexedDB.open("MyDatabase", 1);

// request.onupgradeneeded = (event) => {
//   const db = event.target.result;
//   // Object store yaratish
//   const store = db.createObjectStore("users", {
//     keyPath: "id",
//     autoIncrement: true,
//   });
//   store.createIndex("email", "email", { unique: true });
// };

// request.onsuccess = (event) => {
//   const db = event.target.result;
//   addUser(db);
// };

// // Ma'lumot qo'shish funksiyasi
// function addUser(db) {
//   // Transaction yaratish (readwrite rejimida)
//   const transaction = db.transaction(["users"], "readwrite");

//   // Object store'ni olish
//   const store = transaction.objectStore("users");

//   // Ma'lumot qo'shish
//   const user = {
//     name: "John Doe",
//     email: "john@example.com",
//     age: 30,
//   };

//   const request = store.add(user);

//   request.onsuccess = (event) => {
//     console.log("Ma'lumot qo'shildi, ID:", event.target.result);
//   };

//   request.onerror = (event) => {
//     console.error("Xatolik:", event.target.error);
//   };

//   // Transaction tugaganda
//   transaction.oncomplete = () => {
//     console.log("Transaction tugadi");
//   };

//   transaction.onerror = (event) => {
//     console.error("Transaction xatosi:", event.target.error);
//   };
// }
// console.log(request);
let requestDbEx = indexedDB.open("request", 2);
requestDbEx.onupgradeneeded = (event) => {
  let db = event.target.result;
  const store = db.createObjectStore("users", {
    keyPath: "id",
  });
  console.log(event, db);
};
