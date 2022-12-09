const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString();
let lines = input.split(/\r?\n/);

let results = [[]];

// Set horizontal visibility from left
for(let index = 0; index<lines.length; index++) {
  var highest = 0;
  for(let position = 0; position<lines[index].length; position++) {
    visible = 0;
    // stupid JS defining dynamic arrays
    if(results[index] === undefined) {
      results[index] = []
    }
    if(position == 0) {
      results[index][position] = [parseInt(lines[index].charAt(position)), 1];
      highest = parseInt(lines[index].charAt(position));
    } else {
      if( parseInt(lines[index].charAt(position)) > highest) {
        highest =  parseInt(lines[index].charAt(position));
        visible = 1;
      }
      results[index][position] = [parseInt(lines[index].charAt(position)), visible];
    }
  }
}

// Set horizontal visibility from right
for(let index = 0; index<lines.length; index++) {
  var highest = 0;
  for(let position = lines[index].length-1; position>=0; position--) {
    if(position == lines[index].length-1) {
      results[index][position] = [parseInt(lines[index].charAt(position)), 1];
      highest = parseInt(lines[index].charAt(position));
    } else {
      if( parseInt(lines[index].charAt(position)) > highest) {
        highest =  parseInt(lines[index].charAt(position));
        results[index][position] = [parseInt(lines[index].charAt(position)), 1];
      }
    }
  }
}
let highest1 = [];
// Set vertical visibility from top
for(let index = 0; index<lines.length; index++) {
  for(let position =0; position<lines[index].length; position++) {
    if(index == 0) {
      results[index][position] = [parseInt(lines[index].charAt(position)), 1];
      highest1[position] = parseInt(lines[index].charAt(position));
    } else {
      if( parseInt(lines[index].charAt(position)) > highest1[position]) {
        highest1[position] =  parseInt(lines[index].charAt(position));
        results[index][position] = [parseInt(lines[index].charAt(position)), 1];
      }
    }
  }
}

let highest2 = []

  // Set vertical visibility from bottom
for(let index = lines.length-1; index>= 0; index--) {
  for(let position = 0; position < lines[index].length; position++) {
    // Set the bottom to be visible by default
    if(index == lines[index].length-1) {
      results[index][position] = [parseInt(lines[index].charAt(position)), 1];
      highest2[position] = parseInt(lines[index].charAt(position));
    } else {
      if( parseInt(lines[index].charAt(position)) > highest2[position]) {
        highest2[position] =  parseInt(lines[index].charAt(position));
        results[index][position] = [parseInt(lines[index].charAt(position)), 1];
      }
    }
  }
}

let trees = 0;
for(let index = 0; index < results.length; index++) {
  for (let position = 0; position< results[index].length; position++) {
    trees += parseInt(results[index][position][1]);
  }
}

console.log(results)
console.log(trees)