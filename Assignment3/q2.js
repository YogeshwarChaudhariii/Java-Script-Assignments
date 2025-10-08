const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/form") {
    fs.readFile("form.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
      // res.end()F
    });
  } else if (req.url.startsWith("/submit")) {
    const q = url.parse(req.url, true).query;
    console.log(q);

    const upperName = q.username.toUpperCase();

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`Hello ${upperName}`);
  }
});

server.listen(3000, () =>
  console.log("Server running at http://localhost:3000")
);
