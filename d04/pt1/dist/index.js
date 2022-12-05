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
const rawData = fs.readFileSync('inputTest.txt', 'utf8');
const data = rawData.split('\n');
let total = 0;
data.forEach(_ => {
    const left = _.split(",")[0];
    const right = _.split(",")[1];
    const leftLower = Number.parseInt(left.split("-")[0]);
    const leftHigher = Number.parseInt(left.split("-")[1]);
    const rightLower = Number.parseInt(right.split("-")[0]);
    const rightHigher = Number.parseInt(right.split("-")[1]);
    if (leftLower >= rightLower && leftHigher <= rightHigher) {
        total++;
    }
    else if (rightLower >= leftLower && rightHigher <= leftHigher) {
        total++;
    }
});
console.log(total);
//# sourceMappingURL=index.js.map