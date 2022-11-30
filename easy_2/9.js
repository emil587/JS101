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

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true