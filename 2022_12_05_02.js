const fs = require('fs');
const input = fs.readFileSync('2022_12_05_01.txt', 'utf8').toString();

let stacks = {
  1: 'RNFVLJSM',
  2: 'PNDZFJWH',
  3: 'WRCDG',
  4: 'NBS',
  5: 'MZWPCBFN',
  6: 'PRMW',
  7: 'RTNGLSW',
  8: 'QTHFNBV',
  9: 'LMHZNF'
};

input.split('\n').forEach(v => {
  const parsed = v.split(' ');
  const length = stacks[parsed[3]].length;
  const tM = stacks[parsed[3]].substring(length - Number(parsed[1]), length);
  stacks[parsed[5]] = stacks[parsed[5]] + tM;
  stacks[parsed[3]] = stacks[parsed[3]].substring(0, length - Number(parsed[1]));
});

let output = ''
for (let i = 1; i <= 9; i++) {
  output += stacks[i].substring(stacks[i].length - 1)
}
console.log(output);

