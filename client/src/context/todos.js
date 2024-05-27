import { createContext, useState, useEffect } from 'react';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from "../services/API/TodosApi";

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {

    //****************************STATES & HOOKS**********************************
    const [todosList, setTodosList] = useState([]);


    //initially fetch the todos from the server
    useEffect(() => {
        fetchData();
        console.log(todosList);
    }, []);


    //****************************FUNCTIONS****************************
    //fetch data from the Express server
    const fetchData = async () => {
        try {
            const data = await fetchTodos();
            setTodosList(data.response);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    //add a new todo
    const addNewTodo = async (todoData) => {
        try {
            await addTodo(todoData);
            fetchData();
        } catch (error) {
            console.error("Error adding the note:", error);
        }
    };


    //update a todo
    const updateATodo = async (todoID) => {
        try {
            await updateTodo(todoID);
            fetchData();
        } catch (error) {
            console.error("Error adding the note:", error);
        }
    };


    //delete a todo
    const deleteATodo = async (todoID) => {
        try {
            await deleteTodo(todoID);
            fetchData();
        } catch (error) {
            console.error("Error adding the note:", error);
        }
    };


    return (
        <TodosContext.Provider
            value={{
                todosList,
                addNewTodo,
                updateATodo,
                deleteATodo
            }}
        >
            {children}
        </TodosContext.Provider>
    );
};