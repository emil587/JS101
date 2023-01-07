function isPalindrome(input) {
  let reversed = input.split('').reverse().join('');
  console.log(reversed)
  console.log(input === reversed);
}


isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true