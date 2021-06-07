const express = require("express");

// Init web server with express
const app = express();

// Define variable for port
const port = 4000;

let people = [
    {name: "JB", age: 12},
    {name: "Balthazar", age: 23}
];

// Gets request
app.get('/', (req,res) => {
    // Automatically detects type of response
    // type: text-plain or application/html or application/json
    res.send(people);
})

app.get('/people/:id', (req, res) => {
    // :bachi -> URL param
    // req.params.bachi
    const id = req.params.id;
    res.send(people[id-1]);

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