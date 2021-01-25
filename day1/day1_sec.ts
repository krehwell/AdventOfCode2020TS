import * as fs from "fs";
let input: number[] = fs.readFileSync("input1.txt", "utf-8")
  .split("\n")
  .filter((x: string) => x)
  .map((x: string) => +x);

function find2020(inp: number[]): number{
  let pivot = 0;
  let lp = pivot + 1;
  let rp = inp.length - 1;

  let toFind = 2020 - inp[pivot];

  while(pivot < inp.length - 1){
    let current = inp[lp] + inp[rp];

    if(current === toFind){
      return inp[lp] * inp[rp] * inp[pivot];
    }

    else if(current < toFind) {
      lp++;
    }

    else if(current > toFind) {
      rp--;
    }

    if(lp === rp) {
      pivot++;
      lp = pivot + 1;
      rp = inp.length - 1;

      toFind = 2020 - inp[pivot];
    }

  }

  return -1
}

console.log(find2020(input));
