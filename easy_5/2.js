function union(one, two) {
  let output = one;
  for (i of two) {
    if (!output.includes(i)) {
      output.push(i)
    }
    }
  
  console.log(output)
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]