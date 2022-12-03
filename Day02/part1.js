const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString();
const lines = input.split(/\r?\n/);

// rock(X) = 1
// paper(Y) = 2
// siccors(Z) = 3

// loss = 0
// draw = 3
// win = 6

var results = new Map([
  ["A X", 4],
  ["A Y", 8],
  ["A Z", 3],
  ["B X", 1],
  ["B Y", 5],
  ["B Z", 9],
  ["C X", 7],
  ["C Y", 2],
  ["C Z", 6],
]);

let count = 0;
for (let index = 0; index < lines.length; index++) {
  count += results.get(lines[index]);
}

console.log(count);
