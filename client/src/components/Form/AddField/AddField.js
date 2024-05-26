import React from 'react';
import classes from './AddField.module.css';

const AddField = () => {
    return (
        <>
            <legend>Add a New Task</legend>
            <input type="text" name="new-task-input"
                aria-label="input for creating a new task" placeholder="Add new task..." tabindex="1" />
            <button type="button" className={classes.addBtn} tabindex="2">Add</button>
        </>
    );
};

export default AddField;