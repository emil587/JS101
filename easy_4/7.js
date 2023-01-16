function wordSizes(input) {
  input = input.replace(/[^\w\s\']|_/g, "")
         .replace(/\s+/g, " ");
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

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}