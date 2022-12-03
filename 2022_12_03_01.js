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

input.split('\n').forEach(v => {
    const fh = v.substring(0, v.length / 2);
    const sh = v.substring(v.length / 2, v.length);
    const same = [];
    [...fh].forEach(l => {
        if(sh.includes(l) && !same.includes(l))
            same.push(l);
    });

    same.forEach(s => result += getValue(s))
})

console.log(result);