function isPalindrome(input) {
  let reversed = input.split('').reverse().join('');
  console.log(reversed)
  console.log(input === reversed);
}

function isRealPalindrome(input) {
  let cleaned = input.replace(/[', ]/g, '').toLowerCase()
  isPalindrome(cleaned)
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false