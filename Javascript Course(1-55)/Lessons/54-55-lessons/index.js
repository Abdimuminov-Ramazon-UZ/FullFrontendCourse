//54-55-lesson
//IndexedDB
//we have particular database in browser
//indexedDB is more powerful than LocalStorage
let request = window.indexedDB.open("webbrain", 1);
//now we open database which name is webbrain
// console.log(request);
let db = null;
// let db;
//we add status for db
request.onsuccess = (event) => {
  db = event.target.result;
  console.log("succesfully", db);
  drawData();
};
console.log(db);
//we open succesfully database
// request.onerror = (event) => {
//   console.log("failed", event);
// };
//if machine return error return failed
//when we upgrade data for upgrade db
const drawData = () => {
  console.log("delete");
  list.innerHTML = null;
  let tr = db.transaction("frontend", "readonly");
  let users = tr.objectStore("frontend");

  let range = IDBKeyRange.lowerBound(10, true); //we get datas from 0 to 10 so 10's data
  let strange = IDBKeyRange.bound(1, 5, true, true);
  //we fix min max range and its get with validation true and true
  let only = IDBKeyRange.only(7);
  let data = users.getAll(strange); //we get ranges here for sort metods
  //we put validation for draw elements
  let ix = users.index("IndexName").getAll(range); //we must enter given name not variable name
  let grade = users.index("IndexNumber").getAll(only);
  ix.onsuccess = () => {
    console.log(ix.result); //we get datas from indexname section of frontend database
  };
  grade.onsuccess = () => {
    console.log(grade.result, "garde"); //we get datas from indexname section of frontend database
  };
  //we use it for sort metods
  data.onsuccess = () => {
    console.log(data.result, "data"); //data sorts auto by indexname
    data.result.forEach((element) => {
      let div = document.createElement("div");
      div.innerHTML = `<h1>${element.id} - ${element.name} <button onclick="del(${element.id})">delete</button></h1>`;
      list.append(div);
    });
  };
};
// drawData();
//we write drawdata() function when it draws datas then changes
request.onupgradeneeded = (event) => {
  db = request.result; //we install db here because this function works before onsuccess
  console.log("upgraded", event);
  //request.version checks version db
  // console.log(request.version, event.newVersion);
  // let store = db.createObjectStore("frontend", {
  // keyPath: "id", //we sort datas with keyPath so we sort datas with id informations
  // });
  // db.deleteObjectStore("frontend");
  if (!db.objectStoreNames.contains("frontend")) {
    //we add condition for check frontend section  avialble or not avialble
    let store = db.createObjectStore("frontend", {
      keyPath: "id", //we sort datas with keyPath so we sort datas with id informations
    });
    let IndexName = store.createIndex("IndexName", "name", { unique: true });
    let IndexNumber = store.createIndex("IndexNumber", "grade", {
      unique: true,
    });
    //we add sort system which is ordered with keypath
    store.onsuccess = () => {
      console.log("created db");
    };

    //we add search and sort system for store
  } //we add section to db
  // else {
  //   db.deleteObjectStore("frontend");
  // }
  //if we chnge version then machine returns error which the same name returns as webbrain
};
//when we change version then upgrade worked
//we get some datas from event.target.result
//we add data to db
// indexedDB works as promises thus asynchron so we use try catch and other promise metods
//Transaction
//we work transaction with metods
let i = 4;
create.onclick = () => {
  i++;
  let user = {
    id: i, //if ids is the same so don't add this data
    name: login.value,
    surname: surname.value,
    grade: age.value,
  };
  let trans = db.transaction("frontend", "readwrite");
  //transaction has two metods first is db name second is metod
  let users = trans.objectStore("frontend");
  //we have post,get,delete,put
  // users.add(user); //we add datato frontend section
  // users.delete();
  // users.get(); return as data simple element
  // users.getAll();//return datas with as array
  let addEvent = users.add(user);
  addEvent.onsuccess = () => {
    console.log("user created");
    drawData();
    login.value = "";
    surname.value = "";
    age.value = "";
  };

  let res = users.getAll();
  res.onsuccess = () => {
    console.log(user);
    res.result.forEach((element) => {
      let div = document.createElement("div");
      div.innerHTML = `<h1>${element.id} - ${element.name} <button onclick="del(${element.id})">delete</button></h1>`;
      list.append(div);
    });
  };
};
console.log(db);
function del(id) {
  let tr = db.transaction("frontend", "readwrite");
  let user = tr.objectStore("frontend");
  // let users = user.getAll();
  user.delete(id);
  // drawData();
  console.log(id);
}
update.onclick = () => {
  //we update seventh id data
  let tr = db.transaction("frontend", "readwrite");
  let user = tr.objectStore("frontend");
  let up = user.put({
    id: 7, //we exactly need to give id
    name: login.value,
  });
  up.onsuccess = () => {
    drawData();
    login.value = "";
  };
};
//so we work with some storages and databases we step by step learn with expert level we may use they for lightweight works with projects
