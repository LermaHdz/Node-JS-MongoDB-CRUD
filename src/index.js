const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const usersRoutes = require('./routes/user');

const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use('/api', usersRoutes);


//routes
app.get("/", (req, res) =>{
    res.send('Welcome to my API'); 
});

//mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() =>  console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error(error));

app.listen(port, () => console.log('Server listening on port', port));