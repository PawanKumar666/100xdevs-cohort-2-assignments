const { express } = require("express");
const adminMiddleware = require("../middleware/admin");
const app = express();

import { Admin, Course } from "../db";

app.use(express.json());

// Admin Routes
app.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  Admin.findOne({
    username: username,
    password: password,
  }).then((value) => {
    if (value) res.status(500).message("Admin already exists");
    else {
      const newAdmin = new Admin({
        username: username,
        password: password,
      });
      Admin.create(newAdmin)
        .then(() => res.send(200).message("Admin successfully created"))
        .catch("Admin signup failed");
    }
  });
});

app.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic

  // Try to improve data validation with zod
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  const published = req.body.published;

  Course.findOne({
    title: title,
    description: description,
  }).then((value) => {
    if (value) res.status(500).message("Course already exists");
    else {
      const newCourse = new Course({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price,
        published: published,
      });
      Course.create(newCourse)
        .then(() => res.send(200).message("Course successfully created"))
        .catch("Course creation failed");
    }
  });
});

app.get("/courses", adminMiddleware, (req, res) => {
  router.get("/courses", adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.findAll(); // TODO : verify this
    res.json({
      courses: response,
    });
  });
});

module.exports = app;
