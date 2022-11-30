let converter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function integerToString(int, sign) {
  let string = '';
  do {
    let digit = int % 10;
    //console.log(digit)
    digit = converter[digit];
    string = digit + string;
    int = Math.floor(int / 10);
    
  } while (int > 0)
  string = sign + string;
  console.log(string);
  return string;
  
}

function signedIntegerToString(int) {
  let sign = ''
  if (Math.sign(int) === 1) {
    sign = '+';
  }
  if (Math.sign(int) === -1) {
    sign = '-';
    int = -int;
  }
  return integerToString(int, sign)

}


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");