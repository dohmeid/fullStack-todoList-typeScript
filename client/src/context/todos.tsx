import React, { FC, ReactNode, createContext, useState, useEffect } from 'react';
import { fetchData, addData, updateData, deleteData } from "../services/API/TodosApi";

//the types
export interface Todo {
    _id: number;
    description: string;
    isComplete: boolean;
}

export interface TodosContextType {
    todosList: Todo[];
    //setTodosList: (todosList: Todo[]) => void;

    //searchQuery: string;
    setSearchQuery: (searchQuery: string) => void;
    //setSearchQuery: React.Dispatch<React.SetStateAction<string>>;

    addNewTodo: (todoData: string) => Promise<void>;
    updateTodo: (todoID: number) => Promise<void>;
    deleteTodo: (todoID: number) => Promise<void>;
    getFilteredTodos: () => Todo[];
}

// We ensure our createContext() call is typed with the above interface
export const TodosContext = createContext<TodosContextType | null>(null);

export const TodosProvider: FC<{ children: ReactNode }> = ({ children }) => {

    //****************************STATES & HOOKS**********************************
    const [todosList, setTodosList] = useState<Todo[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>(""); //this state holds the search input

    //initially fetch the todos from the server
    useEffect(() => {
        fetchTodos();
    }, []);

    //****************************FUNCTIONS****************************
    //fetch data from the Express server
    const fetchTodos = async () => {
        try {
            const data = await fetchData();
            setTodosList(data.response);
        } catch (error) {
            console.error('Error fetching todos: ', error);
        }
    };

    //add a new todo
    const addNewTodo = async (todoData: string) => {
        try {
            await addData(todoData);
            fetchTodos();
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    //update a todo by marking it as completed
    const updateTodo = async (todoID: number) => {
        try {
            await updateData(todoID);
            fetchTodos();
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    };

    //delete a todo
    const deleteTodo = async (todoID: number) => {
        try {
            await deleteData(todoID);
            fetchTodos();
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    //this function returns the todos list to display on the screen - either original todo list or filtered based on search
    const getFilteredTodos = () => {
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