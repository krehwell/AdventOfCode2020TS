import * as fs from "fs";
const input: number[] = fs.readFileSync("input.txt", "utf-8")
  .split("\n")
  .filter(x => x)
  .map(x => +x);

function solve(inp: number[], pivot: number): number {

  for(let i = 0, j = 1; j < inp.length;){
    let arr = inp.slice(i, j);

    let temp_result = arr.reduce((prev, cur) => cur + prev);
    // console.log(temp_result);

    if(temp_result === pivot){
      return Math.min(...arr) + Math.max(...arr);
    }

    if(temp_result > pivot){
      i++;
    }

    else if(temp_result < pivot){
      j++;
    }

  }

  return -1;
}

console.log(solve(input, 25918798));
