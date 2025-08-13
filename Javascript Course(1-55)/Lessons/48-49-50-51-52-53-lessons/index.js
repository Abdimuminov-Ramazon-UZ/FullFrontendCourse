//48-lesson
// console.log(window.location);
// let href = window.location.href;
// console.log(href);
//we have window location which means our home datas
//Data means pathname which is after domain names
//we add searchParams next pathname with question name
//http://127.0.0.1:5500/Javascript%20Course(1-55)/Lessons/48-49-50-51-52-53-lessons/index.html
//when we want to ask data Url use searchParams
let url = new URL("/post", "https://httpbin.org");
//URL have two parametr second is common directory first is base name we create several urls we add once first parametr
// let houzing = new URL(
//   "/properties?address=gunja&room=2",
//   "https://rent-houze/netlify.app"
// );
// let houzing = new URL(window.location);
// console.log(url);
// console.log(houzing.search); //here has searchParams
// //we use searchParams metods
// let search = houzing.searchParams;
// console.log(search.getAll("address")); //we have get parametres for get elements
// //we set manual which is search elements
// console.log(search.set("address", "Andijan"));
// console.log(search);

// const replace = (value, name) => {
//   if (!value) {
//     search.delete(name); //we delete name title with excress marks
//   } else {
//     // search.set(name, value);
//     search.append(name, value);
//     //append() metod adds new value every entered searchparams if we enter w it enters first and second time we add we then old searchparams don't remove therefore new searchParams adds
//   }
//   path.innerText = houzing.href;
//   return houzing.href;
// };

// pathname.value = search.get("address");
// city.value = search.get("city");
// zip.value = search.get("zip");
//we add its for not to remove elements when refresh page
// let div = document.createElement("a");
// const onChangeValue = ({ target: { value, name } }) => {
//   console.log(value.length);
// const onChangeValue = (event) => {
//   const {
//     target: { value, name },
//   } = event;
//   if (!value) {
//     search.delete(name); //we delete name title with excress marks
//   } else {
//     search.set(name, value);
//   }
//   we add name with inputs and we remove names as input so some characters get stuck in url as equal and ampersand marks
//   search.set(name, value);
//   path.innerText = houzing.href;
// replace(value, name);
//   div.href = replace(value, name);
//   div.click();
//we must stop action
// };
//49-lesson
//Websocket
//websocket is working with several admins or pages
//websocket is openiong tunnel from backend so we connect with it
//we use it for trading gaming,chatting we use it with socket io

// let socket = new WebSocket(
//   "ws://127.0.0.1:5500/Javascript%20Course(1-55)/Lessons/48-49-50-51-52-53-lessons/index.html"
// );
// const socket = new WebSocket(
//   "ws://127.0.0.1:5500/Javascript%20Course(1-55)/Lessons/48-49-50-51-52-53-lessons"
// );
// console.log(socket.readyState);
// //we create socket with server
// socket.onopen = (e) => {
//   console.log(e, "secket connected");
// };
// //we duplicate tabs or more users connect and fix communication
// socket.onmessage = (event) => {
//   console.log(event);
//   let div = document.createElement("div");
//   div.innerText = event?.data;
//   msg.append(div);
// };
// send.onclick = (event) => {
//   socket.send(event.value);
//   event.value = "";
// };
// // console.log(send);
// fetch("http//localhost:8080/users").then((res) => {
//   console.log(res);
//   return res.json();
// });
//50-lesson
//Localstorage
//we use data when in browser we prepare memory for datas so we use several memory stories for it
//first it localstorage
//we use cookies localstorage and sessionstorage for save datas
//localstorage save 10 Mb data and any window is opened data and  delete never
// window.onload = () => {
//   //when browser loaded
//   count.innerText = localStorage.getItem("count") || 1; //we get data from localstorage and set to count
//   title.innerText = localStorage.getItem("title") || "";
//   inTitle.innerText = localStorage.getItem("title") || "";
//   let roleID = localStorage.getItem("roleId");
//   if (roleID == "admin") {
//     user.innerText = "admin";
//   } else if ((roleID = "driver")) {
//     user.innerText = "driver";
//   }
// };
// const plus = () => {
//   console.log("+");
//   count.innerText = eval(`${count.innerText}+1`);
//   localStorage.setItem("count", count.innerText); //we chabge when change count it saved in localstorage setitiem has two metod first is key second is it's value
// };
// const minus = () => {
//   console.log("-");
//   count.innerText = eval(`${count.innerText}-1`);
//   localStorage.setItem("count", count.innerText);
// };
//if we refresh browser count equals again 1
//we use local storage which is we will save our data
//localStorage is build-in library

