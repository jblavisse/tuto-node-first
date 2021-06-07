const express = require("express");

// Init web server with express
const app = express();

// Define variable for port
const port = 5000;

// Get request
app.get('/', (req,res) => {
    res.send('Hello World');
})

app.get('/services', (req,res) => {
    res.send('Mes services');
})


// Instanciate web server with listener for requests
app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
})