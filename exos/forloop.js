// if necessary, npm init 
// npm install chalk
const chalk = require("chalk");

for(let i=1; i<=10;i++) {
    console.log(chalk.inverse.green(i));
}