import * as fs from "fs";
const input = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .filter((x) => x);

const idraw = input[1].split(",").map((x) => {
    if (x != "x") {
        return +x;
    }
    return x;
});

const id_only: number[] = idraw.filter((x) => x !== "x").map((x) => +x);

function parseInput(id: number[]): Structure[] {
    let result: Structure[] = [];

    for (let _id of id) {
        result.push({
            id: _id,
            offset: idraw.indexOf(_id),
        });
    }

    return result;
}

interface Structure {
    id: number;
    offset: number;
}

function solve(inp: Structure[]): number {
    let time = 0;
    let accumulator = inp[0].id;

    for (let i = 0; i < inp.length -1 ; i++) {

        while ((time + inp[i+1].offset) % inp[i+1].id !== 0) {
            time += accumulator;
        }

        accumulator *= inp[i+1].id;
    }

    return time;
}

const inputS = parseInput(id_only);
console.log("result:", solve(inputS));
console.log("data: ", inputS);
