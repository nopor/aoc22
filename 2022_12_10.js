const fs = require('fs');
const input = fs.readFileSync('2022_12_10.txt', 'utf8').toString().split('\n');
const signals = {
    20: 1,
    60: 1,
    100: 1,
    140: 1,
    180: 1,
    220: 1
};

let registerX = 1;
let cycle = 0;
const crt = new Array(240).fill(' ');
function signal() {
    if (signals[cycle]) {
        signals[cycle] = cycle * registerX;
    }
    const offset = (cycle - 1) % 40;
    crt[cycle - 1] = registerX - 1 <= offset && offset <= registerX + 1 ? '█' : ' ';

}
for (line of input) {
    if (line === 'noop') {
        cycle += 1;
        signal();
    } else { // assuming only two different inputs
        const [, amount] = line.split(' ');
        cycle += 1;
        signal();
        cycle += 1;
        signal();
        registerX += Number(amount);
    }
}

console.log(`Signal strength: ${Object.values(signals).reduce((a, b) => a + b)}`);

while (crt.length) {
    console.log(crt.splice(0, 40).join(''))
}
