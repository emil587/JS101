function shortLongShort(first, second) {
  let short = first;
  let long = second;    
  if (first.length > second.length) {
    short = second;
    long = first;
  }
  console.log(short + long + short);
  return short + long + short;
  
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"