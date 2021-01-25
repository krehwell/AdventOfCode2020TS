import * as fs from "fs";

let input = fs.readFileSync("input.txt", "utf-8").split("\n").filter((x: string)=> x);

function solve(inp: string[], r: number, d: number): number {

  let tree = 0;

  for(let i = 0, j = r; i < inp.length-1; i += d, j += r){
    let hor = j % inp[i].length;
    if(inp[i + d][hor] === "#"){
      tree++;
    }
  }

  return tree;

}

let s11 = solve(input, 1, 1);
let s31 = solve(input, 3, 1);
let s51 = solve(input, 5, 1);
let s71 = solve(input, 7, 1);
let s12 = solve(input, 1, 2);

console.log(s11 , s31 , s51 , s71 , s12);
console.log(s11 * s31 * s51 * s71 * s12);
