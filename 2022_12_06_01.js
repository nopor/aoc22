const fs = require('fs');
const input = fs.readFileSync('2022_12_06_01.txt', 'utf8').toString();

let result = 0;
const iarr = [...input];
function timesPartOfStr(arr, char) {
  let t = 0;
  for (var i = 0; i < arr.length; i++)
    if (arr[i] === char) t += 1;
  return t;
}
iarr.every((v, i) => {
  const current = [...(iarr[i] + iarr[i + 1] + iarr[i + 2] + iarr[i + 3])];
  if (
    timesPartOfStr(current, iarr[i]) === 1 &&
    timesPartOfStr(current, iarr[i + 1]) === 1 &&
    timesPartOfStr(current, iarr[i + 2]) === 1
  ) {
    result = i + 4;
    return false;
  }
  return true;
});

console.log(result);
