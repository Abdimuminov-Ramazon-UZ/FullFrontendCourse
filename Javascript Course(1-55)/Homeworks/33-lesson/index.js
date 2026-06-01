//UI
//Last two lessons
//Window sizes and scrolling
// let div = document.createElement("div");
// document.body.append(div);
// div.textContent = "explmentar element";
//Sometimes we use document.documentElement instead of document.body for historical problems so we may use window.pageXoffset alias for window.scrollX or may y arrow
// console.log(document.documentElement);
// console.log(document.documentElement.clientHeight);
// console.log(window.pageXOffset); //but it is deprecated
// console.log(window.scrollX); //so scrollX is working nowadays
// //we get absolute scroll elements from scrollBy(0,10)
// console.log(window.scrollBy(20, 50));
// const scroll = () => console.log(213);
// scroll();
//so scrollTo(0,0) backs beginning of page
//we may control scroll view as scrollIntoView() if we are near top of page we may get down some otherwise we may get top of page
//Coordinates
//Usually many Js metods get two coordinates if we don't get position:sticky which position equals fixed so it relatives general window.Thus we may scroll elemnts with position:absolute we may get first window's appearance
//we separate it look at pageY and clientY.pageY follows first of element's size second follows general window's size
//getBoundingClientReact() gets elemnt's position in the more obvious way
// console.log(parag.getBoundingClientRect());
// console.log(document.body.getBoundingClientRect());
// //we may see beginning points these are x and y
// console.log(parag.elementFromPoint(100, 150));
//in the lesson we may see two difference appaearance these are window and document.Window is current window it uses with position:fixed. Document is all elements in the pag it uses with position:absolute. So we know about how to get coordinates and how to separate document and window coordinates
//UI
//The rest of homeworks
// let data = {
//   Fish: {
//     trout: {},
//     salmon: {},
//   },

//   Tree: {
//     Huge: {
//       sequoia: {},
//       oak: {},
//     },
//     Flowering: {
//       "apple tree": {},
//       magnolia: {},
//     },
//   },
// };
// let container = document.createElement("div");
// document.body.append(container);
// function createTreeDom(obj) {
//   // if there's no children, then the call returns undefined
//   // and the <ul> won't be created
//   if (!Object.keys(obj).length) return;

//   let ul = document.createElement("ul");

//   for (let key in obj) {
//     let li = document.createElement("li");
//     li.innerHTML = key;

//     let childrenUl = createTreeDom(obj[key]);
//     if (childrenUl) {
//       li.append(childrenUl);
//     }

//     ul.append(li);
//   }

//   return ul;
// }
// function createTree(container, obj) {
//   container.append(createTreeDom(obj));
// }

// createTree(container, data);
//Create calendar

// let date = new Date();

// function createCalendar(elem, year, month) {
//   function getDate(year, month) {
//     let yearString = `${year}-${month}-01`;
//     let date = new Date(yearString);
//     let startOfIndex = date.getDay();
//     console.log(date.getFullYear(year), date.getDay());
//     return startOfIndex;
//   }
//   let WeekIndex = getDate(year, month);
//   WeekIndex === 0 ? WeekIndex + 6 : WeekIndex;
//   let table = document.createElement("table");
//   document.body.append(table);
//   table.style.border = "1px black solid";
//   table.style.borderCollapse = "collapse";
//   let days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
//   let headerRow = table.insertRow();
//   let first = table.insertRow(1);
//   let second = table.insertRow(2);
//   days.forEach((value, index) => {
//     let cell = headerRow.insertCell();
//     cell.textContent = value;
//     let number = 5;
//     if (index == number) {
//       let cell1 = first.insertCell(-1);
//       cell1.textContent = number;
//     }
//     console.log(index, value, cell, WeekIndex);
//   });
// }
// createCalendar(0, 2012, 11);
//colored clock

// let div = document.createElement("div");

// let buttonStart = document.createElement("button"),
//   buttonStop = document.createElement("button"),
//   buttons = document.createElement("div");

// buttonStart.innerText = "Start";
// buttonStop.innerText = "Stop";
// buttons.append(buttonStart, buttonStop);
// document.body.append(buttons);
// let date = new Date();
// let hour = date.getHours(),
//   minutes = date.getMinutes(),
//   seconds = date.getSeconds();
// let id = `${hour}:${minutes}:${seconds}`;
// function interval() {
//   setInterval(() => {
//     seconds++;

//     if (seconds === 60) {
//       ++minutes;
//       seconds = 0;
//     }
//     if (minutes === 60) {
//       ++hour;
//     }

//     div.innerHTML = `${hour}:${minutes}:${seconds}`;
//   }, 1000);
// }
// buttonStart.addEventListener("click", interval);
// console.log(id, interval);
// buttonStop.addEventListener("click", () => {
//   buttonStart.removeEventListener("click", interval);
//   div.innerHTML = id;
// });
// // console.log(active);
// // buttonStop.addEventListener("click", () => (active = !active));
// // console.log(active);

// document.body.append(div);
// div.style.color = "red";
//write new rows in list
// let ul = document.getElementById("ul");
// let list = document.createElement("li");
// list.innerText = 2;
// console.dir(ul);
// console.dir(ul.children[0].id);
// console.dir(list);
// console.log(ul.children[2]);
// for (let i = 0; i <= 4; i++) {
//   if (ul.children[i] === undefined) {
//     list.innerText = i;
//     ul.children[i] = list;
//   }
// }
// for (let i = 1; i <= 4; i++) {
//   console.log(i);
// }
//sort Html
let tr = document.querySelectorAll("tr");
let td = document.querySelectorAll("td");
console.log(tr[0].textContent);
console.log(td[0].textContent);
console.log(tr.length);
let arr = [];
for (let i = 1; i <= tr.length; i++) {
  arr[i] = td[i].textContent;
}
console.log(arr);
let table = document.querySelector("table");
let sortedRows = Array.from(table.tBodies[0].rows) // 1
  .sort((rowA, rowB) =>
    rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML)
  );
console.log(sortedRows);
table.tBodies[0].append(...sortedRows); // (3)
