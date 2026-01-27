//31-lesson
//UI
//when we use web browser so we use events as DOM and other build in libraries they are hiding from machine
// let adimn = { named: "Anna" };
// let user = new WeakRef(adimn);
// adimn = null;
// if (user) {
//   console.log(user, adimn);
// }
//we have global object is window we separate it to main blocks which are BOM,DOM and built in library
// console.log(document.childNodes[1])
// console.log(document.documentElement)
// for(let i=0;i<document.body.childNodes.length;i++){
// 	console.log(document.body.childNodes[i])
// }
// let arr=Array.from(document.body.childNodes)
// console.log(arr)
// console.log("array")
// for(let i in document.body.childNodes) console.log(i)
// console.log(table.rows);
//every Dom element is node if we create div and write some text here so div node element text is text node element
//Dom elements  give to us purpose read-only we don't get change and remove it because machine gets recovery they automatic
// Tables are mre difficult other nodes as elements
//we have siblings,parents,children and other reference ways as call or change its more commons are childNode and preventSiblings
//so we solve several tasks in HTML document
// console.log(elem.lastChild.nextSibling);
// console.log(elem.children[0].previousSibling)

// console.log(tables.rows[0].cells[1]);
// console.log(tables.rows.length);
// for (let i = 0; tables.rows.length >= i; i++) {
//   let td = tables.rows[i].cells[i];
//   td.style.background = "red";
// }
//Searching elements getElement querySelector
// we have several ways of get elements as variable for javascript codes.
//we use id when we create element with id and it is unique and as variable in js codes
// let text = document.getElementsByName();
// item.style.background = "green";
//querySelectorAll get all div elements
// let text = document.querySelectorAll("div");
// console.log(text);
// let number = document.querySelector(".numbers");
// console.log(number);
//we have any getters as matches,ancestors,closest but they aren't common
//we have get elements with tagname,classname
// let textur = document.getElementsByTagName("div");
// console.log(textur);
//it works as querySelectorAll
//Exercise 1
// let ageTable = document.getElementById("age-table");
// console.log(ageTable);
// let allLabel = document.querySelectorAll("label");
// console.log(allLabel);
// let firsttd = ageTable.rows[0].cells[0].textContent;
// console.log(firsttd);
// let formName = document.getElementsByName("search");
// console.log(formName);
// let allInputs = document.querySelectorAll("input");
// console.log(allInputs);
// console.log(allInputs[0]);
// console.log(allInputs[allInputs.length - 1]);
//node types
//we have two checkers as nodeName and tagName.nodeType is more common and it defines every node as comments
// console.log(document.body.firstChild.nodeType);
// console.log(document.body.firstChild.nodeName);
// console.log(document.body.tagName);
//we have two console metods as console.dir and console.log first returns body as object second returns as element logs
// console.dir(document.body);
// console.log(document.body);
//InnerHtml
// document.body.innerHTML = "body";
//If we don't write += we lose previously elements
// document.body.innerHTML += "The body is full with comments";
// let item = document.querySelectorAll("div");
// item.outerHTML = "<h6>wow it's Html</h6>";
//here if we don't remove outerHtml code textcontent doesn't work because outerHtml remove div as item class and replace with h6 element when we call .item element it not found
// item[0].textContent = "Martians are strangers";
//we may add hidden property every element and we change it to true and it may visible
// console.log(item);
// item[1].hidden = false;
// let li = document.querySelectorAll("li");
// console.log(li);
// for (let item of li) {
//   // console.log(li[item]);
//   let title = item.firstChild.data;
//   title = title.trim();
//   let count = item.getElementsByTagName("li").length;
//   // console.log(item.firstChild.data);
//   console.log(title + ":" + count);
// }
// console.log(window)
//Attributes
//here has two hesitates attribute and Dom propety when we use DOM property so we don't change some elements as checked box but we use attribute medots we change everything this condition separates with metods
// let item = document.querySelector(".item");
// console.log(item.getAttribute("value"));
// item.setAttribute("anchor", "HTMLXML");
//we set attribute and it's value
//then remove any attribute
// item.removeAttribute("value");
// console.dir(item);
// console.log(item.getAttribute("anchor"));
//attributes which we create and add they are placed in attributes property
// console.log(item.attributes);
//we have some non-standart way which is data- reserved attributes old programmers created it for useful every HTML code.we create data-sth-sth attribute and it visibles in dataset property as sthSth and we give any string values
// console.log(data);
// console.log(data.dataset);
// data.dataset.orderSet = "canselled";
//we change it as Dom property
// console.log(data.dataset);
//Modifying the document
//we create DOM elements as JS variables
// let div = document.createElement("div");
// div.className = "alert";
// div.innerHTML = "<strong>we read red alert<strong/>";
// //and texts
// let text = document.createTextNode("here I am");
//we create here element but we don't see it because it doesn't provide in Html document so we add it in HTML document
// document.body.append(div);
//here has several add metods
//append adds at the end of body elements
//prepend adds first
//before adds previously given element
//after adds afterwards given element
//replaceWith changes it with given elements
//but we have several another elements as insertAdjacentHTMl/Text/Element
// let item = document.querySelector(".item");
// console.log(item);

