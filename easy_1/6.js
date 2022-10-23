let readlineSync = require('readline-sync');

let stop = readlineSync.questionInt('Enter number greater than 0');
let operand = readlineSync.question('Enter s or m for operation');

let i = 1;
let total = 1;
if (operand === 's'){
  total = 0;
  while (i <= stop) {
    total += i;
    i++;
  }
} else if (operand === 'm') {
  while (i <= stop) {
    total *= i;
    i++;
  }
}

console.log(`The ${operand} of the numbers between 1 and ${stop} is ${total}}`);

