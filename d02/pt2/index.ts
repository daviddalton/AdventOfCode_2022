import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\n');

let totalScore = 0;

data.forEach(round => {
    let result = round.split(" ")[1]
    let them = round.split(" " )[0]

    let myScore = 0;

    if (them === "A") {
        if (result === "X") {
            //lose with scissors
            myScore += 3
        }
        if (result === "Y") {
            //draw with rock
            myScore += 4
        }
        if (result === "Z") {
            //win with paper
            myScore += 8
        }
    }
    if (them === "B") {
        if (result === "X") {
            // lose with rock
            myScore += 1
        }
        if (result === "Y") {
            // draw with paper
            myScore += 5
        }
        if (result === "Z") {
            // win with scissors
            myScore += 9
        }
    }
    if (them === "C") {
        if (result === "X") {
            // lose with paper
            myScore += 2
        }
        if (result === "Y") {
            // draw with scissors
            myScore += 6
        }
        if (result === "Z") {
            // win with rock
            myScore += 7
        }
    }
    totalScore += myScore;
})

console.log(totalScore)