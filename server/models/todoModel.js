const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        userID: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
        }
    }
);

const Todo = mongoose.model("todo", todoSchema);
module.exports = Todo;