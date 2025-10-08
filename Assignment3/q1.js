const http = require("http");
const circle = require("./circle");
const datetime = require("./dateTime");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const radius = 5;

  res.write(`<h3>Circle radius: ${radius}</h3>`);
  res.write(`Area: ${circle.area(radius)}<br>`);
  res.write(`Circumference: ${circle.circumference(radius)}<br>`);
  res.write(`Current Date & Time: ${datetime.getDateTime()}`);

  res.end();
});

server.listen(3000, () =>
  console.log("Server running at http://localhost:3000")
);
