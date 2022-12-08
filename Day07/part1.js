const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString();
let lines = input.split(/\r?\n/);

let count = 0;

function hasNumber(myString) {
  return /\d/.test(myString);
}

function recurse() {
  var line;
  var sum = 0;
  while(line = lines.shift()) {
    console.log(lines)
    // if line is a file
    if(hasNumber(line)) {
        sum+= parseInt(line.split(' ')[0])
    }
    else if (line === "$ cd ..") {
      count += sum > 100000 ? 0 : sum;
      return sum;
    }
    else if(line != "$ cd /" && line != "$ ls" && !line.includes("dir ")) {
        sum += recurse();
    }
  }
}

recurse()
console.log(count)