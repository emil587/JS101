function utf16Value(input) {
  let sum = 0
  for (i = 0; i < input.length; i++) {
    let charCode = input.charCodeAt(i);
    //console.log(charCode);
    sum += charCode;
    }
  
  console.log(sum);
  return sum;
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811