// q4_event_calculator.js
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("calculate", (a, b) => {
  console.log(`Sum = ${a + b}`);
});

emitter.emit("calculate", 10, 20);
