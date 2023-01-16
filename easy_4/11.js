let converter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function integerToString(int) {
  let string = '';
  do {
    let digit = int % 10;
    //console.log(digit)
    digit = converter[digit];
    string = digit + string;
    int = Math.floor(int / 10);
    
  } while (int > 0)
  console.log(string);
  return string;
  
}

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"