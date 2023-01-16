function swap(input) {
  let output = [];
  for (word of input.split(' ')) {
    let wordArray = word.split('');
    let first = wordArray.shift();
    let last = wordArray.pop();
    wordArray.unshift(last)
    wordArray.push(first);
    wordArray = wordArray.join('')
    output.push(wordArray);

  }
  console.log(output.join(' '))
}


swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"