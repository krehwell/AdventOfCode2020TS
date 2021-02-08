import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").split("\n").filter(x => x).map(x => +x);
input.push(0, Math.max(...input) + 3);
input.sort((a, b) => a - b);

interface Structure {
  [key: number]: number;
}

function getValid(inp: number[]): number[] {

  let arr: number[] = [0];

  for( let i = 0; i < inp.length + 1; i++ ) {

    let acc = inp[i + 1] - inp[i];

    if(acc === 1) {
      arr.push(inp[i + 1]);
    }

    else if(acc === 3) {
      arr.push(inp[i + 1]);
    }

  }

  return arr;
}

function traverse( inp: number[], index: number, memo: Structure = {} ): number {

  if(index === inp.length - 1) {
    console.log('hit the base');
    return 1;
  }

  if(memo.hasOwnProperty(index)){
    console.log(inp[index], memo[index]);
    return memo[index];
  }

  let temp_result = 0;
  for( let i = 1; i <= 3; i++ ) {

    if(inp[index + i] - inp[index] <= 3) {
      temp_result += traverse(inp, index + i, memo);
    }

  }

  memo[index] = temp_result;

  return temp_result;
}

function solve(inp: number[]): number {

  let vArr = getValid(inp);

  console.log(vArr);

  return traverse(vArr, 0);
}

console.log(solve(input));

