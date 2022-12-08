import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\n');

let totalVisible = (data.length * 2) + (data[0].length * 2) - 4
for (let i = 1; i < data.length - 1; i++) {
    let row = data[i]
    row.split("").forEach((tree, index) => {
        if (index != 0 && index != row.length - 1) {
            let tallestLeft = true
            for (let j = index; j > 0; j--) {
                if (tree <= row[j - 1]) {
                    tallestLeft = false
                    break
                }
            }
            let tallestRight = true
            for (let j = index; j < row.length ; j++) {
                if (tree <= row[j + 1]) {
                    tallestRight = false
                    break
                }
            }
            let tallestUp = true
            for (let j = i; j > 0; j--) {
                let itemAbove = data[j - 1].split("")[index]
                if (tree <= itemAbove) {
                    tallestUp = false
                    break
                }
            }
            let tallestDown = true
            for (let j = i; j < data.length - 1; j++) {
                let itemBelow = data[j + 1].split("")[index]
                if (tree <= itemBelow) {
                    tallestDown = false
                    break
                }
            }
            if (tallestDown || tallestLeft || tallestRight || tallestUp) {
                totalVisible++
            }
        }
    })
}

console.log(totalVisible)