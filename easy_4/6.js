function wordSizes(input) {
  words = input.split(' ');
  let count = {}
  for (word of words) {
    if (word.length === 0) {
      continue;
    }
    if (word.length in count) {
      count[word.length] += 1;
    } else {
      count[word.length] = 1;
    }
  }
 console.log(count);
 return count;

}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}