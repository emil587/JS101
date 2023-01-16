function centerOf(string) {
  let length = string.length;
  let center = length / 2
  if (length % 2 === 0) {
    console.log(string.slice(center -1, center + 1));

  } else {
    console.log(string.slice(Math.floor(center), Math.floor(center) + 1))
    
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"