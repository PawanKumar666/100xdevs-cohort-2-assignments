const express = require("express");
const mongoose = require("mongoose");
const zod = require("zod");

const postBodySchema = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  password: zod.string().min(8),
});

const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  const body = postBodySchema.safeParse(req.body);
  const name = body.data.name;
  const email = body.data.email;
  const password = body.data.password;
  console.log(body);
  mongoose.connect(
    "mongodb+srv://ssppawankumar001:Ov5RRzaniXGfeyuX@pawans-clsuter.cp7pcjk.mongodb.net/user_metainfo"
  );
  const User = mongoose.model("User", {
    name: String,
    email: String,
    password: String,
  });
  const newUser = new User({
    name: name,
    email: email,
    password: password,
  });

  newUser.save().then(() => {
    res.send("Data saved successfully");
  });
});

app.listen(3002);
