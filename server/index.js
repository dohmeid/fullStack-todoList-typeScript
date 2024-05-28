require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todosRoute = require("./routes/todos");
const PORT = 5000;

//Execute express 
const app = express();

//connect to MongoDB database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB"));

app.use(cors()); //use the cors middleware
app.use(express.json()); //accept the data in JSON format
app.use("/todos", todosRoute); //set up the routes middleware

//start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));