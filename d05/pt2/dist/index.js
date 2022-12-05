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
const shipyard = rawData.split('\n\n')[0].trim().split('\n').reverse();
const instructions = rawData.split('\n\n')[1].split('\n');
let shipyardTwoDim = [];
const numCols = shipyard[0].split('   ').length;
shipyard.forEach((_, index) => {
    const row = _.split(' ');
    if (index != 0) {
        for (let i = 0; i < numCols; i++) {
            if (shipyardTwoDim[i] == undefined) {
                shipyardTwoDim.push([]);
            }
            if (row[i] != "[]") {
                shipyardTwoDim[i].push(row[i]);
            }
        }
    }
});
instructions.forEach(_ => {
    const numToMove = Number.parseInt(_.replaceAll(" ", "").split(RegExp("move(.*?)from"))[1]);
    const from = Number.parseInt(_.replaceAll(" ", "").split(RegExp("from(.*?)to"))[1]);
    const to = Number.parseInt(_.replaceAll(" ", "").split(RegExp("to(.*?)"))[2]);
    for (let i = 0; i < numToMove; i++) {
        shipyardTwoDim[to - 1].push(shipyardTwoDim[from - 1][shipyardTwoDim[from - 1].length - 1]);
        shipyardTwoDim[from - 1].splice(-1);
    }
});
let result = "";
shipyardTwoDim.forEach(_ => {
    result += _[_.length - 1].split(RegExp("\\[(.*?)\]"));
});
console.log(result.replaceAll(",", ""));
//# sourceMappingURL=index.js.map