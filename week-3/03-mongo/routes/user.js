const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

import { User, Course } from "../db";

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({
    username: username,
    password: password,
  }).then((value) => {
    if (value) res.status(500).message("Admin already exists");
    else {
      const newAdmin = new User({
        username: username,
        password: password,
      });
      User.create(newAdmin)
        .then(() => res.send(200).message("User successfully created"))
        .catch("User signup failed");
    }
  });
});

router.get("/courses", (req, res) => {
  router.get("/courses", adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.findAll(); // TODO : verify this
    res.json({
      courses: response,
    });
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );
  res.status(200).message("Course successfully purchased");
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const targetUser = await User.findOne({
    username: username,
  });
  const purchasedCourses = targetUser.purchasedCourses;
  const courses = await Course.find({
    _id: {
      $in: purchasedCourses,
    },
  });

  res.json({
    courses: courses,
  });
});

module.exports = router;
