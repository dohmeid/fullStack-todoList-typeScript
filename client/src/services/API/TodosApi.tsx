const API_URL = 'http://localhost:5000/todos';

//this function is used to fetch all the todos from the server
export const fetchData = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch todos');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Error fetching todos: ' + error.message);
    }
};

//this function is used to add a new todo to the database using the server
export const addData = async (newTodoData) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ description: newTodoData }),
        });
        if (!response.ok) {
            throw new Error('Failed to add todo');
        }
        console.log('Todo added successfully');
    } catch (error) {
        throw new Error('Error adding todo: ' + error.message);
    }
};

//this function is used to delete a todo from the database using the server
export const deleteData = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete todo');
        }
        console.log('Todo deleted successfully');
    } catch (error) {
        throw new Error('Error deleting todo: ' + error.message);
    }
};

//this function is used to update a todo from the database using the server
export const updateData = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error('Failed to update todo');
        }
        console.log('Todo updated successfully');
    } catch (error) {
        throw new Error('Error updating todo: ' + error.message);
    }
};