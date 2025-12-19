const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h4> this is header tag </h4>`);
    res.end();
  })
  .listen(9000);
