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
    let me = round.split(" ")[1];
    let them = round.split(" ")[0];
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
});
console.log(totalScore);
//# sourceMappingURL=index.js.map