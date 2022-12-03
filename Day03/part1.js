const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString();
const lines = input.split(/\r?\n/);

var results = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let count = 0;

for (let index = 0; index < lines.length; index++) {
  // for every line in the dataset, split the word on that line in half
  //let substrings = lines[0].substring(lines[0],lines[0].length/2);
  let firstWord = lines[index].slice(0, lines[index].length / 2);
  let secondWord = lines[index].slice(lines[index].length / 2);

  // then check each letter of the first substring, to see if it exists in the second
  for (let i = 0; i < firstWord.length; i++) {
    if (secondWord.includes(firstWord[i])) {
      count += results.indexOf(firstWord[i]) + 1;

      // We need to break out, since either word could be the one with the wrong character.
      break;
    }
  }
}

console.log(count);
