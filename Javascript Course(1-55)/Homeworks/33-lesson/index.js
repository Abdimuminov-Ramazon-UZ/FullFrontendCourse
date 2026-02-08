//UI
//Last two lessons
//Window sizes and scrolling
let div = document.createElement("div");
document.body.append(div);
div.textContent = "explmentar element";
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
console.log(parag.getBoundingClientRect());
console.log(document.body.getBoundingClientRect());
//we may see beginning points these are x and y
console.log(parag.elementFromPoint(100, 150));
//in the lesson we may see two difference appaearance these are window and document.Window is current window it uses with position:fixed. Document is all elements in the pag it uses with position:absolute. So we know about how to get coordinates and how to separate document and window coordinates
