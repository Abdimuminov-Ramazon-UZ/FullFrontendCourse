// const WebSocket = require("ws");

// let ws = new WebSocket.Server({ port: 5500 });

// ws.on("connection", (w, req) => {
//   console.log("New clinet connected");

//   w.on("close", (w) => {
//     console.log("New cline disconnected");
//   });

//   w.onmessage = (e) => {
//     ws.clients.forEach((client) => {
//       client.send(e.data);
//     });
//   };
// });
// const socket = new WebSocket("ws://localhost:8080");

// // Connection opened
// socket.addEventListener("open", (event) => {
//   socket.send("Hello Server!");

// });
// console.log(socket)
//we create server js and write with express

const express = require("express");
let app = express();
app.listen(8080, () => {
  //we use express listen metod for connect backend server
  console.log("backensd");
});
app.use("/users", (req, res) => {
  //we create API for use frontend
  res.json({
    name: "webrrain",
  });
});
//we install cors for safety
