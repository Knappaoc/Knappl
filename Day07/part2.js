const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString();
let lines = input.split(/\r?\n/);

let count = 0;
let directoties = [];

function hasNumber(myString) {
  return /\d/.test(myString);
}

function recurse(command) {
  var line;
  var sum = 0;
  var subDirs = 0;
  while(line = lines.shift()) {
    // if line is a file, add the file size to this directories file size count
    if(hasNumber(line)) {
        sum+= parseInt(line.split(' ')[0])
    }
    else if (line === "$ cd .." || lines.length==0) {
      count += sum;
      directoties.push([sum + subDirs, command.split(" ")[2]])
      return sum + subDirs;
    }
    else if(line != "$ cd /" && line != "$ ls" && !line.includes("dir ")) {
        subDirs += recurse(line);
    }
  }
  if(!isNaN(sum)) {
    count += sum;
    directoties.push([sum + subDirs, command.split(" ")[2]])
  }
}
recurse(lines.shift())



let remainingSpace = 70000000 - count;
let sizeToDelete = 30000000 - remainingSpace
let fileToDelete = 0;
let highest = 0;
for(let i = 0; i < directoties.length; i++) {
  if(parseInt(directoties[i][0]) > highest)
    highest = parseInt(directoties[i][0])
  if(parseInt(directoties[i][0]) >= sizeToDelete) {
    console.log(parseInt(directoties[i][0]))
    if(fileToDelete == 0 || parseInt(directoties[i][0]) < fileToDelete) {
      fileToDelete = parseInt(directoties[i][0]);
    }
  }
}
console.log(remainingSpace)
console.log(sizeToDelete)
console.log(fileToDelete)
