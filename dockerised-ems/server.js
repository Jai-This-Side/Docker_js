const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const connectDB = require('./config/db');

dotenv.config();

const app = express();


// Connect Database
connectDB();


// Middleware
app.use(bodyParser.json());


// Routes
app.use('/employees', require('./routes/employeeRoutes'));


// Default Route
app.get('/', (req, res) => {
    res.send('Employee Management System API Running');
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});