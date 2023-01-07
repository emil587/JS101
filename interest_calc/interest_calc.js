let readlineSync = require("readline-sync");

function monthlyPayment(principle, monthlyRate, months) {
  let payment;
  if (monthlyRate === 0) {
    payment = principle / months;
  } else {
    payment =
    principle * (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-months))));
  }
  return payment;
}


let principle = readlineSync.question('What is the amount of the loan?  ');
while (isNaN(principle)) {
  principle = readlineSync.question('Error, enter a number  ');
}
let apr = readlineSync.question('What is the yearly interest rate?  ');
while (isNaN(apr)) {
  apr = readlineSync.question('Error, enter a number  ');
}
let duration = readlineSync.question('How many years to pay back the loan?  ');
while (isNaN(duration)) {
  duration = readlineSync.question('Error, enter a number  ');
}

let monthlyRate = apr / 100 / 12;
let months = duration * 12;

let payment = monthlyPayment(principle, monthlyRate, months);
payment = Math.round(payment * 100) / 100;


console.log(`Monthly Payment is $${payment}`);