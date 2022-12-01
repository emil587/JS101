function findFibonacciIndexByLength(endLength) {
  let fibs = [1n, 1n];
  while (String(fibs.at(-1)).length < endLength) {
    fibs.push(fibs.at(-1) + fibs.at(-2))
    //console.log(fibs)
  }
  console.log(fibs.length)
  return fibs.indexOf(fibs.at(-1))
  

}




findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
//findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.