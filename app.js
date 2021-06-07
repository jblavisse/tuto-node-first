const chalk = require("chalk");


let people = [
    {name: "JB", age: 12},
    {name: "Balthazar", age: 23}
];

people.forEach(person => {
    // Même chose que
    //  console.log(person.name + " a " + person.age + " ans");
    if(person.age > 20) {
        console.log(chalk.red(`${person.name} a ${person.age} ans`));
    }
})