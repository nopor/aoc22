const fs = require('fs');
const input = fs.readFileSync('2022_12_06_01.txt', 'utf8').toString();

let result = 0;

function timesPartOfStr(arr, char) {
  let t = 0;
  for (var i = 0; i < arr.length; i++)
    if (arr[i] === char) t += 1;
  return t;
}
function containsCharactersTwice(arr) {
  let twice = false;
  const internal = [];
  for(let i = 0; i < arr.length - 1; i++) {
    internal.push(timesPartOfStr(arr, arr[i]));
    if (internal[internal.length - 1] > 1) {
      twice = true;
    }
  }
  
  return {
    containsDuplicates: twice,
    newIndex: internal.indexOf(Math.max(...internal))
  };
}
const padd = 14;
for(let i = 0; i < input.length; i++) {
  const message = [...input.substring(i, i + padd)];
  const check = containsCharactersTwice(message);
  if (!check.containsDuplicates) {
    result = i + padd;
    break;
  } else {
    i += check.newIndex;
  }
}

console.log(result);
