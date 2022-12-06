import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');

for (let i = 3; i < rawData.length; i++) {
    let temp: string[] = []
    temp.push(rawData[i], rawData[i - 1], rawData[i - 2], rawData[i - 3], rawData[i - 4], rawData[i - 5], rawData[i - 6], rawData[i - 7], rawData[i - 8], rawData[i - 9], rawData[i - 10], rawData[i - 11], rawData[i - 12], rawData[i - 13])

    console.log(temp)
    if (new Set(temp).size == temp.length) {
        console.log(i + 1)
        break;
    }
}