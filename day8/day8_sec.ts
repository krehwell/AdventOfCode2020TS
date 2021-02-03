import * as fs from "fs";

interface instruct {
  operation: string;
  value: number;
}

const input: instruct[] = fs
  .readFileSync("input1.txt", "utf-8")
  .split("\n")
  .filter((x) => x)
  .map((x) => {
    let [key, value] = x.split(" ");
    return { operation: key, value: +value };
  });

function traverse(inp: instruct[], index: number, acc: number, set = new Set(), allowFlip = true): number {
  if (index === inp.length) {
    return acc;
  }

  if (set.has(index)) {
    return -Infinity;
  } else {
    set.add(index);
  }

  let { operation, value } = inp[index];

  let clone_set = new Set(set);

  if (operation === "acc") {
    return traverse(inp, index + 1, acc + value, clone_set, allowFlip);
  }

  // -
  else if (operation === "nop") {
    const path = [traverse(inp, index + 1, acc, clone_set, allowFlip)];
    if (allowFlip) {
      path.push(traverse(inp, index + value, acc, clone_set, false));
    }
    return Math.max(...path);
  }

  // -
  else if (operation === "jmp") {
    const path = [traverse(inp, index + value, acc, clone_set, allowFlip)];
    if (allowFlip) {
      path.push(traverse(inp, index + 1, acc, clone_set, false));
    }
    return Math.max(...path);
  }

  console.log("SOME OPS HIT ME :(");
  return 0;
}

function solve(inp: instruct[]): number {
  return traverse(inp, 0, 0);
}

console.log(solve(input));
