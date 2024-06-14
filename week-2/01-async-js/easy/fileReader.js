const fs = require("fs");

function fileReader(filePath) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (!err && data) {
      console.log(`${data}\n`);
    } else {
      console.error("Error reading the file");
    }
  });
}

fileReader("./random-text.txt");
