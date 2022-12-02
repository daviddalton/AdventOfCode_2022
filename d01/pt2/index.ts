import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\n\n');

let elves: number[] = [];
data.forEach(elf => {
    const foodItems = elf.split("\n")
    let total = 0
    foodItems.forEach(_ => {
        total = total + Number.parseInt(_);
    })
    elves.push(total)
})
let sorted = elves.sort((n1,n2) => n2 - n1);
console.log(sorted[0] + sorted[1] + sorted[2])