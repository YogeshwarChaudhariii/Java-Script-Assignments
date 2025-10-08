const EventEmmiter = require("events");
const emmiter = new EventEmmiter();

emmiter.on("greet", () => {
    console.log("Hello, welcome to node.js events");
});

emmiter.emit("greet");