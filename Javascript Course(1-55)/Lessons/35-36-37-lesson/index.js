//35-lesson
//Events
// function al(a) {
//   alert("hey dom from js");
//   console.log(a);
// }
// function move(event) {
//   console.log("moving", event); //we have mousevents through parametr and we use it
// }
//we use function in js for control events
//we have several mouse events for example onclick when mouse clicks on button,onmousemove
// button.onclick = function () {
//   console.log("max");
// };
// w euse id as variable in js
// import { user } from "./data.js";
// let container = document.querySelector(".container");
// let users = user;
// console.log(user);
// user.forEach((value) => {
//   let div = document.createElement("div");
//   div.innerHTML = `${value.id}- ${value.name}     <button onclick="console.log('${value.id}')">click me</button>`;
//   container.append(div);
//   // console.log(value);
// });
//Remove event
// let res = user;
// console.log(res);

// function ondelete(value) {
//   let result = res.filter((vl) => vl.id !== value);
//   res = result;
//   container.innerHTML = null; //we do empty container before add data
//   readData();
//   console.log(res);
// }
// function readData() {
//   if (!res.length) {
//     container.innerHTML = "no data";
//   }
//   res.forEach((value) => {
//     let div = document.createElement("div");
//     let btn = document.createElement("button");
//     btn.innerHTML = "delete";
//     btn.addEventListener("click", () => ondelete(value.id));
//     // if we don't write arrow function ondelete function runs
//     div.innerHTML = `${value.id}-${value.name}`;
//     div.append(btn);
//     container.append(div);
//   });
// }
// readData();
//36 -lesson
//Bubbling Event Delegation
//AddEventlistener
//addeventlistener has three paramtres first is event second is handler function thirs is options
//we see events with class
// function onclick() {
//   console.log("button clicked");
// }
// function onmouseDown() {
//   console.log("button deleted");
// }
// function onmouseup() {
//   console.log("button mouseuped");
// }
//though we have three functions we use class for addeventlistener here codes do addeventlistener's first metod
// class Events {
//   handleEvent(event) {
//     //handleEvent is as constructor metod for class
//     console.log(event);
//     switch (event.type) {
//       case "click":
//         onclick();
//         break;
//       case "mousedown":
//         onmouseDown();
//         break;
//     }
//   }
// }
// const evn = new Events();
// button.addEventListener("click", onclick);
// button.addEventListener("mouseover", onmouseDown);
// button.addEventListener("click", onmouseup);
// button.addEventListener("click", evn);
// button.addEventListener("mouseover", evn);
// button.addEventListener("click", evn);
//Bubbling
// const child = (event) => {
//   console.log(event);
// event.stopPropagation();
// we only call stopPropagation metod and clicks are stopped
// event.stopImmediatePropagation(); //reverse action for child so we click child and only work second and third child doesn't work
//   alert("max");
// };
// const parent = () => {
//   alert("max2");
// };
// const grand = () => {
//   alert("max3");
// };
//we create three inner divs and we click child div we click as three div because to inner fields we beg bubbling
//if we delete type="module" don't work onclick functions
//EventDelegation
// let table = document.querySelector(".table"),
//   target;
// table.onclick = function (event) {
//   console.log(event, target);//check here
//   if (target) {
//     //target hasn't when we don't touch element if we touch some element then it runs and provides
//     target.classList.remove("highlite"); //remove if here has highlite class some elements
//   }
//   target = event.target; //equal current or clicked element to target
//   target.classList.add("highlite"); //lately add class current or clicked element
// target?.classList.add("highlite"); //here  we write as target? so it checks target has or hasn't then runs other codes
// };
//preventDefault stops default action of element
// button.onclick = function (event) {
//   event.preventDefault();
//   alert("max");
//   return false;
// };
// function cl(event) {
//   event.preventDefault();
//   alert("hey");
// }
//37-lesson
//UI events
//mouse events
//here has many events onclick,onchane,onkeyPress,onmuoeseover,onmouseout and etc.
//Actually they are comfortable for designers
// let title = document.querySelector(".title"),
//   text = document.querySelector("#text");
// title.addEventListener("contextmenu", () => {
//   //oncontextmenu is when we click rights side of mouse
//   console.log("hey");
// });
// title.oncopy = () => {
//   //we don't get request for copy action
//   alert("copy don't request");
//   return false; //we send false for stop copy action
// };
//we try to get data from input
// const change = (event) => {
//   text.textContent = event.target.value;
//   console.log(event.target.value);
//   console.log(event.code, event.type); //KeyS keypress
// };
//when we touch enter then work JS Dom
//we change metod to onkeypress
//we change color of box
// let box = document.querySelector(".box");
// box.addEventListener("mousemove", (event) => {
//   if (event.ctrlKey && event.altKey) {
//     //when we  touch ctrl and move mouse pointer then change others
//     console.log(event.x, event.y);
//   }
//   // box.style.backgroundColor = `rgb(${event.y},${event.x},${event.y})`;
// });
//Keyboard
//we use different keyboard keys for change something
//we use keys as ShiftKey(shift),altKey,option,metakey(windows) and ctrlKey(ctrl) we use they as mouse events or both
//Keyboard actions
//we see keyboard actions through event object so we see which Key is touched
//scroll event
// let box = document.querySelector(".box");
// box.addEventListener("scroll", (event) => {
//   if (
//     event.target.scrollTop + event.target.clientHeight + 50 >
//     event.target.scrollHeight
//   ) {
//     box.textContent += box.textContent;
//   } //we create Infinity scroll
//   console.log(
//     event.target.scrollTop + event.target.clientHeight + 50, //here this value equals scrollHeight we add 50px
//     event.target.scrollHeight
//   ); //here mouse is in 375 point in scroll all scroll height is 1152
// });
let nav = document.querySelector(".nav");
window.addEventListener("scroll", (event) => {
  console.log(window.scrollY)
  if (window.scrollY >= 18) {
    nav.style.boxShadow = "19px 19px 20px 0px;";
  } else {
    nav.style.boxShadow = null;
  }
});
