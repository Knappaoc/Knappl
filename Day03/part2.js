const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString();
const lines = input.split(/\r?\n/);

var results = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let count = 0;

// we are looping through groups of 3
for (let index = 0; index < lines.length; index += 3) {
  // for every letter in the first word that doesn't exist in second and third word, remove it from the first word. The one that is left shoudl be the answer

  let firstWord = lines[index];
  let secondWord = lines[index + 1];
  let thirdWord = lines[index + 2];

  // let realFirstWord = lines[index];

  // for( let i = 0; i<firstWord.length; i++) {
  //   if(!secondWord.includes(firstWord[i])) {
  //     realFirstWord.replace(firstWord[i], '');
  //   }
  // }

  // let superRealFirstWord = realFirstWord;
  // for( let i = 0; i<realFirstWord.length; i++) {
  //   if(!thirdWord.includes(realFirstWord[i])) {
  //     superRealFirstWord.replace(realFirstWord[i], '');
  //   }
  // }
  // console.log(superRealFirstWord);

  for (let i = 0; i < results.length; i++) {
    if (
      firstWord.includes(results[i]) &&
      secondWord.includes(results[i]) &&
      thirdWord.includes(results[i])
    ) {
      console.log(results[i]);
      count += i + 1;
      break;
    }
  }
}

console.log(count);
