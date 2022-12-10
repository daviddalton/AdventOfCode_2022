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
let locations = new Set();
let knots = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
//                        H     1     2     3     4     5     6     7     8     9
data.forEach(_ => {
    let direction = _.split(" ")[0];
    let count = parseInt(_.split(" ")[1]);
    console.log(_);
    for (let i = 0; i < count; i++) {
        if (direction === "R") {
            knots[0][0] += 1;
        }
        else if (direction === "L") {
            knots[0][0] -= 1;
        }
        else if (direction === "U") {
            knots[0][1] += 1;
        }
        else {
            knots[0][1] -= 1;
        }
        knots.forEach((knot, index) => {
            if (index != 0) {
                let headX = knots[index - 1][0];
                let headY = knots[index - 1][1];
                let knotX = knot[0];
                let knotY = knot[1];
                // console.log(knots)
                // console.log(_)
                // console.log("<" + headX + "," + headY + ">" + " " + "<" + knotX + "," + knotY + ">")
                if (!(Math.abs(headX - knotX) > 1 && Math.abs(headY - knotY) > 1)) {
                    console.log(headX, headY, knotX, knotY);
                }
                // if (headX - knotX > 1 && headY - knotY > 1) {
                //     knot[0]++
                //     knot[1]++
                // } else if (headX - knotX < -1 && headY - knotY < -1) {
                //     knot[0]--
                //     knot[1]--
                // } else if (headX - knotX > 1 && headY - knotY == 1) {
                //     knot[0]++
                //     knot[1]++
                // } else if (headX - knotX > 1 && headY - knotY == -1) {
                //     knot[0]++
                //     knot[1]--
                // } else if (headX - knotX == 1 && headY - knotY > 1) {
                //     knot[0]++
                //     knot[1]++
                // } else if (headX - knotX < -1 && headY - knotY == 1) {
                //     knot[0]--
                //     knot[1]++
                // } else if (headX - knotX == -1 && headY - knotY > 1) {
                //     knot[0]--
                //     knot[1]++
                // } else if (headX - knotX == -1 && headY - knotY < -1) {
                //     knot[0]--
                //     knot[1]--
                // } else if (headX - knotX == 1 && headY - knotY < -1) {
                //     knot[0]++
                //     knot[1]--
                // } else if (headX - knotX < -1 && headY - knotY == -1) {
                //     knot[0]--
                //     knot[1]--
                // } else if (headX - knotX > 1) {
                //     knot[0]++
                // } else if (headY - knotY > 1) {
                //     knot[1]++
                // } else if (headX - knotX < -1) {
                //     knot[0]--
                // } else if (headY - knotY < -1) {
                //     knot[1]--
                // }
            }
        });
        locations.add(knots[9][0] + " " + knots[9][1]);
    }
    // console.log(knots)
});
console.log(locations);
console.log(locations.size);
//# sourceMappingURL=index.js.map