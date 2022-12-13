function century(year) {
  let century = String(Math.ceil(year / 100));
  let ending = century.slice(-1);
  switch (ending) {
    case '1':
      ending = 'st';
      break;
    case '2':
      ending = 'nd';
      break;
    case '3':
      ending = 'rd';
      break;
    default:
      ending = 'th';
  }
  console.log(century + ending)
}


century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"