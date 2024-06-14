const fs = require("fs");

function fileWriter(path, data) {
  fs.writeFile(path, data, (err) => {
    if (!err) {
      console.log(`${data} has been written to ${path}.`);
    } else {
      throw err;
    }
  });
}

fileWriter(
  "./dummy-write-file.txt",
  "This is a dummy file that will be overwritten by the code in this assignment."
);