// console.log(localStorage);
// const onChangeTitle = (event) => {
//   const {
//     target: { value },
//   } = event;
//   title.innerText = value;
//   localStorage.setItem("title", value); //we save inout data to lS
// };
// console.log(extensionStorage);
//delete()
// delte.onclick = () => {
//   localStorage.removeItem("title"); //we have delete only given element
// };
// clr.onclick = () => {
//   localStorage.clear(); //we delete all
// };
//get values
// for (let k of Object.values(localStorage)) {
//   //we get values use Object.entries()
//   console.log(k);
// }
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => JSON.stringify(res))
//   .then((res) => console.log(res));
// sv.onclick = () => {
//   if (login.value == "1" && psw.value === "1") {
//     localStorage.setItem("roleId", login.value);

//     user.innerText = "    1";
//   } else if (login.value == "2" && psw.value == 2) {
//     user.innerText = 2;
//   }
// };
//51-lesson
//sessionStorage
//sessionstorage save 5Mb data and if we close tab sessionstorage remove data
// console.log(sessionStorage);
// //we have data as object

// let users1 = [
//   { id: 1, name: "webbrain" },
//   { id: 2, name: "webbrain" },
//   { id: 3, name: "webbrain" },
//   { id: 4, name: "webbrain" },
//   { id: 5, name: "webbrain" },
// ];
// let server = [];
// let users = JSON.parse(localStorage.getItem("users") || server); //we get data from localstorage
// const getData = () => {
//   users.forEach((item) => {
//     let div = document.createElement("div");
//     div.innerHTML = `${item.name} --- ${item.id}`;
//     div.addEventListener("click", () => {
//       let res = users.filter((v) => v.id !== item.id);
//       users = res;

//       localStorage.setItem("users", JSON.stringify(res));
//       list.innerHTML = null;

//       getData();
//     });

//     list.append(div);
//   });
// };
// getData();
//we delete data and we need save it
//if we close tab sessionstorage removes all data from itself
//52-lesson
//Cookies
//when we use browser and sites so browser save some data from cookies. cookies has auto send metod which sends datas next site or sources and we don't stop it
//cookies save 5kb data
//we set cookies
// let date = new Date(2026, 1, 5);
// data = date.toUTCString();
// document.cookie = `name='webbrain' ;expire=${data} `;
// document.cookie = `name='webbrain'; max-age=2; secure=true;samesite=strict`;
//this data send to backend without permission
// we add date for delete  data with expires when time is given time next cookies will be deleted
//we enter cookies life time with max-age
// console.log(date.toUTCString());
//cookies flags
//we enter secure for check security
// document.cookie = `name:'webbrain' max-age=2`;
//every time cookies set new element contructor is document.cookies="new data"
// if we fix samesite=strict so browser check URL and it doesn't request sending cookies auto and stop header elements
//samesite=lax is default and browser use only GET metod other metods are forbidden that is high level navigation
//53-lesson
//Encoding and Decoding
//if we have characters and problems in URL so some confuse appears in machine we must encoding
let city = "chilonzor 64"; //"/chilonzor%2064" as add
let url1 = new URL(`https://httpbin.org/${city}`); //Encode and decode is automatic here
console.log(url1);
//we must turn off searchParams
let search = url.searchParams;
// search.set("city", city); //we set simple way and nothing chance
search.set("city", encodeURIComponent(city)); //decodeURI ignore @ % + and other as characters
console.log(url1);
//we get data with decode

console.log(decodeURIComponent(search.get("city")));
