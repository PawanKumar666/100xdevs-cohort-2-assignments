const fs = require("fs");

function fileReaderHelper(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (!err && data) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}

async function fileReaderAsync(path) {
  const data = await fileReaderHelper(path);
  console.log("Data: ", data);
}

fileReaderAsync("./random-text.txt");
