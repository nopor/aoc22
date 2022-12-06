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
  const message = [...(
    iarr[i] +
    iarr[i + 1] +
    iarr[i + 2] +
    iarr[i + 3] +
    iarr[i + 4] +
    iarr[i + 5] +
    iarr[i + 6] +
    iarr[i + 7] +
    iarr[i + 8] +
    iarr[i + 9] +
    iarr[i + 10] +
    iarr[i + 11] +
    iarr[i + 12] +
    iarr[i + 13]
  )]
  if (
    timesPartOfStr(message, iarr[i]) === 1 &&
    timesPartOfStr(message, iarr[i + 1]) === 1 &&
    timesPartOfStr(message, iarr[i + 2]) === 1 &&
    timesPartOfStr(message, iarr[i + 3]) === 1 &&
    timesPartOfStr(message, iarr[i + 4]) === 1 &&
    timesPartOfStr(message, iarr[i + 5]) === 1 &&
    timesPartOfStr(message, iarr[i + 6]) === 1 &&
    timesPartOfStr(message, iarr[i + 7]) === 1 &&
    timesPartOfStr(message, iarr[i + 8]) === 1 &&
    timesPartOfStr(message, iarr[i + 9]) === 1 &&
    timesPartOfStr(message, iarr[i + 10]) === 1 &&
    timesPartOfStr(message, iarr[i + 11]) === 1 &&
    timesPartOfStr(message, iarr[i + 12]) === 1
  ) {
    result = i + 14;
    return false;
  }
  return true;
});

console.log(result);
