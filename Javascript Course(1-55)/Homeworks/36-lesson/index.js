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
