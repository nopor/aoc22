const fs = require('fs');
const input = fs.readFileSync('2022_12_01_01.txt', 'utf8').toString();
const inputArray = input.split('\n');
const elfesCalories = [];
let elf = 0;
inputArray.forEach((v, i) => {
  if(v === '') {
    elf++;
  } else {
    if(!elfesCalories[elf]) {
      elfesCalories.push(Number(v));
    } else {
      elfesCalories[elf] += Number(v);
    }
  }
});

console.log(Math.max(...elfesCalories));
