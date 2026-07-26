//Third book
//Popups
function call() {
  let max = prompt("how to copy ?", "true");
  console.log(max);
  if (max) window.open("https://javascript.info");
}
// call();
let btn = document.createElement("button");
let root = document.querySelector("#root");
root.append(btn);
btn.style =
  "width:fit;height:24px;background-color:white;margin:16px;border-radius:8px";
btn.textContent = "button";
btn.onclick = () => {
  window.open("https://javascript.info");
};
//we use popups we may close,open,blur and focused several elements
//but they are restricted because more ads maybe posissioned your tabs
let iFrame = document.querySelector("#iframe");
iFrame.onload = function () {
  let iFrameWindow = iFrame.contentWindow;
  // iFrameWindow.postMessage(
  //   "<h1>Return your page we may call sub domains </h1>",
  //   "./same-origin.html"
  // );

  console.log(iFrameWindow);
};
//we may get contentWindow and contentDocument from iframe as window and document objects
//same origin is policy we may be enter site.com and site.com/max we don't enter other site.org or site.org/max we don't try to avoid same origin policy
//we use postMessage changing data for restircted domains
window.addEventListener("message", function (event) {
  //reliable source lists
  let allowed = ["https://myapp.com", "https://admin.myapp.com"];

  if (!allowed.includes(event.origin)) {
    return; // stranger - don't allowed
  }

  // only here messages are confident
  handleMessage(event.data);
});
//array-buffer
//when we use binary datas we create array-buffer
//But array-buffer isn't array it is storage and it saves only byte collections we don't call elements as buffer[0]
let buffer = new ArrayBuffer(16);
console.log(buffer);
let view8 = new Uint8Array(buffer);
console.log(view8);
//buffer is more compatible constructor we give different type memory types and it creates asked memory space
let asint = new Uint32Array(buffer);
buffer[0] = 1122;
console.log(asint);
//we don't use pop,shift,unshift and slice because we don't change positioned of array elements
let dataV = new DataView(buffer);
console.log(dataV);
//we chose our format for every array element we use set and get metodes
let euro = new Uint8Array([226, 130, 172]);
console.log(new TextDecoder().decode(euro));
//textCoder use for fetch and header datas we use it when we must write UTF-8 codes it works only from UTF-8 to Uint8Array or reverse coding
//blob is more compatible for every code saves as image and png files
let blob = new Blob(["hi", "memory"], { type: "text/plain" });
console.log(blob);
let reader = new FileReader();
console.log(reader);
console.log(reader.result);
//when we use it we get datas from server or local computer service we read datas from filereader so we chose MIME type
//we use readAsText, readAsDataUrl metods  for read several datas