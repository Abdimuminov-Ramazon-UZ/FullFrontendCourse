//38-lesson
//we have form element for comfortable work with backend
//Form
// let bunkerForm = document.forms.bunkerForm;
// let login = document.querySelector(".login");
// console.log(bunkerForm);
// console.log(bunkerForm.elements.login); //we get elements with array elements or elements' name
// console.log(bunkerForm.elements[0]);
// console.log(bunkerForm.login);
//select
// console.log(bunkerForm.select.options);
// bunkerForm.select.options.value = "KR";
// bunkerForm.select.options[1] = "eng";
// select.selectedIndex = 1;
//onblur we write in the some case and when we move other case this means blur
// console.log((bunkerForm.select.selectedIndex = 1));

// login.onblur = (event) => {
//   console.log("test", event.target);
//   if (event.target.value.includes("@")) {
//     loginError.innerHTML = null;
//   } else {
//     loginError.innerHTML = "hey";
//     loginError.style.color = "red";
//   }
// };
// login.onkeypress = (event) => {
//   //when we write again error hides
//   console.log(event);
//   loginError.innerHTML = null;
// };
// login.onfocus = () => {
//   //he works as onkeypress when we enter in input element it hides error
//   loginError.innerHTML = null;
// };
//submit form
// console.log(bunkerForm.submit); //we see submit but we ask form.action we may see link of backend
// console.log(bunkerForm.action);
// //we see select's value
// console.log(bunkerForm.select.value);
// bunkerForm.action = "https://jsonplaceholder.typicode.com/todos";
// bunkerForm.onsubmit = () => {
//   console.log(bunkerForm.select.value);
//   bunkerForm.action = `https://jsonplaceholder.typicode.com/todos/${bunkerForm.select.value}`;
//bunkerForm.metod="PUT"
// };
//we have   default form metod  GET so it works as backend metod
//39-lesson
//select and range
//when we some elements and we select its on the window
let data = document.querySelectorAll("#data"); //we get element
// let range = new Range(); //we create range
// range.setStart(data.firstChild, 1); //we mark start element
// console.log(data);
// range.setStart(data[0].firstChild, 0); //we may use range with elements so we give data[0] to first parametr and for second parametr we give order number of element so we gave 0 or first element from third element as array element
// range.setEnd(data[0].firstChild, 6);
// range.setEnd(data[2].firstChild, 6); //data[2] is as third h1 second parametr is elements and we add first child for third elemet's order elements
//data[2] is as third h1 second parametr is elements and we add first child for third elemet's order elements
// range.setEnd(data.firstChild, 5); //we mark ended element
// window.getSelection().addRange(range); //we add infos to window
// button.onclick = () => {
//   range.deleteContents(); //we have delete functions that we remove selected elements
// };
// let dv = document.createElement("div");
// dv.innerHTML = range.extractContents().textContent;

// console.log(dv);
// let select = document.querySelector(".select");
// button.onclick = () => {
//   //   let txt = range.extractContents(); //we may get selected elements
//   //   select.innerHTML += txt.textContent;
//   //   let span = document.createElement("span");
//   //   span.innerText = "new value";
//   //   range.insertNode(span); //we may add elements before selected values
//   let em = document.createElement("em");
//   em.style.color = "pink";
//   range.surroundContents(em); //we change selected elements as em
// };
// let em = document.createElement("em");
// em.style.color = "pink";
// let txt = data[0].innerText; //we get first value of data and set on input
// let inp = document.querySelector(".text");
// inp.oninput = (e) => {
//   data[0].innerText = txt;
//   let length = e.target.value?.length;
//   range.setStart(data[0].firstChild, 0);
//   range.setEnd(data[0].firstChild, length);
//   range.surroundContents(em);
// };

const selection = getSelection(); //we have select metods but it is inheritance for range we ue rang for use select when we select elements in windows we select only an element
console.log(selection);
console.log((selection.anchorNode = 5));
document.onselectionchange = () => {
  console.log(selection.getRangeAt(0).cloneContents().textContent); //we get selected elements through this metod
};
