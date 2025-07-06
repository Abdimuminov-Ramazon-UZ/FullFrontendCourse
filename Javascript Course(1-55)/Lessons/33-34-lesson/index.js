//33-lesson
//DOM entrance
//what is DOM ? DOM is document object model.we are writing codes in the {} scope as IDE.So we separate windows to three party.they are DOM,BOM and Javascript build in libraries .
//as we use JS build in libraries we use BOM and DOM
//So we know about ReactJS it is framework for frontend
// alert(window)
// console.log(window);
// console.log(document);
// window.name = "halloway";
//we have more libraries as CSSOM (CSS object model)
// console.log(location.pathname);
//we have window hiearchary so we have more buildin libraires
// let data = document.getElementsByTagName("ul")[0];
// data.border="1px solid blue"
// console.log(data.children); //we have children metod and it gets only contents HTMLCollection(4) [li, li, li, li]
// console.log(data.childNodes); //childnodes get every sign and marks even probels
//NodeList(11) [text, li, text, comment, text, li, text, li, text, li, text]
// console.log(data.parentNode); //If we need to get codes we use parentNode.then we get siblings with previousElementSibling,nexteleemntsibling and others
// console.log(data.lastElementChild);
// console.log(data.lastElementChild.previousElementSibling);
//Selectors
//we use se;lectors for get datas to JS codes
// let by = document.getElementsByTagName("body")[0];
//here has weird informaton so by type is array we ask array motds as [0] ,if there has several body selector gets all we ask it through [0],[1] and etc.
// let parent = document.getElementsByClassName("parent")[0];s
// console.log(by);
// console.log(parent);
// console.log((parent.style.color = "red"));
//we have queryselectors as alternative way
// let qr = document.querySelector("ul");
// console.log(qr);
// let qrAll = document.querySelectorAll("ul");
// console.log(qrAll);
//but queryselectorAll returns Nodelist we use queryselectors with dot and hash it means class and id
//DOM node classes
// qr.innerHTML = "<h1>Max Antony</>";
//we use HTML tags with innerhtml but we don't use its with innertext
// qr.innerText = "Logo";
// console.log((qr.innerHTML = "Max Antony"));
// console.log((qr.innerText = "Logo"));
//id becomes unique if we have tow ids so second id doesn't work
//we have hidden metod it is the same as display none at CSS
//34 - lesson
//Manipulation
//we have simple HTML objects and JS creates Dom object as
// let dom = {
//   title: "h1",
//   sibling: "no",
// };
//Attributes
//we have parent class element and we write several class names and we check it through attributes
// let parent = document.querySelector(".parent");
// console.log(parent);
// console.log(parent.getAttribute("class"));
//we get attribute name through this metod so we ask attribute name and get it's name
// console.log(parent.hasAttribute("tim"));
//we ask whether or not thus attribute and we may get true or false value
// console.log(parent.setAttribute("parent", "border"));
//we set attribute and it's name
// console.log(parent.removeAttribute("parent"));
//we remove attribute through name
// console.log(parent);
//Creating element
// let createElem = document.createElement("article");
//here we create article tag in the HTML document so we create important elements through Js document it is security method but it is hardly for write
// let txt = document.createTextNode("hey dom");
//we add data createTextNode with txt
// createElem.innerHTML = txt;
// createElem.textContent = txt;
//we add datas before or after some html elements so we use append,before,after and preappend.After and before work with elements.Append and preappend are worked with text
//Incertion Html
// createElem.append();
// parent.before(createElem);
let dom = document.querySelector(".DOM");
let adjust = document.querySelector(".adjust");
let parent = document.querySelector(".parent");
let div = document.createElement("div"); //we create divs here
let txt = document.createTextNode("lorem ipsum dol amet"); //we create here datas
// div.append(txt);
// parent.before(div);//we write before
// parent.after(div);//then after
// parent.append(div);//then append
// parent.prepend(div); //then prepend
// div = parent.cloneNode(true); //we clone parent's classname and metods
// console.log(div);
// console.log(div.getAttribute("class")); //we have parent class
//we write extra elements in parent element as div we may remove its
// div.remove();
// div.setAttribute("id", "border");
// div.getAttribute("id", "class");
//we give styles through style metods we write its with CamelCase format
// dom.style.fontSize = "40px;";
//we use some cases for cssText
// adjust.style.cssText = `
// background-color:red;
// color:blue`;
// console.log(parent.children[0].children);
// let element = parent.children[0].children;
// // console.log(length);
// for (let i = 0; i <= element.length; i++) {
//   if (i % 2) {
//     element[i].style.background = "red";
//   } else {
//     element[i].style.background = "blue";
//   }
// }
//offset are gemetrics of padding and borders
//if we have some cases we see margin,padding  and borders. they are old ways
let box = document.querySelector(".box");
console.log((box.offsetTop = "400px"));
// box.offsetTop = "400px"; its only show size doesn't change
// console.log(box.offsetTop);
// console.log(box.offsetLeft);
// console.log(box.offsetWidth);
// console.log(box.clientWidth);
//we have some big data and we fix scroll it
// console.log(box.scrollHeight);
// console.log(box.scrollWidth);
//we write expand function for change scrollheight
let btn = document.querySelector("button");
function expand() {
  if (box.clientHeight === box.scrollHeight) {
    box.style.height = "150px";
    btn.innerHTML = "show more";
  } else {
    box.style.height = `${box.scrollHeight}px`;
    btn.innerHTML = "show less";
  }
}
//classListAdd we add extra classes with classlistAdd
//we constol scrolls with scroll metod
let btnscroll = document.querySelector(".button");
function sl() {
  //   box.scroll(0, box.scrollHeight);//we install scrolls position
  //   box.scrollBy(0, 10); //10 px adds every click
  box.scrollTo(0, 50); //it doesn't move it is fixed
}
//we have main window scrolls
console.log(window.scrollX); //0 so scroll hasn't in window
console.log(box.getBoundingClientRect().x); //we have x axis position
