import React, { useState, useContext } from 'react';
import classes from './AddField.module.css';
import { TodosContext } from "../../../context/todos";


const AddField = () => {

    const [description, setDescription] = useState("");
    const { addNewTodo } = useContext(TodosContext);

    //this function updates the new todo input
    const handleInputChange = (e) => {
        setDescription(e.target.value);
    };

    //this function updates the new todo input
    const handleAddButtonClick = (e) => {
        e.preventDefault();

        if (description !== null && description.trim().length !== 0) {
            addNewTodo(description);
        }
        else {
            alert("the input is empty");
        }
    };


    return (
        <>
            <legend>Add a New Task</legend>
            <input type="text" name="new-task-input"
                aria-label="input for creating a new task" placeholder="Add new task..." tabIndex="1"
                value={description} onChange={handleInputChange} />
            <button type="button" className={classes.addBtn} tabIndex="2"
                onClick={handleAddButtonClick}>Add</button>
        </>
    );
};

export default AddField;