function interleave(left, right) {
  let output = [];
  for (i in left) {
    output.push(left[i]);
    output.push(right[i])
  }
  console.log(output)
}

function interleave2(left, right) {
  let output = [];
  left.forEach(element => output.push(element, right[left.indexOf(element)]))
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
interleave2([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]