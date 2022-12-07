const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString();
const lines = input.split(/\r?\n/);

let count = 0;

for (let index = 3; index < lines[0].length; index++) {
  if(!hasRepeats(lines[0].charAt(index-3) + lines[0].charAt(index-2) + lines[0].charAt(index-1) + lines[0].charAt(index))) {
    console.log(index+1)
    break;
  }
}

function hasRepeats (str) {
  return /(.).*\1/.test(str);
}

console.log(count)
