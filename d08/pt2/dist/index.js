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
let totalVisible = (data.length * 2) + (data[0].length * 2) - 4;
for (let i = 1; i < data.length - 1; i++) {
    let row = data[i];
    row.split("").forEach((tree, index) => {
        if (index != 0 && index != row.length - 1) {
            //move to the left until you are out
            let tallestLeft = true;
            for (let j = index; j > 0; j--) {
                if (tree <= row[j - 1]) {
                    tallestLeft = false;
                    break;
                }
            }
            //move to the right until you are out
            let tallestRight = true;
            for (let j = index; j < row.length; j++) {
                if (tree <= row[j + 1]) {
                    tallestRight = false;
                    break;
                }
            }
            let tallestUp = true;
            for (let j = i; j > 0; j--) {
                let itemAbove = data[j - 1].split("")[index];
                if (tree <= itemAbove) {
                    tallestUp = false;
                    break;
                }
            }
            let tallestDown = true;
            for (let j = i; j < data.length - 1; j++) {
                let itemBelow = data[j + 1].split("")[index];
                if (tree <= itemBelow) {
                    tallestDown = false;
                    break;
                }
            }
            if (tallestDown || tallestLeft || tallestRight || tallestUp) {
                totalVisible++;
            }
        }
    });
}
console.log(totalVisible);
//# sourceMappingURL=index.js.map