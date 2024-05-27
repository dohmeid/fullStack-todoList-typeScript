import React, { useContext } from 'react';
import classes from './Task.module.css';
import { TodosContext } from "../../../context/todos";

const Task = ({ index,todoData }) => {

    const { deleteATodo, updateATodo } = useContext(TodosContext);

    //this function marks the todo as completed
    const handleDeleteButtonClick = (e) => {
        e.preventDefault();
        deleteATodo(todoData._id);
    };

    //this function marks the todo as completed
    const handleDoneButtonClick = (e) => {
        e.preventDefault();
        updateATodo(todoData._id);
    };

    return (
        <tr className={classes.row}>
            <td>{index}</td>
            <td className={todoData.isComplete ? classes.completedTask : ""}>{todoData.description}</td>
            <td>{todoData.isComplete ? "Completed" : "Pending"}</td>
            <td>
                <button type="submit" className={classes.deleteBtn} onClick={handleDeleteButtonClick}>Delete</button>
                <button type="submit" className={classes.doneBtn} onClick={handleDoneButtonClick}>Done</button>
            </td>
        </tr>
    );
};

export default Task;