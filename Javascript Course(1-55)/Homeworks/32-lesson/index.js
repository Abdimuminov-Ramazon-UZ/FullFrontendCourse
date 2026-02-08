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
let div = document.createElement("div");
let date = new Date();
console.log(date.getHours(), date.getMinutes(), date);
