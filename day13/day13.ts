import * as fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8").split("\n").filter(x => x);
let estimateTime = +input[0];
let id = (input[1].split(",").filter(x => x !== "x")).map(x => +x);

interface Structure {
    estimateTime: number;
    id: Array<number>;
}

function countTimestamp(mul: number[], max: number): number {

    for(let i = max, keepSearch = true; keepSearch; i++) {
        for(let id of mul) {
            if(i % id === 0) {
                return id * (i - max);
            }
        }
    }

    return -1;
}

function solve(inp: Structure): number {
    let {estimateTime, id} = inp;

    console.log(estimateTime, id);

    return countTimestamp(id, estimateTime);
}

console.log(solve({estimateTime, id}));
