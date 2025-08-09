//45-lesson
//FETCH
//we have several names which are url,link,ssilka,endpoint and otherts they are fetch
//Our metods are GET,put/patch,delete,Post
//we use then ,promise,async await,try catch.Usually all projects use then with fetch
//fetch has two parametrfirst is link or url's name which is data.It is string data.second parametr is configuration of action
//fetch return promise
//we have network part in browser. url's last name comes here
// fetch(url, config);
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//     res = res + res;
//   }) //we can write Infinity then and we catch errors with try catch
//   .catch((err) => {
//     console.log(err, "second");
//   });
// let response = fetch("https://jsonplaceholder.typicode.com/users");
// response.then((res) => res.json());
// console.log(response);
//we use promise and we get promise as response then we use then
//now we use async await
// const getData = async () => {
//   //we mark async function
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await res.json(); //we mark await fucntions or actions
//   console.log(data);
// };
// const getData = () => {
//   dataList.innerText = "loading ...";
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((res) => {
//       dataList.innerText = "All data";
//       console.log(res);
//       res.forEach((element) => {
//         let div = document.createElement("div");
//         // div.innerHTML = element.name; //innerHtml is dangerous for codes because it is open source and easy codes
//         // div.style.display = "flex";
//         div.style = "width:400px;height:24px;  ";
//         div.innerHTML = ` <b>${element.id}</b> - ${element.name}<button onclick="onSelect(${element.id})">Select</button>`;
//         dataList.append(div);
//       });
//     });
//   // dataList.innnerText = "ending...";
// }; //we face here pending and we give data about pending to user
//we use swagger for work with API
// const onSelect = (id) => {
//   console.log(id);
//   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then((res) => res.json())
//     .then((res) => {
//       let div = document.createElement("div");
//       div.innerHTML = `${res.phone}  ${res.name}`;
//       single.append(div);
//     });
// };
//Fetch 2
//we have second parmetr of fetch
// async function onSelect(id) {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "GET", //default metod is GET
//     headers: {
//       "Content-Type": "apllication/json", //we add sending element's type
//       Authorization: "Bearer",
//     },
//     body: JSON.stringify({
//       email: "webbrain",
//       password: "12345",
//     }), //if we send data to backend we use body forever json stringify and it appears network => payload section on browser
//   }).then(res);
// }
// if we have 200 status so it is good
//we use swaggers for description API
//we have authifencation token in Api for every authoirizaton  keys
// let login12 = document.querySelector("#login12");
// const login = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST", //we crreate elements with post element
//     body: JSON.stringify({
//       email: login12.value,
//       password: password.value,
//       title: "bar", //we send new element as elements
//       userId: 1,
//     }),
//     headers: {
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// };
//fetch metods GET is getting data POSt is creaturing new data PAtch and PUT is update DELETE is rempoving element
//FETCH 3
//formdata and work work with metods
//when we must create login and password form we use form data
// fetch("./example.txt")
//   .then((res) => res.arrayBuffer()) //we call blob and text for read
//   .then((res) => console.log(res));
//we may give type as text json blob formData arrayBuffer

//FormData
FormEvent.onsubmit = (e) => {
  e.preventDefault();
  // fetch("https://jsonplaceholder.typicode.com/posts", {
  //   headers: { "Content-Type": "multipart/formdata" },
  //   method: "POST",
  //   body: new FormData(FormEvent), //we enter data form data
  // })
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));
  // let body = new FormData(FormEvent);
  // let imgURL = URL.createObjectURL(file.files[0]);

  // body.append("userImg", imgURL);//use URL it's uncomfortable because file created on local ports
  //we use has() method for check elements
  fetch("https://httpbin.org/post", {
    //we add fake swagger site to work
    method: "POST",
    // body: form, //we write form fow body but we may write as body form name
    // body, //we use form names for body
    body: JSON.stringify({
      title: title.value,
      body: body.value,
      id: id.value,
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};
let elements = document.querySelector("#element");
const getData = () => {
  fetch("https:httpbin.org/get")
    .then((res) => res.json())
    .then((res) => {
      let arr = Object.keys(res);
      console.log(res, arr);
      arr.forEach((element, index) => {
        console.log(element);
        let dv = document.createElement("div");
        dv.innerHTML = `<h1>${
          index + 1
        } - ${element}</h1>  <button>select</button>`;
        elements.append(dv);
      });
    });
};
let token = null;
const getSingle = () => {
  //we get bearer authorization token
  fetch("https:httpbin.org/bearer", {
    headers: {
      Authorization: `Bearer ${token}`, //we use bearer for get token token is special key fro every user we use token here for enter with login
    },
  })
    .then((res) => res.json())
    .then((res) => {
      let arr = Object.keys(res);
      console.log(res, arr);
      arr.forEach((element, index) => {
        console.log(element);
        let dv = document.createElement("div");
        dv.innerHTML = `<h1>${
          index + 1
        } - ${element}</h1>  <button>select</button>`;
        elements.append(dv);
      });
    });
};
