const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString();
const lines = input.split(/\r?\n/);

let count = 0;
let max = 0;
for (let index = 0; index < lines.length; index++) {
  if (lines[index] === "") {
    if (count > max) {
      max = count;
    }
    count = 0;
  } else {
    count += parseInt(lines[index]);
  }
}
console.log(max);
