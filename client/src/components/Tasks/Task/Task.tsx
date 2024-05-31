import React, { FC, useContext } from 'react';
import classes from './Task.module.css';
import { Todo, TodosContext, TodosContextType } from "../../../context/todos";

// Define a type for the component props
interface TaskProps {
    index: number;
    todoData: Todo;
}

// Use the 'FC' (Functional Component) generic from React, with our props type
const Task: FC<TaskProps> = ({ index, todoData }) => {
    const { deleteTodo, updateTodo } = useContext(TodosContext) as TodosContextType;

    //this function deletes the todo
    const handleDeleteButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        deleteTodo(todoData._id);
    };

    //this function marks the todo as completed (updates the todo)
    const handleDoneButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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