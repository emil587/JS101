function runningTotal(input) {
  let output = []
  for (i = 1; i <= input.length; i++) {
    let array = input.slice(0, i);
    let sum = 0
    for (entry of array) {
      sum += entry
    }
    output.push(sum)
    

  }
  console.log(output)

}




runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []