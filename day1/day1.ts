import * as fs from "fs";

let input: number[] = fs
  .readFileSync("input1.txt", "utf-8")
  .split("\n")
  .filter((x: string) => x)
  .map((x: string) => +x);

input = input.sort((a: any, b: any) => a - b);

function Find2020(inp: number[]): number {
  let lp: number = 0;
  let rp: number = inp.length - 1;

  while(lp < rp){
    let current = inp[lp] + inp[rp];

    if(current == 2020){
      return inp[lp] * inp[rp];
    }

    else if(current < 2020){
      lp++;
    }

    else if(current > 2020){
      rp--
    }
  }

  return 1;
}

console.log(Find2020(input));
