import express from "express";
import fs from "node:fs";
import path from "node:path";

import { Server as SocketServer } from "socket.io";

import { createServer } from "node:http";

const filePath = path.join(import.meta.dirname, "index.html");

const app = express(); // invoking top level functions, middlewares, routings, controllers

const server = createServer(app);

const io = new SocketServer(server);

io.on("connection", (socket) => {
  console.log("a user connected");
  console.log(socket.id);

  socket.on("sendMessage", (message) => {
    console.log(message);
    // console.log("data received");
  });
});

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/form", (req, res) => {
  fs.createReadStream(filePath).pipe(res);
});

server.listen(9000, () => {
  console.log("server running");
});
