const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString();
const lines = input.split(/\r?\n/);

let count = 0;

for (let index = 14; index < lines[0].length; index++) {

  let word = lines[0].substring(
    index-14, 
    index
);

  if(!hasRepeats(word)) {
    console.log(index)
    break;
  }
}

function hasRepeats (str) {
  return /(.).*\1/.test(str);
}

console.log(count)
