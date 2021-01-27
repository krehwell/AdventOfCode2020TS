import * as fs from "fs";
const input:string[][] = fs.readFileSync("input.txt", "utf-8").split("\n\n")
  .filter(x => x)
  .map(x => x.split("\n").filter(x => x));

function findYes(str: string[]): number {
  let yes = 0;

  if(str.length === 1){
    return str[0].length;
  }

  let fs = str[0];
  for(let i = 0; i < fs.length; i++){
    let count = true;
    for(let j = 1; j < str.length; j++){
      if(!str[j].includes(fs[i])){
        count = false;
        break;
      }
    }
    count ? yes++ : yes;
  }

  return yes;
}

function solve(inp: string[][]): number {

  let yesCount: number[] = [];

  for (let i = 0; i < inp.length; i++) {
    yesCount.push(findYes(inp[i]));
  }

  return yesCount.reduce((acc, x) => acc+=x);
}

console.log(input);
console.log(solve(input));
