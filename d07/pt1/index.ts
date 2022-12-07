import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\n');

let total = 0;
let prevCommand = ""
let currentPath = ""
let directories = new Map<string, number>()
let parentDir = new Map<string, string>()
data.forEach(_ => {

    if (_.includes("$ cd /")) {
        directories.set("/main", 0)
        currentPath = "/main"
    } else if (_.includes("$ ls")) {
        //do nothing
    } else if (_.includes("dir")) {
        directories.set(currentPath + "/" + _.split(" ")[1], 0)
        parentDir.set(currentPath + "/" + _.split(" ")[1], currentPath)
    } else if (_.includes("$ cd")) {
        if (_.split("cd")[1].trim() === "..") {
            if (parentDir.get(currentPath)) {
                currentPath = parentDir.get(currentPath)!
            }
        } else {
            currentPath = currentPath + "/" + _.split(" cd ")[1].trim()
        }
    } else {
        directories.set(currentPath, directories.get(currentPath)! + Number.parseInt(_.split(" ")[0]))
        let tempDir = currentPath
        while(parentDir.get(tempDir)) {
            directories.set(parentDir.get(tempDir)!, directories.get(parentDir.get(tempDir)!)! + Number.parseInt(_.split(" ")[0]))
            tempDir = parentDir.get(tempDir)!
        }
    }
    prevCommand = _
})

directories.forEach((value: number, key: string) => {
    if (value <= 100000) {
        total += value
    }
});

console.log(total)