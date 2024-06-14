/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

// This wont pass the tests, but justifies what has been asked from the description above
class Todo {
  constructor() {
    this._todos = [];
  }
  add(todo) {
    this._todos.push(todo);
  }
  remove(indexOfTodo) {
    this._todos.splice(indexOfTodo, 1);
  }
  update(indexOfTodo, updatedTodo) {
    this._todos[indexOfTodo] = updatedTodo;
  }
  getAll() {
    return this._todos;
  }
  get(indexOfTodo) {
    return this._todos[indexOfTodo];
  }
  clear() {
    this._todos = [];
  }
}

module.exports = Todo;
