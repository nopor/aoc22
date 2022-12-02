const fs = require('fs');
const input = fs.readFileSync('2022_12_02_01.txt', 'utf8').toString();
const winCon = {
    // lost
    'A X': 3,
    // draw
    'A Y': 4,
    // won
    'A Z': 8,
    // lost
    'B X': 1,
    // draw
    'B Y': 5,
    // won
    'B Z': 9,
    // lost
    'C X': 2,
    // draw
    'C Y': 6,
    // won
    'C Z': 7,
  };
  
  let result = 0;
  input.split("\n").forEach(v => {
    result += winCon[v];
  });
  
  console.log(result);