"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const inputFile = process.argv[2];
const rawData = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data = rawData.split('\n');
let myMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
]);
let pointsMap = new Map([
    ["A", 1],
    ["B", 2],
    ["C", 3],
    ["X", 1],
    ["Y", 2],
    ["Z", 3]
]);
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
// X -> Loss
// Y -> Draw
// Z -> Win
let totalScore = 0;
data.forEach(round => {
    let result = round.split(" ")[1];
    let them = round.split(" ")[0];
    let myScore = 0;
    if (them === "A") {
        if (result === "X") {
            //lose with scissors
            myScore += 3;
        }
        if (result === "Y") {
            //draw with rock
            myScore += 4;
        }
        if (result === "Z") {
            //win with paper
            myScore += 8;
        }
    }
    if (them === "B") {
        if (result === "X") {
            // lose with rock
            myScore += 1;
        }
        if (result === "Y") {
            // draw with paper
            myScore += 5;
        }
        if (result === "Z") {
            // win with scissors
            myScore += 9;
        }
    }
    if (them === "C") {
        if (result === "X") {
            // lose with paper
            myScore += 2;
        }
        if (result === "Y") {
            // draw with scissors
            myScore += 6;
        }
        if (result === "Z") {
            // win with rock
            myScore += 7;
        }
    }
    totalScore += myScore;
});
console.log(totalScore);
//# sourceMappingURL=index.js.map