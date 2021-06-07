const fs = require("fs");

const notes = [
    {title:"Ma note", message: "Le contenu de ma note"},
    {title: "Ma note numéro 2", message: "Le contenu de ma note numéro 2"}
]

fs.writeFile('data.json', JSON.stringify(notes), (err) => {
    if(err) console.log(err);
    else console.log("Notes enregistrées");
})