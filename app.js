const express = require("express");

// Init web server with express
const app = express();

// JSON reception (when we want to send data)
app.use(express.json());

// Form data reception (when we want to send data)
app.use(express.urlencoded());

// Define variable for port
const port = 4000;

let people = [
    {name: "JB", age: 12},
    {name: "Balthazar", age: 23}
];

app.get('/people/', (req, res) => {
    res.send(people);
})

app.post('/people', (req, res) => {
    // Get my json data in request body
    const myData = req.body;
    people.push(myData);
    res.send(myData);
})

app.get('/people/:id', (req, res) => {
    // :bachi -> URL param
    // req.params.bachi
    const id = req.params.id;
    res.send(people[id-1]);

})

app.put('/people/:id', (req, res) => {
    // :bachi -> URL param
    // req.params.bachi
    const id = req.params.id;
    res.send('Mise à jour du gens ' + id);
})

app.delete('/people/:id', (req,res) => {
    const id = req.params.id;
    res.send('Suppression du gens ' + id);
})

// Instanciate web server with listener for requests
app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
})