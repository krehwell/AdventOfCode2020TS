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

const id_only: number[] = idraw.filter((x) => x !== "x").map(x => +x);

function parseInput(id: number[]): Structure[] {
    let result: Structure[] = [];

    for (let _id of id) {
        result.push({
            id: _id,
            t: idraw.indexOf(_id),
        });
    }

    return result;
}

interface Structure {
    id: number;
    t: number;
}

function checkIsValid(inp: Structure[]): number {
    let curtime = 0

    for(let keepSearch = true; keepSearch;) {

        keepSearch = false;

        if(curtime % inp[0].id !== 0) {
            break;
        }

        curtime += inp[0].id;

        for(let item of inp) {
            if((curtime + item.t) % item.id !== 0) {
                keepSearch = true;
                break;
            }
        }

        // console.log(curtime);
    }

    return curtime
}

function solve(inp: Structure[]): number {
    console.log(inp);

    return checkIsValid(inp);
}

const inputS = parseInput(id_only);
console.log("result:", solve(inputS));
console.log(inputS);
