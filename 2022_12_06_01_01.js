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
function containsCharactersTwice(arr) {
  let twice = false;
  for(let i = 0; i < arr.length - 1; i++) {
    if (timesPartOfStr(arr, arr[i]) > 1) {
      twice = true;
      break;
    }
  }
  return twice;
}

iarr.every((v, i) => {
  const message = [...input.substring(i, i + 4)];
  if (!containsCharactersTwice(message)) {
    result = i + 4;
    return false;
  }
  return true;
});

console.log(result);
