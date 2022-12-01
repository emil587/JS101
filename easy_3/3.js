function stringy(number) {
  let output = '';
  for (i = 0; i < number; i++) {
    if (i % 2 === 0) {
      output += '1';
    } else {
      output += '0'
    }
  }
  console.log(output);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"