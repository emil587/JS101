const readline = require('readline-sync');

let name = readline.question('What is your name?');
if (name.endsWith('!')) {
  name = name.toUpperCase();
  console.log(`HELLO ${name}!`);
} else {
  console.log(`Hello, ${name}`);
}

