const fs = require("fs");

fs.writeFileSync("Hello.txt", "Hello world");

fs.readFile("Hello.txt", function (err, data)
{
    if (err) {
        console.error(err);
    }
    console.log("Data: " + data.toString());
});

fs.unlinkSync("Hello.txt");