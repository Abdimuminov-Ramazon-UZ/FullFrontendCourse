//41-lesson
//Event loop and loads
//In Javascript engine has several steps.In the beginning we have micro and macro tastks queue. macrotasks is action connects other action or wait other action's answer microtask doesn't wait other tasks so first performs microtasks then they are fallen in the Event loop. Event loop is Infinity loop which is waited events as micro or macrotastks from queue here Tasks are executed then they fall in the Call stack .So First microtasks are executed then macrotasks are followed
//we have DOM tree so first machine reads document object then it reads HTML elements  that is meta and body tags
// test.innerText = "Lorem";
// document.addEventListener("DOMContentLoaded", () => {
//   //   test.innerText = "Lorem"; //Lorem appears on window
//   console.log(performance.now()); //action time is 69 ms
// });
// //this way is simple and useful for DOM elements
// //other alternative way
// window.onload = () => {
//   //   test.innerText = "Lorem";
//   console.log(performance.now());
//   //action time is 110 ms
// };
//but here has problem so we wait all load actions they may be images,videos and other heavy elements
//async,defer, no async and no defer
//we may add attribute to script tag as async or defer.If we don't enter nothing it first HTML parsed from browser then download js and execute js it is named waiting then again parse HTML.If we enter defer forst browser download all things as images and other heavy elements then execute all things or codes
//If we enter DOMcontentload that is as async for script tag no real async is first parse HTML and download js then execute js or codes then parsing HTML again
//beforeunload when we exit other window browser ask alert from users but it doesn't work with addEventlistener
// window.onbeforeunload = () => {
//   return true;
// };
// window.onunload = () => {
//   return true;
// };
//Mutation Observer waits some DOM element's change part
// let parent = document.querySelector("#parent");
// let btn = document.querySelector(".btn");
// let obs = new MutationObserver(() => {
//   console.log("working");
// });
//we create MutatuonObserver element and mark it's project
// obs.observe(parent, {
//   //when we enter parent element only this element change then mutatiuon works
//   childList: true,
//   character: true,
//   subtree: true, //suntree config only works content HTML elements as div so all elements change in div or others
// });
//we add configs for MutationObserver
// parent.innerHTML = "new data";
// btn.onclick = () => {
//   parent.innerHTML = "new data";
//   parent.classList.add("title");
// };

//42-lesson
//Clickjank attack
//when we create different elements in page some iframe tags get hidden clicks. It may be dangerous for users and sites. when we click some element may be clicked other data
//we check attacks from console
//same origin policy has rules so when browser get data any url same origin policy doesn't allow working  other urls
//it demands to work only this URL
//we  enter some stranger iframe tags from some site X-frame options turn on they are deny,allowfrom and same origin policy
// const getData = (e) => {
//   console.log(this.location); //we may get important datas from 0 opacity elements
// };
//43-lesson
//ArrayBuffer,Blob
//we work with binary datas with arrayBuffer and typeArray and others
//we have some data as character
// let data = "h";
// console.log(data.charCodeAt()); //104 position is in the ASCII table
//Arraybuffer is difficult for modern projects it gives more time
let buffer = new ArrayBuffer(2); //we create new arraybuffer buffer occupies some memory from memory but it is less memory space from simple variable and we enter number system for parametr
//we have second constructor View for see buffer
let view = new DataView(buffer); //we enter important data
view.setInt8(0, 104); //we set data to view it is first//index,data are parametres
view.setInt8(1, 105); //it is second
view.getInt8(0);
console.log(view);
console.log(view.getInt8(1)); //as we see or get
//we see Ascii table datas
console.log(String.fromCharCode(view.getInt8(1))); //i we translate AscII to string
//Arraybuffer isn't as original array only names the same
//we have other different constructors for create binary datas
let unit = new Uint8Array([104, 105]); //it is simple way for set datas to arraybuffer
console.log(unit.buffer); //they are built on arraybuffer
//we have decoders for translates
let decoder = new TextDecoder();
console.log(decoder.decode(unit)); //hi binary to numeral
//we have reverse constructor encoder
let encoder = new TextEncoder();
console.log(encoder.encode("buffer")); // it creates Uint8Array(6) [98, 117, 102, 102, 101, 114, buffer: ArrayBuffer(6), byteLength: 6, byteOffset: 0, length: 6, Symbol(Symbol.toStringTag): 'Uint8Array'] so numeral to binary
//when we have small site but user demands more spedd form site we use arraybuffer for speed
//Blob
//we use blob(Binary large object) for create files or urls
let image = document.querySelector(".image");
fetch(
  "https://media.licdn.com/dms/image/v2/C4E0BAQG7ELYE8b6rCA/company-logo_200_200/company-logo_200_200/0/1657228613628/webbrain_academy_logo?e=2147483647&v=beta&t=izNKMnct6BVR2KpBQmq581cHIBSICWxyZvNtaf6Pqnk"
)
  .then((res) => res.blob())
  .then((res) => {
    let url = URL.createObjectURL(res); //we create preview files
    image.src = url;
    console.log(res.size);
  }); //8801
//we create blob
let blob = new Blob([buffer], { type: "text/plain" });
//we create text file for downloadable
console.log(blob);
// btn.onclick = () => {
//   let a = document.createElement("a");
//   let url = URL.createObjectURL(blob); //we create text file's url
//   console.log(url);
//   a.href = url; //we set url to a's href
//   a.download = "txt"; //we mark file's type
//   document.body.append(a); //we append elemnts to document
//   a.click(); //we add auto click for a element
// };
//if backend part send Url we don't create blob
//blob's mean is URL's object which we create wit URL.createObject()
// fileX.onchange = (e) => {
//   console.log(e.target.value); //path
//   console.log(e.target.files[0]); //element
//   let url = URL.createObjectURL(e.target.files[0]); //we create blob file
//   console.log(url);
//   image.src = url;
// };
//44-lesson
//Filereader
//when we have files for downloading or sending we must see it so we use filereader
// let reader = new FileReader(); // here hasn't parametr
// fileX.onchange = (e) => {
//   let file = e.target.files[0];
//   reader.readAsText(file); //we read files as text
//   //reader wait load and it gets some time
//   reader.onload = () => {
//     console.log(reader.result);
//   };
//   reader.error = (error) => {
//     console.log(error);
//   }; //we may see errors
// };
let file = new File(["hello network"], "file.txt", { type: "text/plain" }); //we have File constructor for create and download file but it downloads file and don't watch console
//we enter data then we enter it's name then we enter type
btn.onclick = () => {
  let a = document.createElement("a");
  let url = URL.createObjectURL(file);

  a.href = url;
  a.download = file.name;

  document.body.append(a);
  a.click();
};
