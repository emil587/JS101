function stringToInteger(string) {
  let numeric = []
  let translate = {'1':1,
                  '2':2,
                  '3':3,
                  '4':4,
                  '5':5,
                  '6':6,
                  '7':7,
                  '8':8,
                  '9':9,
                  '0':0}
  for (let entry of string.split('')) {
    numeric.push(translate[entry])
  }
  numeric = numeric.reverse()
  let sum = 0;
  for (let counter = 0; counter < numeric.length; counter++) {
    sum += numeric[counter] * 10 ** counter;
  }

  console.log(sum)
  return sum

}

function stringToSignedInteger(string) {
  let negative = false;
  if (string.startsWith('-')) {
    negative = true;
    string = string.slice(1);
  }
  if (string.startsWith('+')) {
    string = string.slice(1);
  }
  let sum = stringToInteger(string);
  if (negative) {sum = sum * -1};
  return sum;
}


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true