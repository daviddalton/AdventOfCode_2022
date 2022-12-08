import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\n');

let bestVisibilityScore = 0
for (let i = 1; i < data.length - 1; i++) {
    let row = data[i]
    row.split("").forEach((tree, index) => {
        if (index != 0 && index != row.length - 1) {
            let leftVisibility = 0
            for (let j = index; j > 0; j--) {
                if (tree >= row[j - 1]) {
                    if (tree == row[j - 1]) {
                        leftVisibility++
                        break
                    } else {
                        leftVisibility++
                    }
                } else {
                    leftVisibility++
                    break
                }
            }
            let rightVisibility = 0
            for (let j = index; j < row.length ; j++) {
                if (tree >= row[j + 1]) {
                    if (tree == row[j + 1]) {
                        rightVisibility++
                        break
                    } else {
                        rightVisibility++
                    }
                } else {
                    rightVisibility++
                    break
                }
            }
            let upVisibility = 0
            for (let j = i; j > 0; j--) {
                let itemAbove = data[j - 1].split("")[index]
                if (tree >= itemAbove) {
                    if (tree == itemAbove) {
                        upVisibility++
                        break
                    } else {
                        upVisibility++
                    }
                } else {
                    upVisibility++
                    break
                }
            }
            let downVisibility = 0
            for (let j = i; j < data.length - 1; j++) {
                let itemBelow = data[j + 1].split("")[index]
                if (tree >= itemBelow) {
                    if (tree == itemBelow) {
                        downVisibility++
                        break
                    } else {
                        downVisibility++
                    }
                } else {
                    downVisibility++
                    break
                }
            }
            let visibilityScore = leftVisibility * rightVisibility * downVisibility * upVisibility
            if (visibilityScore > bestVisibilityScore) {
                bestVisibilityScore = visibilityScore
            }
        }
    })
}

console.log(bestVisibilityScore)