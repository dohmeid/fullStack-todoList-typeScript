import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Tasks from "./components/Tasks/Tasks";

function App() {

  /* const [todos, setTodos] = useState([]);
   useEffect(() => {
     // Fetch data from the Express server
     axios.get('http://localhost:5000/todos')
       .then(response => setTodos(response.data))
       .catch(error => console.error(error));
   }, []);
 
 
 */
  /*
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
  
   <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.task}</li>
        ))}
      </ul>
  */



  return (
    <>
      <Header />
      <Form />
      <Tasks />
    </>
  );
}

export default App;
