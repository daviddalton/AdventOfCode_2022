import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\n');

let total = 0;
data.forEach(_ => {
    const left = _.split(",")[0]
    const right = _.split(",")[1]

    const leftLower = Number.parseInt(left.split("-")[0]);
    const leftHigher = Number.parseInt(left.split("-")[1]);

    const rightLower = Number.parseInt(right.split("-")[0]);
    const rightHigher = Number.parseInt(right.split("-")[1]);

    if (leftLower >= rightLower && leftLower <= rightHigher) {
        total++
    } else if (leftHigher >= rightLower && leftHigher <= rightHigher) {
        total++
    } else if (leftLower < rightLower && leftHigher > rightHigher) {
        total++
    }
})

console.log(total)