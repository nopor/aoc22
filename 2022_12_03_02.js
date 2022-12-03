const fs = require('fs');
const input = fs.readFileSync('2022_12_03_01.txt', 'utf8').toString();
let result = 0;

function getValue(char) {
    const internal = char + '';
    if (internal.match('[a-z]'))
        return internal.charCodeAt(0) - 96;
    if (internal.match('[A-Z]'))
        return internal.charCodeAt(0) - 64 + 26;
}

const inArr = input.split('\n')
for(let i = 0; i < inArr.length; i+=3) {
    [...inArr[i]].every(c => {
        if(inArr[i + 1].includes(c) && inArr[i + 2].includes(c)) {
            result += getValue(c);
            return false;
        }
        return true;
    });
}

console.log(result);