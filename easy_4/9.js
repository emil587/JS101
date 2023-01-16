function stringToInteger(string) {
  const lookupTable = {'0':0,
                        '1':1,
                      '2':2,
                      '3':3,
                      '4':4,
                      '5':5,
                      '6':6,
                      '7':7,
                      '8':8,
                      '9':0};
  let integer = 0;
  let decimal = 0;
  for (i of string.split('').reverse()) {
    integer += i * 10 ** decimal;
    decimal += 1;

  }
  console.log(integer)
  return integer;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true