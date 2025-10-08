// event args

const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("introduce", (name) => {
  console.log(`Hello ${name}, nice to meet you!`);
});

emitter.emit("introduce", "Alice");
emitter.emit("introduce", "bob");

