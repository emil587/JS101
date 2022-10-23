function gregorian(year) {
  let leapYear = false;
  if (year % 4 === 0) {
    leapYear = true;
  }
  if (year % 100 === 0) {
    leapYear = false;
  }
  if (year % 400 === 0) {
    leapYear = true;
  }
  console.log(leapYear);
  return leapYear;

}

function isLeapYear(year) {
  if (year >= 1752) {
    gregorian(year);
  } else {
    console.log(year % 4 === 0);
    return year % 4 === 0;
  }
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true