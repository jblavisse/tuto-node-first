// File System: Read and Write files
const fs = require("fs");

// 1. File's path
// 2. Content to write in file
// 3. Callback after writeFile execution
// fs.writeFile('message.txt','coucou', function (err) {
//     if(err) console.log(err);
//     else console.log("Message bien sauvegardé");
// })

let people = [
    {name: "JB", age: 12},
    {name: "Balthazar", age: 23}
];
console.log(people);

let peopleJSON = JSON.stringify(people);
console.log(peopleJSON);

fs.writeFile('people.json', peopleJSON , function(err) {
    if(err) console.log(err);
    else console.log("Fichier JSON bien sauvegardé");
})