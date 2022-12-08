const fs = require('fs');
const input = fs.readFileSync('2022_12_07_01.txt', 'utf8').toString().split('\n');

const dirFiles = {};
let currentDir = '';
const dirSizes = {};
const dirTotalSizes = {};
input.forEach(line => {
    if (line.startsWith('$')) {
        const start = line.indexOf('$');
        const command = line.substring(start + 2)
        if (command.startsWith('cd')) {
            let dir = command.substring(command.indexOf(' ') + 1);
            if (dir === '..') {
                currentDir = currentDir.substring(0, currentDir.lastIndexOf('/'));
            } else {
                if (!dir.endsWith('/')) dir += '/';
                currentDir += dir;
            }
        }
    }
    if (line.match(/^[0-9]/g)) {
        const size = line.substring(0, line.indexOf(' '));
        const file = line.substring(line.indexOf(' ') + 1);

        if (!dirSizes[currentDir]) dirSizes[currentDir] = 0
        if (!dirFiles[currentDir + file]) {
            dirSizes[currentDir] += Number(size)
            const dirStructure = currentDir.split('/');
            for (let i = 1; i < dirStructure.length; i++) {
                const path = dirStructure.slice(0, i).join('/') + '/';
                if (!dirTotalSizes[path]) dirTotalSizes[path] = 0;
                dirTotalSizes[path] += Number(size);
            }
        }
        dirFiles[currentDir + file] = Number(size);

    }
});

const needed = 30000000 - (70000000 - dirTotalSizes['/']);
const min = Math.min(...Object.values(dirTotalSizes).filter(a => a >= needed));
console.log(min);
