const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "pawan@gmail.com",
    password: "123",
    name: "Pawan Kumar",
  },
  {
    username: "kohli@gmail.com",
    password: "123321",
    name: "Virat Kohli",
  },
  {
    username: "rohit@gmail.com",
    password: "123321",
    name: "Rohit Sharma",
  },
];

function userExists(username, password) {
  return ALL_USERS.some(
    (user) => user.username === username && user.password === password
  );
  //   for (user in ALL_USERS) {
  //     if (user.username === username && user.password === password) {
  //       return true;
  //     }
  //   }
  //   return false;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    let otherUsers = ALL_USERS.filter((user) => user.username !== username);
    res.status(200).json(otherUsers);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3002);
