function halvsies(input) {
  let halfway = Math.ceil(input.length / 2)

  let first = input.slice(0, halfway)
  let last = input.slice(halfway)
  console.log(first, last)
}


halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]