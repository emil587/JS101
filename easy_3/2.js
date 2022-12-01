function logInBox(text) {
  let topBottom = `+-${'-'.repeat(text.length)}-+`
  let middle = `| ${' '.repeat(text.length)} |`
  let payload = `| ${text} |`

  console.log(topBottom)
  console.log(middle)
  console.log(payload)
  console.log(middle)
  console.log(topBottom)
}

logInBox('To boldly go where no one has gone before.');