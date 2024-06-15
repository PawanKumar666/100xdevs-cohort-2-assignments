const express = require("express");
const zod = require("zod");

const app = express();
app.use(express.json());

const schema = zod.array(zod.string()); // Input should be an array of strings

app.post("/", (req, res) => {
  bodyValues = schema.safeParse(req.body.values);
  if (!bodyValues) {
    return res.status(400).json({ error: "Invalid input" });
  } else {
    res.send(bodyValues);
  }
});

app.listen(3002);
