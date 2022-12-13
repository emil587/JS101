function triangle(lines) {
  for (let i = lines; i > 0; i--) {
    let line = ' '.repeat(i - 1) + '*'.repeat(lines - i + 1);
    console.log(line);


}
}

triangle(5);
triangle(9);
