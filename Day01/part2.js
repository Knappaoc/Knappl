const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString();
const lines = input.split(/\r?\n/);

let callories = [];
let count = 0;
for (let index = 0; index < lines.length; index++) {
  if (lines[index] === "") {
    callories.push(count);
    count = 0;
  } else {
    count += parseInt(lines[index]);
  }
}

callories.sort(function (a, b) {
  return a - b;
});
console.log(
  callories[callories.length - 1] +
    callories[callories.length - 2] +
    callories[callories.length - 3]
);
