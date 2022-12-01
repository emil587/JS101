function crunch(input) {
  let last = '';
  let collector = '';
  for (i of input.split('')) {
    if (i !== last) {
      collector += i;
      last = i;
    }
  }
  console.log(collector);
  return collector;
}



crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""