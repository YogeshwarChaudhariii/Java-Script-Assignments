const EventEmmiter = require("events");
const emitter = new EventEmmiter();

emitter.on("order", () => {
    console.log("Odered received");
});

emitter.on("order", () => {
    console.log("procrssing Order");
});

emitter.emit("order");