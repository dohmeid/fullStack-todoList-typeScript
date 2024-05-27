const Todo = require("../models/todoModel");

//retrieve all todos
exports.getAllTodos = async (req, res) => {
    try {
        const response = await Todo.find();
        res.json({ response });
    } catch (error) {
        res.status(500).json({
            error: "ERROR 500: Internal Server Error, failed to retrieve the notes: " + error.message,
        });
    }
};


//add a new todo
exports.addNewTodo = async (req, res) => {
    try {
        const todo = new Todo({
            description: req.body.description,
            isComplete: false,
        });
        const response = await todo.save();
        res.status(201).json({ response });
    } catch (error) {
        res.status(400).json({
            error: "ERROR 400: Bad Request, failed to add the new note: " + error.message,
        });
    }
};

//delete a specific todo using its ID
exports.deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await Todo.findByIdAndDelete(id);
        if (!response) {
            return res.status(404).json({ error: "ERROR 400: Not Found: Note not found" });
        }
        res.json({ message: "Note deleted successfully" });
    } catch (error) {
        res.status(500).json({
            error: "ERROR 500: Internal Server Error, failed to delete note: " + error.message,
        });
    }
};

//update a specific todo using its ID
exports.updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        let updatedTodo = {
            isComplete: true,
        };
        const response = await Todo.findByIdAndUpdate(id, updatedTodo, { new: true, });
        if (!response)
            return res.status(404).json({ error: "ERROR 404: Not Found, note was not found" });
        res.json(response);
    } catch (error) {
        res.status(400).json({ error: "ERROR 400: Bad Request, failed to update the note: " + error.message, });
    }
};