function isPalindromicNumber(number) {
  string = String(number)
  reversed = string.split('').reverse().join('')
  console.log(number === Number(reversed))
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true