import React from 'react';
import classes from './Task.module.css';

const Task = () => {

    return (
        <tr className={classes.row}>
            <td>i</td>
            <td>task.todo</td>
            <td>task.userId</td>
            <td>state</td>
            <td>
                <button type="submit" className={classes.deleteBtn}>Delete</button>
                <button type="submit" className={classes.doneBtn}>Done</button>
            </td>
        </tr>
    );
};

export default Task;