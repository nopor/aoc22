const fs = require('fs');
const input = fs.readFileSync('2022_12_07_01.txt', 'utf8').toString().split('\n');

const dirs = {};
let currentDir = '';

input.forEach(line => {
    if (line.startsWith('$')) {
        const start = line.indexOf('$');
        const command = line.substring(start + 2)
        if (command.startsWith('cd')) {
            let dir = command.substring(command.indexOf(' ') + 1);
            if (dir === '..') {
                console.log(currentDir)
                currentDir = currentDir.substring(0,currentDir.lastIndexOf('/'));
            } else {
                if (!dir.endsWith('/')) dir += '/';
                currentDir += dir;
            }
        }
    }
    if (line.match(/^[0-9]/g)) {
        const size = line.substring(0, line.indexOf(' '));
        const file = line.substring(line.indexOf(' ') + 1);
        if (!dirs[currentDir]) dirs[currentDir] = {};
        dirs[currentDir][file] = Number(size);
    }
});

let result = 0;
const rDirs = {};
Object.entries(dirs).forEach(v => {
    rDirs[v[0]] = Object.values(v[1]).reduce((a, b) => a + b, 0);
});
const fDirs = {};
Object.entries(rDirs).sort().reverse().forEach(v => {
    const dirStructure = v[0].split('/');
    for (let i = 0; i < dirStructure.length; i++) {
        const path = dirStructure.slice(0, i).join('/') + '/';
        if (!fDirs[path]) fDirs[path] = 0;
        fDirs[path] += Number(v[1]);
    }
});
console.log(fDirs);
Object.entries(fDirs).forEach(v => {
    if (Number(v[1]) <= 100000) result += Number(v[1]);
});
console.log(result)
