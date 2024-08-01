import React, { FC, useContext, MouseEvent } from 'react';
import classes from './Task.module.css';
import { TodosContext } from "../../../context/todos";
import { Todo, TodosContextType } from "../../../interfaces/interfaces";

interface TaskProps {
    index: number;
    todoData: Todo;
}

const Task: FC<TaskProps> = ({ index, todoData }) => {

    const { deleteTodo, updateTodo } = useContext(TodosContext) as TodosContextType;

    //this function deletes the todo
    const handleDeleteButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        deleteTodo(todoData._id);
    };

    //this function marks the todo as completed (updates the todo)
    const handleDoneButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        updateTodo(todoData._id);
    };

    return (
        <tr className={classes.row}>
            <td>{index}</td>
            <td className={todoData.isComplete ? classes.completedTask : ""}>{todoData.description}</td>
            <td>{todoData.isComplete ? "Completed" : "Pending"}</td>
            <td>
                <button
                    type="submit"
                    className={classes.deleteBtn}
                    aria-label="Delete task"
                    onClick={handleDeleteButtonClick}
                >Delete</button>

                <button
                    type="submit"
                    className={classes.doneBtn}
                    aria-label="Mark as done"
                    disabled={todoData.isComplete}
                    onClick={handleDoneButtonClick}
                >Done</button>
            </td>
        </tr>
    );
};

export default Task;