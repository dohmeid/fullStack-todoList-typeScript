import { createContext, useState, useEffect } from 'react';
import { fetchData, addData, updateData, deleteData } from "../services/API/TodosApi";

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {

    //****************************STATES & HOOKS**********************************
    const [todosList, setTodosList] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); //this state holds the search input

    //initially fetch the todos from the server
    useEffect(() => {
        fetcTodos();
    }, []);

    //****************************FUNCTIONS****************************
    //fetch data from the Express server
    const fetcTodos = async () => {
        try {
            const data = await fetchData();
            setTodosList(data.response);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    //add a new todo
    const addNewTodo = async (todoData) => {
        try {
            await addData(todoData);
            fetcTodos();
        } catch (error) {
            console.error("Error adding the note:", error);
        }
    };

    //update a todo
    const updateTodo = async (todoID) => {
        try {
            await updateData(todoID);
            fetcTodos();
        } catch (error) {
            console.error("Error adding the note:", error);
        }
    };

    //delete a todo
    const deleteTodo = async (todoID) => {
        try {
            await deleteData(todoID);
            fetcTodos();
        } catch (error) {
            console.error("Error adding the note:", error);
        }
    };


    //this function returns the todos list to display on the screen
    const getFilteredTodos = () => {
        let todosToDisplay = [];
        if (searchQuery !== "") {
            let filteredTodosArray = todosList.filter((todo) => todo.description.toLowerCase().includes(searchQuery));
            todosToDisplay = filteredTodosArray;
        }
        else {
            todosToDisplay = todosList;
        }
        return todosToDisplay;
    }

    return (
        <TodosContext.Provider
            value={{
                todosList,
                setSearchQuery,
                addNewTodo,
                updateTodo,
                deleteTodo,
                getFilteredTodos
            }}
        >
            {children}
        </TodosContext.Provider>
    );
};