const http = require("http");
const fs = require("fs");
// import fs from "fs"

http
  .createServer((req, res) => {
    if (req.url === "/txt") {
      res.writeHead(200, { "content-type": "text/plain" });
      let data = fs.createReadStream("./sample.txt", "utf-8");
      data.pipe(res);
    } else if (req.url === "/css") {
      res.writeHead(200, { "content-type": "text/css" });
      fs.createReadStream("./pages/style.css", "utf-8").pipe(res);
    } else {
      res.end("404 page not found");
    }
  })
  .listen(9000, (err) => {
    if (err) console.log(err);
    console.log("server running");
  });
