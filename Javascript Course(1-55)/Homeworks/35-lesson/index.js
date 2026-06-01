//Forms
// console.log(document.forms[0]);
// let experiment = document.querySelector("#experiment");
// console.dir(experiment[0].elements);
// console.log(experiment.age);
// // so we may call input's or elements with it's name
// let inp = experiment.login;
// console.log(inp);
// inp.name = "password";
// console.log(inp);
// let textarea = document.querySelector("#comment");
// textarea.value = "max";
//we may create textarea for texts and comments
// let selection = document.querySelector("#selection");
// // console.log(selection.options, selection.selectedIndex);
// // selection.selectedIndex = 2;
// let option = new Option("2", 2, true, true);
// //we have new Option constructor to create new option
// selection.options.add(option);
// let arr = Array.from(selection.options);
// arr.map((item) =>
//   item.selected
//     ? (item.style.backgroundColor = "blue")
//     : (item.style.backgroundColor = "red")
// );
// console.log(selection.options, selection.selectedIndex);
// let error = document.querySelector("#error");
// let login = document.querySelector("#login");
// login.onblur = () => {
//   if (login.value.includes("@")) {
//     login.classList.add("divergent");
//   }
// };
// login.onfocus = () => {
//   if (login.classList.contains("divergent")) {
//     login.classList.remove("divergent");
//     error.innerHTML = "";
//   }
// };
//we must get :focus css attribute for tabindex html attribute so we give order to li eleemnts
// let textplain = document.querySelector("#textsplain");
// console.log(textplain);
// textplain.onfocus = function (event) {
//   if (textplain.value) {
//     textplain.value = event.target.value;
//   } else {
//     textplain.value = textplain.placeholder;
//   }
// };
let result = document.querySelector("#result"),
  text = document.querySelector("#txt");
text.oninput = () => {
  result.innerHTML = text.value;
};
//we have enter or submit button for submit if we give submit to another input internal form we fix return false to onsubmit metod if we write other codes in JavaScript codes sowe use submit() metod
console.log(typeof document.readyState);
//we have readyState for every step of loaded and created elements of code in JS
