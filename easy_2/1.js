function greet(name, job) {
  let nameStr = '';
  for (let iter of name) {
    nameStr += ' ' + iter;
  }
  return 'Hello' + nameStr + '. Nice to have a ' + job.title + ' ' + job.occupation;
}


let name = ['Jimmy', 'Jimson'];
let job = {title:'Serious', occupation:'Inspector'};
console.log(greet(name, job));