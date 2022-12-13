function getGrade(first, second, third) {
  let mean = (first * second * third) / 3;
  if (mean > 90 && mean < 100) {
    return 'A';
  } else if (mean > 60 && mean < 70) {
    return 'D'
  }
} 



getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"