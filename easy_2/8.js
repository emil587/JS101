function oddities(array) {
  let odd = [];
  let counter = 0;
  for (let entry of array) {
    if (counter === 0 || counter % 2 === 0) {
      odd.push(array[entry]);
      debugger
    }
    counter += 1;
  }
  return odd;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []