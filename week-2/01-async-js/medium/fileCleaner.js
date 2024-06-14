const fs = require("fs");

function contentCleaner(data) {
  let splitData = data.split(" ");
  splitData = splitData.filter((entry) => entry !== "");
  let resVal = splitData.join(" ");
  return resVal;
}

function fileReadCleanWrite(path) {
  fs.readFile(path, "utf8", (err, data) => {
    if (!err && data) {
      let cleanData = contentCleaner(data);
      console.log("cleaned data: ", cleanData);
      fs.writeFile(path, cleanData, (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          console.log("File successfully written");
        }
      });
    } else {
      console.error("Error reading file:", err);
    }
  });
}

fileReadCleanWrite("./dirtyFile.txt");
