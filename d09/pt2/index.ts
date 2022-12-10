import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\n');

let locations = new Set<String>()
let knots: number[][] = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
//                        H     1     2     3     4     5     6     7     8     9

data.forEach(_ => {
    let direction = _.split(" ")[0]
    let count = parseInt(_.split(" ")[1])

    console.log(_)
    for (let i = 0; i < count; i++) {
        if (direction === "R") {
            knots[0][0] += 1
        } else if (direction === "L") {
            knots[0][0] -= 1
        } else if (direction === "U") {
            knots[0][1] += 1
        } else  {
            knots[0][1] -= 1
        }
        knots.forEach((knot, index) => {
            if (index != 0) {
                let headX = knots[index - 1][0]
                let headY = knots[index - 1][1]
                let knotX = knot[0]
                let knotY = knot[1]
                // console.log(knots)
                // console.log(_)
                // console.log("<" + headX + "," + headY + ">" + " " + "<" + knotX + "," + knotY + ">")

                if (headX - knotX > 1 && headY - knotY > 1) {
                    knot[0]++
                    knot[1]++
                } else if (headX - knotX < -1 && headY - knotY < -1) {
                    knot[0]--
                    knot[1]--
                } else if (headX - knotX > 1 && headY - knotY == 1) {
                    knot[0]++
                    knot[1]++
                } else if (headX - knotX > 1 && headY - knotY == -1) {
                    knot[0]++
                    knot[1]--
                } else if (headX - knotX == 1 && headY - knotY > 1) {
                    knot[0]++
                    knot[1]++
                } else if (headX - knotX < -1 && headY - knotY == 1) {
                    knot[0]--
                    knot[1]++
                } else if (headX - knotX == -1 && headY - knotY > 1) {
                    knot[0]--
                    knot[1]++
                } else if (headX - knotX == -1 && headY - knotY < -1) {
                    knot[0]--
                    knot[1]--
                } else if (headX - knotX == 1 && headY - knotY < -1) {
                    knot[0]++
                    knot[1]--
                } else if (headX - knotX < -1 && headY - knotY == -1) {
                    knot[0]--
                    knot[1]--
                } else if (headX - knotX > 1) {
                    knot[0]++
                } else if (headY - knotY > 1) {
                    knot[1]++
                } else if (headX - knotX < -1) {
                    knot[0]--
                } else if (headY - knotY < -1) {
                    knot[1]--
                }
            }
        })

        locations.add(knots[9][0] + " " + knots[9][1])
    }
    // console.log(knots)
})

console.log(locations)
console.log(locations.size)