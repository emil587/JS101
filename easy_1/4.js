let readlineSync = require('readline-sync');

let length = readlineSync.questionInt('Enter length of room in m');
let width = readlineSync.questionInt('Enter width of room in m');

let mSquared = width * length
let ftSquared = mSquared * 10.7639

console.log(`Area of room is ${mSquared} square meters (${ftSquared} square feet).`)