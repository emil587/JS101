let readline = require('readline-sync');

let targetNumbers = [];
for (i = 0; i < 5; i++) {
  let number = readline.question('enter target number  ');
  targetNumbers.push(number);
}

let searchNumber = readline.question('enter number to search for  ');
if (targetNumbers.includes(searchNumber)) {
  console.log(`${searchNumber} is included in ${targetNumbers}`);
} else {
  console.log(`${searchNumber} is not in ${targetNumbers}`);
}