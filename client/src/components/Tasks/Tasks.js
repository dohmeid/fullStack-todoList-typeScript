import React, { useContext } from 'react';
import './Tasks.module.css';
import Task from "./Task/Task";
import { TodosContext } from '../../context/todos';

const Tasks = () => {
    const { todosList } = useContext(TodosContext);
    console.log(todosList);

    //rendering the todos list
    const TODO_LIST = todosList.map((todo, index) => (
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
                {TODO_LIST}
            </tbody>

            <tfoot>
                <tr>
                    <td colSpan="5">Total tasks:
                        <span>0</span>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
};

export default Tasks;