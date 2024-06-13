const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const port = 3002;
const app = express();

app.use(bodyParser.json());

let todos = [];

// Get all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Add a new todo via URL parameter
app.post("/todos/:task", (req, res) => {
  const { task } = req.params;
  if (task) {
    const newTodo = { id: uuidv4(), task, completed: false };
    todos.push(newTodo);
    res.status(201).json(todos); // Return updated todo list
  } else {
    res.status(400).json({ error: "Task is required" });
  }
});

// Update a todo (mark as completed)
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = true;
    res.json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

// Delete a todo
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex !== -1) {
    const deletedTodo = todos.splice(todoIndex, 1);
    res.json(deletedTodo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

// Redirect root to Google
app.get("/", (req, res) => {
  res.redirect("https://www.google.com/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
