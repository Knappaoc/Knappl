const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString();
const lines = input.split(/\r?\n/);

let count = 0;
let instructionStart = 0;
// there are 4 characters for each stack, 3 for the last one in the line.
// so the number of stacks is just (lines[0]+1)/4

let amountOfStacks = (lines[0].length + 1) / 4;

let results = [[]];

// I do this because I don't know how to dynamically initialize a 2d array in JS
for (let i = 0; i < amountOfStacks; i++) {
  results[i] = [];
}

let index = 0;
// fill  up the stacks
for (index; index < lines.length; index++) {
  // if the line starts with ' 1', then we are done with the cases, move onto the instructions
  if (lines[index].includes(" 1")) {
    instructionStart = index + 1;
    break;
  }

  // do the first case
  if (lines[index].charAt(1) !== " ") {
    // add the case to the first stack. unshift adds to the start of the array, instead of using push
    results[0].unshift(lines[index].charAt(1));
  }

  for (let i = 1; i < amountOfStacks; i++) {
    // for each stack, figure out if a crate exists in it.
    if (lines[index].charAt(i * 4 + 2) !== " ") {
      // add the case to the first stack.
      results[i].unshift(lines[index].charAt(i * 4 + 1));
    }
  }
}

// run through the instructions
for (index = index + 2; index < lines.length; index++) {
  //for each line, split it by space. We only care about points 1,3 and 5
  let instructions = lines[index].split(" ");

  // for the number of cases to move
  for (let i = 0; i < instructions[1]; i++) {
    // move that case
    results[instructions[5] - 1].push(results[instructions[3] - 1].pop());
  }
}

for (let i = 0; i < results.length; i++) {
  console.log(results[i].pop());
}
