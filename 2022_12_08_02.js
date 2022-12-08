const fs = require('fs');
const input = fs.readFileSync('2022_12_08_01.txt', 'utf8').toString().split('\n');

let scenic = 0;
let tempDistance = 0;

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
        tempDistance = left.reverse().findIndex(tree => tree >= t);

        const leftDistance = tempDistance >= 0 && tempDistance < left.length ? tempDistance + 1 : left.length;
        tempDistance = right.findIndex(tree => tree >= t);
        const rightDistance = tempDistance >= 0 && tempDistance < right.length ? tempDistance + 1 : right.length;
        tempDistance = top.reverse().findIndex(tree => tree >= t);
        const topDistance = tempDistance >= 0 && tempDistance < top.length ? tempDistance + 1 : top.length;
        tempDistance = bottom.findIndex(tree => tree >= t);
        const bottomDistance = tempDistance >= 0 && tempDistance < bottom.length ? tempDistance + 1 : bottom.length;
        
        const score = leftDistance * rightDistance * bottomDistance * topDistance;
        if (score > scenic) {
            console.log(`index ${i} ${j}`)
            console.log(topDistance)
            console.log(rightDistance)
            console.log(bottomDistance)
            console.log(leftDistance)
            scenic = score;
        }
    }
}
console.log(scenic);
