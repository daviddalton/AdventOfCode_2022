import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\n\n');

let max: number = 0
data.forEach(elf => {
    const foodItems = elf.split("\n")
    let total = 0
    foodItems.forEach(_ => {
        total = total + Number.parseInt(_);
    })
    if (total > max) {
        max = total;
    }
})
console.log(max)
