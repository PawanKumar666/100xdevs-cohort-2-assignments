const request = require("supertest");
const assert = require("assert");
const express = require("express");

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint
function errorCounterMiddleware(err, req, res, next) {
  errorCount++;
  res.sendStatus(404);
}
app.use(express.json());

app.get("/user", function (req, res) {
  const err = new Error("User not found");
  next(err);
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/errorCount", function (req, res) {
  res.status(200).json({ errorCount });
});

app.use(errorCounterMiddleware); // Middlewares are executed in the order they were added to the express server

module.exports = app;
