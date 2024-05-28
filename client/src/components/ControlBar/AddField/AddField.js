import React, { useState, useContext } from 'react';
import classes from './AddField.module.css';
import { TodosContext } from "../../../context/todos";

const AddField = () => {
    const { addNewTodo } = useContext(TodosContext);
    const [description, setDescription] = useState("");

    //this function updates the new todo input
    const handleInputChange = (e) => {
        setDescription(e.target.value);
    };

    //this function adds the new todo to the todo list
    const handleAddButtonClick = (e) => {
        e.preventDefault();
        if (description !== null && description.trim().length !== 0) {
            addNewTodo(description);
            setDescription(""); //reset the input field
        }
        else {
            alert("the input is empty");
        }
    };

    return (
        <>
            <legend htmlFor="new-task">Add a New Task</legend>
            <input
                type="text" id="new-task" name="new-task-input"
                placeholder="Add new task..."
                aria-label="input for creating a new task" tabIndex="1"
                value={description} onChange={handleInputChange} />
            <button type="button" className={classes.addBtn} tabIndex="2"
                onClick={handleAddButtonClick}>Add</button>
        </>
    );
};

export default AddField;