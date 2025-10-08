const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("students.json", (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Error reading file");
    } 
    else {
      const students = JSON.parse(data);
      res.writeHead(200, { "Content-Type": "text/html" });
      
      res.write("<h3>Student List</h3><ul>");

      for(let s of students){
        res.write(`<li>${s.name}</li>`);
      }
    //   students.forEach((s) => res.write(`<li>${s.name}</li>`));
      res.end("</ul>");
    }
  });
});
server.listen(3000, () =>
  console.log("Server running at http://localhost:3000")
);
