const fs = require("fs");

function fileReaderPromise(path) {
  return new Promise((res, rej) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (!err && data) {
        res(data);
      } else {
        rej("Error reading file");
      }
    });
  });
}

fileReaderPromise("./random-text.txt")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(`${err}.`);
  });
