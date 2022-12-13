function twice(number) {
  let length = String(number).length;
  let first = String(number).slice(0, length / 2); 
  let last = String(number).slice(length / 2, length);
  //console.log(first, last)

  if (first === last) {
    console.log(number);
    return number;
  } else {
    console.log(number * 2);
    return number * 2;
  }
  
}


twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676