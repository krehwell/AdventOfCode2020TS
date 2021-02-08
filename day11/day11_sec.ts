import * as check from "./checker";
import * as fs from "fs";

// Input Read
const _input = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .filter((x) => x)
    .map((x) => x.concat("."))
    .map((x) => ".".concat(x));

// Input Parser
let input: string[][] = [
    ".".repeat(_input[0].length),
    ..._input,
    ".".repeat(_input[0].length),
].map(x => x.split(""));

function evaluate(pos: check.Pos, inp: readonly string[][]): [string, boolean] {
    let [i, j] = pos;
    let occurance = 0;

    if(i > 0){
        if(check.Top([i - 1, j], inp)){
            occurance++;
        }
    }

    if(i < inp.length - 1){
        if(check.Bottom([i + 1, j], inp)){
            occurance++;
        }
    }

    if(j > 0) {
        if(check.Left([i, j - 1], inp)){
            occurance++;
        }
    }

    if(j < inp[i].length - 1){
        if(check.Right([i, j + 1], inp)){
            occurance++;
        }
    }

    if(i > 0 && j < inp[i].length -1 ){
        if(check.TopRight([i - 1, j + 1], inp)){
            occurance++;
        }
    }

    if(i > 0 && j > 0 ){
        if(check.TopLeft([i - 1, j - 1], inp)){
            occurance++;
        }
    }

    if(i < inp.length - 1 && j < inp[i].length ){
        if(check.BottomRight([i + 1, j + 1], inp)){
            occurance++;
        }
    }

    if(i < inp.length - 1 && j > 0 ){
        if(check.BottomLeft([i + 1, j - 1], inp)){
            occurance++;
        }
    }

    // ---------------- CHECK -----------------

    if(inp[i][j] === ".") {
        return [".", false];
    }

    if(inp[i][j] === "#") {
        if(occurance >= 5){
            return ["L", true];
        }
    }

    if(inp[i][j] === "L") {
        if(occurance === 0){
            return ["#", true];
        }
    }

    return [inp[i][j], false]
}

function solve(inp: readonly string[][]): number {

    let keepIterate: boolean = false;

    do {
        keepIterate = false;

        let inp_sec = inp.map((arr) =>  arr.slice());

        for(let i = 1; i < inp.length - 1; i++){
            for(let j = 1; j < inp[i].length - 1; j++){
                let [result, isChanged] = evaluate([i, j], inp);
                inp_sec[i][j] = result;

                if(!keepIterate) {
                    keepIterate = isChanged;
                }
            }
        }

        // console.table(inp);
        inp = inp_sec;

    } while(keepIterate);

    // console.table(inp);

    let final = inp.map(x => x.join(""));
    // console.table(final);
    return (final.join("").match(/#/g) || []).length;
}

console.log(solve(input));
// console.table(input);
