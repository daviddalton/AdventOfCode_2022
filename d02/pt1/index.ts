import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\n');

// A -> Rock
// B -> Paper
// C -> Scissors

// X -> Rock
// Y -> Paper
// Z -> Scissors

// 1 -> Rock
// 2 -> Paper
// 3 -> Scissors

// 0 -> Loss
// 3 -> Draw
// 6 -> Win

let totalScore = 0;

data.forEach(round => {
    let me = round.split(" ")[1]
    let them = round.split(" " )[0]

    let myScore = 0;

    if (me === "X") {
        myScore += 1;
        if (them === "A") {
            myScore += 3;
        }
        if (them === "B") {
            // lose
        }
        if (them === "C") {
            myScore += 6;
        }
    }
    if (me === "Y") {
        myScore += 2;
        if (them === "A") {
            myScore += 6;
        }
        if (them === "B") {
            myScore += 3;
        }
        if (them === "C") {
            // lose
        }
    }
    if (me === "Z") {
        myScore += 3;
        if (them === "A") {
            // lose
        }
        if (them === "B") {
            myScore += 6;
        }
        if (them === "C") {
            myScore += 3;
        }
    }
    totalScore += myScore;
})

console.log(totalScore)

