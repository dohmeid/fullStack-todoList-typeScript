const API_URL = 'http://localhost:5000/todos';

//this function is used to fetch all the todos from the server
export const fetchTodos = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
};


//this function is used to add a new note to the database using the server
export const addTodo = async (newTodoData) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ description: newTodoData }),
        });
        console.log('done adding the new todo');
    } catch (error) {
        console.error('Error in adding the new todo:', error);
    }
};


//this function is used to delete a note from the database using the server
export const deleteTodo = async (id) => {
    try {
        await fetch(`http://localhost:5000/todos/${id}`, {
            method: 'DELETE',
        });
        //setTodos(todos.filter((todo) => todo.id !== id));
        console.log('done deleting the note');
    } catch (error) {
        console.error('Error deleting todo:', error);
    }
};


//this function is used to update a note from the database using the server
export const updateTodo = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log('done updating the note');
        //const updatedTodo = await response.json();
        //setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    } catch (error) {
        console.error('Error updating todo:', error);
    }
};