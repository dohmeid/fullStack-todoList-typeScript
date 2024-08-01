const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

//retrieve all todos
router.get("/", todoController.getAllTodos);

// add a new todo
router.post("/", todoController.addNewTodo);

//delete a specific todo using its ID
router.delete("/:id", todoController.deleteTodo);

//update a specific todo using its ID
router.put("/:id", todoController.updateTodo);

module.exports = router;