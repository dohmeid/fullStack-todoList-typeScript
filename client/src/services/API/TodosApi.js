const API_URL = 'http://localhost:5000/todos';

//this function is used to fetch all the todos from the server
export const fetchData = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
};

//this function is used to add a new note to the database using the server
export const addData = async (newTodoData) => {
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
export const deleteData = async (id) => {
    try {
        await fetch(`http://localhost:5000/todos/${id}`, {
            method: 'DELETE',
        });
        console.log('done deleting the note');
    } catch (error) {
        console.error('Error deleting todo:', error);
    }
};

//this function is used to update a note from the database using the server
export const updateData = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log('done updating the note');
    } catch (error) {
        console.error('Error updating todo:', error);
    }
};