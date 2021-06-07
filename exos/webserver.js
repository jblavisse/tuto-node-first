const express = require("express");

// Init web server with express
const app = express();

// Define variable for port
const port = 5000;

let notes =  [
    {title:"Ma note", message: "Le contenu de ma note"},
    {title: "Ma note numéro 2", message: "Le contenu de ma note numéro 2"}
];



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

app.get('/notes', (req,res) => {
    res.send(notes);
})

app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    res.send(notes[id-1]);
})


// Instanciate web server with listener for requests
app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
})