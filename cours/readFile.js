const fs = require("fs");

fs.readFile('people.json', 'utf-8', (err, data) => {
    if(err) console.log(err);
    else {
        const dataJSON = JSON.parse(data);
        console.log(dataJSON);
        
        console.log(dataJSON[0].name);
    }
})