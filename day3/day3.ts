export {};
import * as fs from "fs";
let input = fs
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .filter((x: string) => x);

function solve(inp: string[]): number{

  let tree = 0;

  for(let i = 0, j = 3; i < inp.length-1; i++, j+=3){
    let hor = j % inp[i].length;
    if(inp[i+1][hor] === "#"){
      tree++;
    }
  }

  return tree;

}

console.log(solve(input));
