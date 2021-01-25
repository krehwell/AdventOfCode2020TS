const fs = require("fs");
let input: string[] = fs
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .filter((x: string) => x);

interface inpStructure {
  lp: number;
  rp: number;
  char: string;
  pattern: string;
}

function parse(inp: string[]): inpStructure[] {
  let parse = inp.map((x) => x.split(" "));
  let parseResult: inpStructure[] = [];

  for (let i = 0; i < parse.length; i++) {
    parseResult[i] = {
      lp: +parse[i][0].split("-")[0],
      rp: +parse[i][0].split("-")[1],
      char: parse[i][1].replace(":", ""),
      pattern: "#" + parse[i][2],
    };
  }

  return parseResult;
}

function solve(inp: inpStructure[]): number {
  let valid = 0;

  for (let i = 0; i < inp.length; i++) {
    const { lp, rp, char, pattern } = inp[i];
    let found = 0;

    if (pattern.charAt(lp) === char) {
      found++;
    }

    if (pattern.charAt(rp) === char) {
      found++;
    }

    if (found === 1) {
      valid++;
    }
  }

  return valid;
}

console.log(solve(parse(input)));
