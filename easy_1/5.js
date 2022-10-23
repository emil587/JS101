let readlineSync = require('readline-sync');

let bill = readlineSync.questionInt('What is the bill?');
let tipPercent = readlineSync.questionInt('What is tip percentage');

tipPercent = tipPercent / 100;
let tip = bill * tipPercent;
let total = bill + tip;

console.log(`tip is $${tip}`);
console.log(`total is $${total}`);