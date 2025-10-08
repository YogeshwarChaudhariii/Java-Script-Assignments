const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile("feedback_form.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    } else if (req.url.startsWith("/submit")) {
      const q = url.parse(req.url, true).query;
      let name = q.name;
      let feed = q.feedback;
      const entry = `${name} - ${feed}\n`;

      fs.appendFile("feedback.txt", entry, (err) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h3>Thank you for your feedback!</h3>");
      });
    }
  })
 
server.listen(3000, () => console.log("Server running at http://localhost:3000"));
