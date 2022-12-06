import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');

for (let i = 3; i < rawData.length; i++) {
    let temp: string[] = []
    temp.push(rawData[i])
    temp.push(rawData[i - 1])
    temp.push(rawData[i - 2])
    temp.push(rawData[i - 3])

    console.log(temp)
    if (new Set(temp).size == temp.length) {
        console.log(i + 1)
        break;
    }
}