const EventEmitter = require("events");

class Download extends EventEmitter {
  startDownload(file) {
    console.log(`Downloading ${file}...`);
    setTimeout(() => {
      this.emit("complete", `Download of ${file} finished!`);
    }, 2000);
  }
}

const d = new Download();

d.on("complete", (msg) => console.log(msg));

d.startDownload("movie.mp4");
