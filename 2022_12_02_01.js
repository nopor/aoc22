const fs = require('fs');
const input = fs.readFileSync('2022_12_02_01.txt', 'utf8').toString();
const winCon = {
    'A X': 4,
    'A Y': 8,
    'A Z': 3,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 7,
    'C Y': 2,
    'C Z': 6,
  };
  
  let result = 0;
  input.split("\n").forEach(v => {
    result += winCon[v];
  });
  
  console.log(result);