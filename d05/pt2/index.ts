import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');

const shipyard = rawData.split('\n\n')[0].trim().split('\n').reverse()
const instructions = rawData.split('\n\n')[1].split('\n')

let shipyardTwoDim: string[][] = []

const numCols = shipyard[0].split('   ').length

shipyard.forEach((_, index) => {
    const row: string[] = _.split(' ')
    if (index != 0) {
        for (let i = 0; i < numCols; i++) {
            if (shipyardTwoDim[i] == undefined) {
                shipyardTwoDim.push([])
            }
            if (row[i] != "[]") {
                shipyardTwoDim[i].push(row[i])
            }
        }
    }
})

instructions.forEach(_ => {
    const numToMove = Number.parseInt(_.replaceAll(" ", "").split(RegExp("move(.*?)from"))[1])
    const from = Number.parseInt(_.replaceAll(" ", "").split(RegExp("from(.*?)to"))[1]) - 1
    const to = Number.parseInt(_.replaceAll(" ", "").split(RegExp("to(.*?)"))[2]) - 1

    for (let i = 0; i < numToMove; i++) {
        shipyardTwoDim[to].push(shipyardTwoDim[from][shipyardTwoDim[from].length - numToMove + i])
        shipyardTwoDim[from].splice(shipyardTwoDim[from].length - numToMove + i, 1)
    }
})

let result = ""
shipyardTwoDim.forEach(_ => {
    result += _[_.length - 1].split(RegExp("\\[(.*?)\]"))
})

console.log(result.replaceAll(",", ""))