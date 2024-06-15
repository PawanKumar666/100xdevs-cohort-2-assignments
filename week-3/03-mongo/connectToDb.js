const mongoose = require("mongoose");

mongoose.connect("mongodb_url/db");

console.log("connected to mongo db");
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

const newUser = new User({
  name: "Pawan Kumar",
  email: "pawan@gmail.com",
  password: "perodha",
});

newUser.save().then(() => console.log("meow"));