// item.insertAdjacentHTML("beforebegin", "<h1>element</h1>");
//we have remove metod as remove()
// div.remove();
//we have clone metod and if we give false to it metod doesn't copy childs
// let item2 = item.cloneNode(false);
// console.log(item2);
//DocumentFragment is collected elements and it is variable as we create with it
// let fragment = new DocumentFragment();
// console.log(fragment);
//document.write is old metods we don't use it nowadays
// let item = document.querySelector(".item");
// console.log(item);
// let text = "text";
// item.append(document.createTextNode("text"));
// // item.innerHTML = text;
// item.textContent = text;
//Styles
// we create element
let div = document.createElement("div");
//and special attribute of class and we add name class list
div.textContent = "max hero";
document.body.append(div);
div.classList.add("article");
// we may read it
console.log(div.className);
div.classList.toggle("supernames");
// if we get the same  name metod of toggle doesn't add it
div.classList.toggle("article");
console.log(div.className);
div.style.backgroundColor = "red";
//we may use metod of removeProperty for remove style metods
div.style.removeProperty("backgroundColor");
//we don't use div.style as object we use instead of cssText\
//But it removes all old styles
div.style.cssText = "color:yellow;width:200px;";
//sometimes we need to get old styles as computedStyles
// console.log(getComputedStyle(div));
let obj = getComputedStyle(div);
// console.log(obj.margin);
//style value units separate two ways as resolved and computed first we get 1em as per display's width,second way is which we install obvious sizes such 125 px
//:visited styles are hiding even getcomputedStyle
let notification = document.createElement("div");

let style = {
  top: 10,
  right: 10,
  html: "hello",
  className: "welcome",
};
function showNot(obj) {
  notification.textContent = obj.html;
  notification.style.color = "red";
  notification.style.top = obj.top;
  notification.style.right = obj.right;
  notification.classList.add(obj.className);
  return document.body.append(notification);
}
showNot(style);
setTimeout(() => notification.remove("notification"), 1500);
//Element size and scrolling
//when we use element on display some styles give it as computedstyle
//when we use width,scroll,padding,margin so we separate its their summary value is offsetwidth,such height's summary is offsetHeight
console.log(document.body.offsetParent);
//we use clientWidht and clientHeight for only content
//we may use scrollwidh for content of scroll so when we create element and it may be scrolled so current clientwitdh+scroll is scrollwidth thus is inner Width we don't see all scrollHeight.scrollHeight returns all height which is full of content
console.log(paragraph);
//Exercise 1
console.log(paragraph.scrollTop);
console.log(paragraph.scrollBottom);
//it may be not visibled
let scrollBottom =
  paragraph.scrollHeight - paragraph.scrollTop - paragraph.clientHeight;
console.log(scrollBottom);
//Exercise 2
