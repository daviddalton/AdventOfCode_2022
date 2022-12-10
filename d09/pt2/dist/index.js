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
let headX = 0;
let headY = 0;
let tailX = 0;
let tailY = 0;
let locations = new Set(["0 0"]);
data.forEach(_ => {
    let direction = _.split(" ")[0];
    let count = parseInt(_.split(" ")[1]);
    for (let i = 0; i < count; i++) {
        if (direction === "R") {
            headX += 1;
        }
        else if (direction === "L") {
            headX -= 1;
        }
        else if (direction === "U") {
            headY += 1;
        }
        else {
            headY -= 1;
        }
        if (headX - tailX > 1 && headY - tailY == 1) {
            tailX++;
            tailY++;
        }
        else if (headX - tailX == 1 && headY - tailY > 1) {
            tailX++;
            tailY++;
        }
        else if (headX - tailX < -1 && headY - tailY == 1) {
            tailX--;
            tailY++;
        }
        else if (headX - tailX == 1 && headY - tailY < -1) {
            tailX--;
            tailY++;
        }
        else if (headX - tailX > 1) {
            tailX++;
        }
        else if (headY - tailY > 1) {
            tailY++;
        }
        else if (headX - tailX < -1) {
            tailX--;
        }
        else if (headY - tailY < -1) {
            tailY--;
        }
        locations.add(tailX + " " + tailY);
        console.log("Input: " + _);
        console.log("<" + headX + "," + headY + ">", "<" + tailX + "," + tailY + ">");
        console.log("-------------------------");
    }
});
console.log(locations);
console.log(locations.size);
//# sourceMappingURL=index.js.map