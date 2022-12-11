const fs = require('fs');
const input = fs.readFileSync('2022_12_11.txt', 'utf8').toString().split('\n');

class Monkey {
    constructor(items, operation, tester) {
        this.items = [...items];
        this.operation = operation;
        this.tester = tester;
        this.inspected = 0;
    }
}
const monkeysP1 = {};
const monkeysP2 = {};
const highestValueArr = [];
for (let i = 0; i < input.length; i += 7) {
    const n = input[i + 1].match(/[0-9]/g).join('');
    const items = input[i + 2].split(':')[1].split(',');
    const op1 = input[i + 3].split('=')[1].trimStart().split(' ');
    const op = (old) => {
        const o = BigInt(eval(`${op1[2]}`));
        return eval(`${old}${op1[1]}${o}`);
    };
    const divider = input[i + 4].match(/[0-9]/g).join('');
    highestValueArr.push(divider);
    const tester = (testNumber) => {
        if (testNumber % divider === 0) {
            return input[i + 5].match(/[0-9]/g).join('');
        } else {
            return input[i + 6].match(/[0-9]/g).join('');
        }
    };

    monkeysP1[n] = new Monkey(items, op, tester);
    monkeysP2[n] = new Monkey(items, op, tester);
}

const CALM = 3;
for (let i = 0; i < 20; i++) {
    Object.values(monkeysP1).forEach(m => {
        while(m.items.length) {
            m.inspected++;
            const newWorry = Math.floor(m.operation(BigInt(m.items.shift())) / CALM);
            monkeysP1[m.tester(newWorry)].items.push(newWorry);
        }
    });
}
const [p1t1, p1t2] = Object.values(monkeysP1).map(m => m.inspected).sort((a, b) => b - a);
console.log(`Part 1: ${p1t1 * p1t2}`)

const baseMod = highestValueArr.reduce((a, b) => a * b, 1);
for (let i = 0; i < 10_000; i++) {
    Object.values(monkeysP2).forEach(m => {
        while(m.items.length) {
            m.inspected++;
            const newWorry = m.operation(BigInt(m.items.shift())) % baseMod;
            monkeysP2[m.tester(newWorry)].items.push(newWorry);
        }
    });
}

const [p2t1, p2t2] = Object.values(monkeysP2).map(m => m.inspected).sort((a, b) => b - a);
console.log(`Part 2: ${p2t1 * p2t2}`)
