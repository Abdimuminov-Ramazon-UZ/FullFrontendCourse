//Events
// let hOne = document.querySelector("h1");
// let btn = document.querySelector("button");
// // console.log(hOne);
// btn.addEventListener("click", (event) => {
//   hOne.style.display = "none";
//   btn.style.display = "none";
// });
// //Execise 3
// // let border = document.querySelector("border"),
// //   menu = document.querySelector("menu");
// border.addEventListener("click", (event) => {
//   console.log(event.eventPhase);
//   menu.style.display = "block";
//   setTimeout(() => {
//     menu.style.display = "none";
//   }, 2000);
// });
// console.log(btn.dataset);
// let container = document.querySelector("#container"),
//   pane = document.querySelector(".pane");
// let btn = document.querySelectorAll("button"),
//   element = document.querySelector("#element");
// btn[0].addEventListener("click", (event) => {
//   console.log(event);
//   element.style.display = "none";
// });
// container.onclick = function (event) {
//   if (event.target.className != "remove-button") return;

//   let pane = event.target.closest(".pane");
//   pane.remove();
// };
// let list = document.querySelector("#list");
// list.onclick = function (event) {
//   console.dir(event.target.children[0].children);
//   if (event.target.children[0].tagName === "UL") {
//     event.target.children[0].innerHTML = "";
//   }
// };
//tooltip
// let btns = document.querySelectorAll("button");
// let tooltip = document.querySelector("p");
// console.log(btns[0]);
// mouse.onmouseover = function (event) {
//   // console.dir(event.target);
//   console.log(event.target.dataset);
//   console.log(btns[0].nextSibling);
//   if (event.target.dataset.toltip === "short") {
//     btns[0].nextSibling.innerHTML = "<p>short</p>";
//   }
// };
//Dispatch Event
// let element = document.querySelector("#element");
// let e = new Event("click", { bubbles: true });

// element.dispatchEvent(e);
// element.addEventListener("click", (event) => {
//   console.log(event.button);
// });
// let list = document.querySelector(".list");
// console.log(list);
// list.onclick = function (event) {
//   console.log(event);
//   if (event.target.tagName === "LI") {
//     event.target.classList.toggle("selected");
//   }
// };
// let div = document.createElement("div");
// div.classList.add("divergent");
// console.log(div.style);
// document.body.append(div);
// div.onmouseout = (event) => {
//   console.log(event);
//   console.log(event.relatedTarget);
// };
//relatedTarget show element of after mouseout
//DragnDrop menus
// let div = document.createElement("div");
// document.body.append(div);
// div.innerHTML = "<h1>Return drags</h1>";
// div.classList.add("divergent");
// div.ondragable = "true";
// div.addEventListener("dragover", (event) => {
//   event.preventDefault();
//   console.log(event.clientX);
// });
// console.log(document);
// let maximize = document.querySelector("#max");
// max.classList.add("divergent");
//drag is move every element
// maximize.addEventListener("KeyZ", () => alert("Z"));
// document.addEventListener("keydown", (event) =>
//   event.code == "KeyZ" ? alert("ZZZ") : alert("metaS")
// );
//scroll's tasks
// data = new Date();
// date = [data, data, data];
// max.innerHTML = `${date}`;
// function populate() {
//   while (true) {
//     let windowRelativeBottom =
//       document.documentElement.getBoundingClientRect().bottom;
//     if (windowRelativeBottom > document.documentElement.clientHeight + 100)
//       break;
//     document.body.insertAdjacentHTML("beforeend", `<p>Date: ${new Date()}</p>`);
//   }
// }

// window.addEventListener("scroll", populate);

//   populate(); // init document
// console.log(document.documentElement.getBoundingClientRect());
// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   let size = document.documentElement.getBoundingClientRect();
//   if (size.bottom < 1900) {
//     return window.addEventListener(
//       "scroll",
//       () => (document.documentElement.getBoundingClientRect().top = 3500)
//     );
//   }
// });

// const container1 = document.getElementById("container1");
// const container2 = document.getElementById("container2");

// const dragItems = document.querySelectorAll(".drag-item");

// dragItems.forEach((item) => {
//   item.addEventListener("dragstart", handleDragStart);
//   item.addEventListener("dragend", handleDragEnd);
// });

// let draggedItem = null;

// function handleDragStart(event) {
//   draggedItem = this;

//   event.dataTransfer.setData("text/plain", this.textContent);
//   event.dataTransfer.effectAllowed = "move";

//   this.classList.add("dragging");
// }

// function handleDragEnd(event) {
//   this.classList.remove("dragging");
//   draggedItem = null;

//   document.querySelectorAll(".container").forEach((container) => {
//     container.classList.remove("drag-over");
//   });
// }

// const containers = [container1, container2];

// containers.forEach((container) => {
//   container.addEventListener("dragover", (event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = "move";
//   });

//   container.addEventListener("dragenter", (event) => {
//     event.preventDefault();
//     container.classList.add("drag-over");
//   });

//   container.addEventListener("dragleave", (event) => {
//     container.classList.remove("drag-over");
//   });

//   container.addEventListener("drop", handleDrop);
// });

function handleDrop(event) {
  event.preventDefault();

  const targetContainer = event.currentTarget;

  if (!draggedItem) return;

  const originalContainer = draggedItem.parentElement;

  if (originalContainer === targetContainer) {
    return;
  }

  targetContainer.appendChild(draggedItem);

  console.log(
    `Element ko'chirildi: ${draggedItem.textContent} → ${targetContainer.id}`
  );

  targetContainer.classList.remove("drag-over");
}

//scroll-button
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log("click");
  console.log(document.documentElement.getBoundingClientRect());
  console.log(window.screenY);

  window.scrollTo({ top: 0, behavior: "smooth" });
});
