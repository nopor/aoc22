const fs = require('fs');
const input = fs.readFileSync('2022_12_05_01_01.txt', 'utf8').toString();

const parsedStacks = {};
let secondPart = false;
input.split('\n').forEach(v => {
  if (!v.length) {
    secondPart = true;
  } else if (secondPart) {
    const parsed = v.split(' ');
    const length = parsedStacks[parsed[3]].length;
    const tM = [...parsedStacks[parsed[3]].substring(length - Number(parsed[1]), length)].reverse().join("");
    parsedStacks[parsed[5]] = parsedStacks[parsed[5]] + tM;
    parsedStacks[parsed[3]] = parsedStacks[parsed[3]].substring(0, length - Number(parsed[1]));
  } else if (!secondPart && v.includes('[')) {
    for (let i = 0; i < v.length; i += 4) {
      if (!parsedStacks[Math.floor(i / 4) + 1]) 
        parsedStacks[Math.floor(i / 4) + 1] = '';
      if (v.charAt(i + 1) && v.charAt(i + 1).trim() !== '') {
        parsedStacks[Math.floor(i / 4) + 1] = v.charAt(i + 1) + parsedStacks[Math.floor(i / 4) + 1]
      }
    }
  }
});

let output = ''
for (let i = 1; i <= 9; i++) {
  output += parsedStacks[i].substring(parsedStacks[i].length - 1)
}
console.log(output);

