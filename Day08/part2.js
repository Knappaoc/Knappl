const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString();
let lines = input.split(/\r?\n/);

let results = [[]];

for(let index = 0; index<lines.length; index++) {
  for(let position = 0; position<lines[index].length; position++) {
    if(results[index] === undefined) {
      results[index] = []
    }
      results[index][position] = [parseInt(lines[index].charAt(position)), 0];
  }
}

for (let row = 0; row < results.length; row++) {
  for(let column = 0; column < results[row].length; column++) {
    let bottom =0;
    let left = 0
    let right = 0;
    let top = 0;
    //if its on an edge, score is 0
    if(row != 0 && column != 0) {
      //find above
      let count = 1;
      for(let i = row; i>0; i--) {
        top++;
        if(parseInt(results[row][column]) <= parseInt(results[row-count][column])) {
          break;
        }
        count++;
      }
      
      //find below
      count = 1;
      for(let i = row; i<results.length; i++) {
        bottom++;
        console.log(bottom)
        if(parseInt(results[row][column]) <= parseInt(results[row+count][column])) {
          break;
        }
        count++;
      }
      results[row][column][1] = bottom;

      //find right

      //find left
    }
  }
}

console.log(results)
