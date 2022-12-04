const fs = require('fs');
const input = fs.readFileSync('2022_12_04_01.txt', 'utf8').toString();
let result = 0;

input.split('\n').every(v => {
    const f = v.substring(0, v.indexOf(','));
    const s = v.substring(v.indexOf(',') + 1);
    const f1 = Number(f.substring(0,f.indexOf('-')));
    const f2 = Number(f.substring(f.indexOf('-') + 1));
    const s1 = Number(s.substring(0,s.indexOf('-')));
    const s2 = Number(s.substring(s.indexOf('-') + 1));

    if ((f1 >= s1 && f2 <= s2) || (s1 >= f1 && s2 <= f2)) {
        result+=1;
    }
    return true;
});

console.log(result);