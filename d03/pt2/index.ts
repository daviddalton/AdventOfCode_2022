import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\n');

const letterMap = new Map<string, number>(
    [
        ["a", 1],
        ["b", 2],
        ["c", 3],
        ["d", 4],
        ["e", 5],
        ["f", 6],
        ["g", 7],
        ["h", 8],
        ["i", 9],
        ["j", 10],
        ["k", 11],
        ["l", 12],
        ["m", 13],
        ["n", 14],
        ["o", 15],
        ["p", 16],
        ["q", 17],
        ["r", 18],
        ["s", 19],
        ["t", 20],
        ["u", 21],
        ["v", 22],
        ["w", 23],
        ["x", 24],
        ["y", 25],
        ["z", 26],
        ["A", 27],
        ["B", 28],
        ["C", 29],
        ["D", 30],
        ["E", 31],
        ["F", 32],
        ["G", 33],
        ["H", 34],
        ["I", 35],
        ["J", 36],
        ["K", 37],
        ["L", 38],
        ["M", 39],
        ["N", 40],
        ["O", 41],
        ["P", 42],
        ["Q", 43],
        ["R", 44],
        ["S", 45],
        ["T", 46],
        ["U", 47],
        ["V", 48],
        ["W", 49],
        ["X", 50],
        ["Y", 51],
        ["Z", 52],
    ]
)

let total = 0;

for (let i = 0; i < data.length; i = i + 3) {
    let first = data[i];
    let second = data[i + 1];
    let third = data[i + 2];
    let go = true;

    for (let j = 0; j < first.length; j++) {
        if (go) {
            let letter = first[j];
            if (second.includes(letter) && third.includes(letter)) {
                let value = letterMap.get(letter);
                if (value != undefined) {
                    total += value;
                    go = false;
                }
            }
        }
    }
}

console.log(total)
