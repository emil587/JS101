function penultimate(words) {
  words = words.split(' ');
  let position = words.length - 2;
  return words[position];
}

console.log(penultimate("last word")); // logs true
console.log(penultimate("Launch School is great!")); // logs true