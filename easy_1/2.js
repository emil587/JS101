for (let i = 1; i < 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

let i = 1
while (i < 100) {
  console.log(i);
  i += 2;
}

function logOdd(start, stop) {
  let i = start;
  while (i < stop) {
    console.log(i);
    i += 2;
  }
}