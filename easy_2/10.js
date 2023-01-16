let readline = require('readline-sync');

let currentAge = readline.question('What is your age?  ');
let retireAge = readline.question('What age will you retire?  ');

let delta = retireAge - currentAge;
let currentYear = 2023;
let retireYear = currentYear + delta;

console.log(`You will retire in ${retireYear}`)
console.log(`You will work for ${delta} more years`)
