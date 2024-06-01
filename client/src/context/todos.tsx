import React, { FC, ReactNode, createContext, useState, useEffect } from 'react';
import { fetchData, addData, updateData, deleteData } from "../services/API/TodosApi";
import { Todo, TodosContextType } from "../interfaces/interfaces";

export const TodosContext = createContext<TodosContextType | null>(null);

export const TodosProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [todosList, setTodosList] = useState<Todo[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    //initially fetch the todos from the server
    useEffect(() => {
        fetchTodos();
    }, []);

    //fetch data from the Express server
    const fetchTodos = async (): Promise<void> => {
        try {
            const data = await fetchData();
            setTodosList(data.response);
        } catch (error: any) {
            console.error('Error fetching todos: ', error);
        }
    };

    //add a new todo
    const addNewTodo = async (todoData: string): Promise<void> => {
        try {
            await addData(todoData);
            fetchTodos();
        } catch (error: any) {
            console.error("Error adding todo:", error);
        }
    };

    //update a todo by marking it as completed
    const updateTodo = async (todoID: number): Promise<void> => {
        try {
            await updateData(todoID);
            fetchTodos();
        } catch (error: any) {
            console.error("Error updating todo:", error);
        }
    };

    //delete a todo
    const deleteTodo = async (todoID: number): Promise<void> => {
        try {
            await deleteData(todoID);
            fetchTodos();
        } catch (error: any) {
            console.error("Error deleting todo:", error);
        }
    };

    //this function returns the todos list to display on the screen - either original todo list or filtered based on search
    const getFilteredTodos = (): Todo[] => {
        return (searchQuery !== "")
            ? todosList.filter(todo => todo.description.toLowerCase().includes(searchQuery.toLowerCase()))
            : todosList;
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