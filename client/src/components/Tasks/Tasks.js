import React from 'react';
import './Tasks.module.css';
import Task from "./Task/Task";

const Tasks = () => {

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">TODO Description</th>
                    <th scope="col">User ID</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>

            <tbody>
                <Task />
                <Task />
            </tbody>

            <tfoot>
                <tr>
                    <td colspan="5">Total tasks:
                        <span>0</span>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
};

export default Tasks;