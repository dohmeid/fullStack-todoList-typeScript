const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },
        isComplete: {
            type: Boolean,
            default: false,
        }
    }
);

const Todo = mongoose.model("todo", todoSchema);
module.exports = Todo;