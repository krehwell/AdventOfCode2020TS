import * as fs from "fs";
const input: string[] = fs
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .filter((x) => x);

function traverse(inp: string[], op: string, cur: number, acc = 0, set = new Set()): number{
  // console.log(set, acc);

  if(set.has(cur)){
    return acc;
  }
  else {
    set.add(cur);
  }

  let [operation, temp_value] = op.split(" ");
  let value = +temp_value;

  // console.log(operation, value);

  if(operation === "acc"){
    acc = traverse(inp, inp[cur+1], cur+1, acc+value, set);
  }

  else if(operation === "jmp"){
    acc = traverse(inp, inp[cur+value], cur + value, acc, set);
  }

  else if(operation === "nop"){
    acc = traverse(inp, inp[cur+1], cur+1, acc, set);
  }

  else {
    console.log("Something bad happened");
  }

  return acc;
}

function solve(inp: string[]): number {
  return traverse(inp, inp[0], 0);
}

console.log(solve(input));
