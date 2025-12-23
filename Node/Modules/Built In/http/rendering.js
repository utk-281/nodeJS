const http = require("http");
const fs = require("fs");
// import fs from "fs"

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      fs.createReadStream("./pages/index.html", "utf-8").pipe(res);
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

//! the old SSR ==> template engines
//? --> about page (html, css, js) --> the rendered page will displayed on the UI

//! CSR --> react
//? about --> server (index.html (empty, only div tag), script tag --> bundle)
//! seo, initial slow loading

//! ssr using nextJS -->
//? about --> about component --> about.html, the bundle related to about page
