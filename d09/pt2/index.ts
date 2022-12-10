import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\n');

let headX = 0
let headY = 0
let tailX = 0
let tailY = 0

let locations = new Set<String>(["0 0"])

data.forEach(_ => {
    let direction = _.split(" ")[0]
    let count = parseInt(_.split(" ")[1])

    for (let i = 0; i < count; i++) {
        if (direction === "R") {
            headX += 1
        } else if (direction === "L") {
            headX -= 1
        } else if (direction === "U") {
            headY += 1
        } else  {
            headY -= 1
        }
        if (headX - tailX > 1 && headY - tailY == 1) {
            tailX++
            tailY++
        } else if (headX - tailX == 1 && headY - tailY > 1) {
            tailX++
            tailY++
        } else if (headX - tailX < -1 && headY - tailY == 1) {
            tailX--
            tailY++
        } else if (headX - tailX > 1) {
            tailX++
        } else if (headY - tailY > 1) {
            tailY++
        } else if (headX - tailX < -1) {
            tailX--
        } else if (headY - tailY < -1) {
            tailY--
        }

        locations.add(tailX + " " + tailY)
        console.log("Input: " + _)
        console.log("<" + headX + "," + headY + ">", "<" + tailX + "," + tailY + ">")
        console.log("-------------------------")
    }

})

console.log(locations)
console.log(locations.size)