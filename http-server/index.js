const express = require("express");

const httpApp = express();

httpApp.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

httpApp.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
