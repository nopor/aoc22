const fs = require('fs');
const input = fs.readFileSync('2022_12_09_01.txt', 'utf8').toString().split('\n');

const moveRope = (knots) => {
    const distances = [
        ...Array(knots === 1 ? 2 : 10)
    ].map(() => [0, 0]);
    const tail = distances.at(-1);
    const visited = { 0: { 0: 1 } };
    const directions = {
        U: [-1, 0],
        R: [0, 1],
        D: [1, 0],
        L: [0, -1],
    };

    for (const move of input) {
        const [moveDir, moveAmount] = move.split(' ');
        const direction = directions[moveDir];
        for (let i = 0; i < moveAmount; i++) {
            let distance = distances[0];
            distance[0] += direction[0];
            distance[1] += direction[1];

            for (let j = 1; j < distances.length; j++) {
                const distance2 = distances[j];
                if (distance.some(x => Math.abs(x) >= 2)) {
                const direction2 = distance.map(Math.sign);
                    distance2[0] += direction2[0];
                    distance2[1] += direction2[1];
                    distance[0] -= direction2[0];
                    distance[1] -= direction2[1];
                }
                distance = distance2;
            }
            if(!visited[tail[0]]) visited[tail[0]] = {};
            visited[tail[0]][tail[1]] = 1;
        }
    }
    const result = Object.values(visited)
        .map(a => Object.values(a))
        .flat()
        .reduce((a, b) => a + b);
    console.log(result);
}
moveRope(1);
moveRope(2);