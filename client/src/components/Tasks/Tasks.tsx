import React, { FC, useContext } from 'react';
import './Tasks.module.css';
import Task from "./Task/Task";
import { TodosContext } from '../../context/todos';
import { Todo, TodosContextType } from "../../interfaces/interfaces";

const Tasks: FC = () => {
    const { getFilteredTodos } = useContext(TodosContext) as TodosContextType;

    let todosArray: Todo[] = getFilteredTodos();

    const todoList = todosArray.map((todo: Todo, index: number) => (
        <Task key={todo._id} index={index + 1} todoData={todo} />
    ));

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">TODO Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>

            <tbody>
                {(todosArray.length > 0)
                    ? todoList
                    : <tr>
                        <td colSpan={4}>No tasks to display</td>
                    </tr>
                }
            </tbody>

            <tfoot>
                <tr>
                    <td colSpan={4}>Total tasks:<span>{todosArray.length}</span></td>
                </tr>
            </tfoot>
        </table>
    );
};

export default Tasks;