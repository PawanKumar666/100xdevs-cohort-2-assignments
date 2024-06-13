const express = require("express");

const port = 3002;

const httpApp = express();

httpApp.get("/", (req, res) => {
  /*res.send("Noob coder here");*/
  res.redirect("https://www.google.com/");
});

httpApp.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
