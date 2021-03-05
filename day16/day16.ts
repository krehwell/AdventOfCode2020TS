import * as fs from "fs";

const input = fs
    .readFileSync("./input.txt", "utf-8")
    .split("\n\n")
    .filter((x) => x)
    .map(x => x.replace(/\n/g, " "))

interface IInputStructure {
    boundaries: number[][];
    nearby: number[]
}

function parseInput(inp: string[]): IInputStructure {
    console.log(inp);

    // parse class
    let classstring = inp[0];
    let classParse = classstring.match(/\d+-\d+/g);

    let boundaries = classParse.map(x => {
        let ranges = x.split("-");
        return [+ranges[0], +ranges[1]];
    })

    console.log(boundaries);

    // parse nearby
    let nearbystring = inp[2];
    let nearbyparse = nearbystring.match(/\d+/g);
    let nearby = nearbyparse.map(x => +x);

    // console.log(nearby);
    return {boundaries, nearby};
}

function checkValid(range: number[][], val: number) {

    for (let i = 0; i < range.length; i++) {
        let min = range[i][0];
        let max = range[i][1];
        if (val >= min && val <= max) {
            return true;
        }
    }

    return false;
}

function solve(data: IInputStructure): number {

    let invalidTicket = [];

    let {boundaries, nearby} = data;

    for (let i = 0; i < nearby.length; i++) {
        if (!checkValid(boundaries, nearby[i])) {
            invalidTicket.push(nearby[i]);
        }
    }

    console.log(invalidTicket);

    return invalidTicket.reduce((acc, val) => acc+=val);
}

let data = parseInput(input);
console.log("result is", solve(data));
