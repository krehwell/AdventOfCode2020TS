import * as fs from "fs";

let input = fs
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .filter((x: string) => x);

interface inpStructure {
  min: number;
  max: number;
  char: string;
  pattern: string;
}

function parseInput(inp: string[]) {
  let parse = inp.map((x) => x.split(" "));
  let parseresult: inpStructure[] = [];

  for (let i = 0; i < parse.length; i++) {
    parseresult[i] = {
      min: +parse[i][0].split("-")[0],
      max: +parse[i][0].split("-")[1],
      char: parse[i][1].replace(":", ""),
      pattern: parse[i][2],
    };
  }

  return parseresult;
}

function solve(inp: inpStructure[]): number {
  let valid = 0;

  for (let i = 0; i < inp.length; i++) {
    let regex = new RegExp(`${inp[i].char}`, "g");
    let occurance = (inp[i].pattern.match(regex) || []).length;
    if (occurance >= inp[i].min && occurance <= inp[i].max) {
      valid++;
    }
  }

  return valid;
}

console.log(solve(parseInput(input)));
