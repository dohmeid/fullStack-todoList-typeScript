import React, { FC, useState, useContext, ChangeEvent, MouseEvent } from 'react';
import classes from './AddField.module.css';
import { TodosContext } from "../../../context/todos";
import { TodosContextType } from "../../../interfaces/interfaces";

const AddField: FC = () => {
    const { addNewTodo } = useContext(TodosContext) as TodosContextType;
    const [description, setDescription] = useState<string>("");

    //this function updates the new todo input
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    //this function adds the new todo to the todo list
    const handleAddButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
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
            <legend>Add a New Task</legend>
            <input
                type="text" id="new-task" name="new-task-input"
                placeholder="Add new task..."
                aria-label="input for creating a new task" tabIndex={1}
                value={description} onChange={handleInputChange} />
            <button type="button" className={classes.addBtn} tabIndex={2}
                onClick={handleAddButtonClick}>Add</button>
        </>
    );
};

export default AddField;