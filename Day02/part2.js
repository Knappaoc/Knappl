const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString();
const lines = input.split(/\r?\n/);

// rock A = 1
// Paper B = 2
// siccors C = 3

// X loss = 0
// Y draw = 3
// Z win = 6

var results = new Map([
  ["A X", 3],
  ["A Y", 4],
  ["A Z", 8],
  ["B X", 1],
  ["B Y", 5],
  ["B Z", 9],
  ["C X", 2],
  ["C Y", 6],
  ["C Z", 7],
]);

let count = 0;
for (let index = 0; index < lines.length; index++) {
  count += results.get(lines[index]);
}

console.log(count);
