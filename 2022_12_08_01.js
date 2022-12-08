const fs = require('fs');
const input = fs.readFileSync('2022_12_08_01.txt', 'utf8').toString().split('\n');

let amount = (input.length - 2) * 2 + input[0].length * 2;

for (let i = 1; i < input.length - 1; i++) {
    const line = [...input[i]]

    for (let j = 1; j < line.length - 1; j++) {
        const t = line[j];
        const left = line.slice(0,j);
        const right = line.slice(j + 1);
        const top = [];
        const bottom = [];
        for (let k = 0; k < input.length; k++) {
            if (k < i) {
                top.push([...input[k]][j]);
            } else if (k > i) {
                bottom.push([...input[k]][j]);
            }
        }
        if (
            Math.max(...top) < t ||
            Math.max(...right) < t ||
            Math.max(...bottom) < t ||
            Math.max(...left) < t
            ) {
            amount++;
        }
    }
}
console.log(amount);
