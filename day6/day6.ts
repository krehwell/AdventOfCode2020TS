import * as fs from "fs";
const input:string[] = fs.readFileSync("input.txt", "utf-8").split("\n\n")
  .filter(x => x)
  .map(x => x.replace(/\n/g, ""));

function findYes(str: string): number {
  let yes = new Set(str);

  return yes.size;
}

function solve(inp: string[]): number{

  let yesCount: number[] = [];

  for(let i = 0; i < inp.length; i++){
    yesCount.push(findYes(inp[i]));
  }

  return yesCount.reduce((acc, x) => acc+=x);
}

console.log(solve(input));
