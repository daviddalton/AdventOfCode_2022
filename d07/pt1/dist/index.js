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
let total = 0;
let prevCommand = "";
let currentPath = "";
let directories = new Map();
let parentDir = new Map();
data.forEach(_ => {
    if (_.includes("$ cd /")) {
        directories.set("/main", 0);
        currentPath = "/main";
    }
    else if (_.includes("$ ls")) {
        //do nothing
    }
    else if (_.includes("dir")) {
        directories.set(currentPath + "/" + _.split(" ")[1], 0);
        parentDir.set(currentPath + "/" + _.split(" ")[1], currentPath);
    }
    else if (_.includes("$ cd")) {
        if (_.split("cd")[1].trim() === "..") {
            if (parentDir.get(currentPath)) {
                currentPath = parentDir.get(currentPath);
            }
        }
        else {
            currentPath = currentPath + "/" + _.split(" cd ")[1].trim();
        }
    }
    else {
        directories.set(currentPath, directories.get(currentPath) + Number.parseInt(_.split(" ")[0]));
        let tempDir = currentPath;
        while (parentDir.get(tempDir)) {
            directories.set(parentDir.get(tempDir), directories.get(parentDir.get(tempDir)) + Number.parseInt(_.split(" ")[0]));
            tempDir = parentDir.get(tempDir);
        }
    }
    prevCommand = _;
});
directories.forEach((value, key) => {
    if (value <= 100000) {
        total += value;
    }
});
console.log(total);
//# sourceMappingURL=index.js.map