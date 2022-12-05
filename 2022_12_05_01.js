const fs = require('fs');
const input = fs.readFileSync('2022_12_05_01.txt', 'utf8').toString();

const stacks = {
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

let result = 0;

input.split('\n').every(v => {
  const parsed = v.split(' ');
});
