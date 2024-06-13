const express = require("express");

const port = 3001;

const httpApp = express();

httpApp.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

httpApp.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
