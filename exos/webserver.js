const express = require("express");

// Init web server with express
const app = express();

// Define variable for port
const port = 5000;

// Get request
app.get('/', (req,res) => {
    res.send('Bienvenue sur mon site');
})

app.get('/blog', (req,res) => {
    res.send('Mes articles');
})


app.get('/contact', (req,res) => {
    res.send('Me contacter');
})


// Instanciate web server with listener for requests
app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
})