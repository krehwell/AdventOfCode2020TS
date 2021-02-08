import * as fs from "fs";
const input = fs.readFileSync("input1.txt", "utf-8").split("\n").filter(x => x).map(x => +x);
input.push(0, Math.max(...input) + 3);
input.sort((a, b) => a - b);

interface Structure {
  one: number;
  three: number;
}

function solve(inp: number[]): number {

  let result: Structure = {one: 0, three: 0};

  console.log(inp);

  for( let i = 0; i < inp.length + 1; i++ ) {

    let acc = inp[i + 1] - inp[i];

    if(acc === 1) {
      result["one"]++;
    }

    if(acc === 3) {
      result["three"]++;
    }

  }

  console.log(result);

  return result["one"] * result["three"] ;

}

console.log(solve(input));
