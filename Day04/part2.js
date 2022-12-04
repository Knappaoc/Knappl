const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString();
const lines = input.split(/\r?\n/);

let count = 0;

for (let index = 0; index < lines.length; index++) {
  // for each line, split into two elfs
  let elfpairs = lines[index].split(",");
  let elfOne = elfpairs[0].split("-");
  let elfTwo = elfpairs[1].split("-");

  // check if either elfs assignment exists fully in the other.
  console.log(elfOne[0] > elfTwo[0]);
  //find out which of the pairs has the largest number
  if (parseInt(elfOne[1]) >= parseInt(elfTwo[1])) {
    if (parseInt(elfOne[0]) <= parseInt(elfTwo[1])) {
      count++;
    }
  } else {
    if (parseInt(elfTwo[0]) <= parseInt(elfOne[1])) {
      count++;
    }
  }
}

console.log(count);
