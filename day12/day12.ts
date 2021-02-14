import * as fs from "fs";
const input = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .filter((x) => x);

function parseInp(str: string): [string, number] {
    let act = str.slice(0, 1);
    let val = +str.slice(1);
    return [act, val];
}

let navSet = new Set(["N", "S", "E", "W"]);

function calculateNavigation(
    res: { x: number; y: number },
    ins: { type: string; value: number }[]
): { x: number; y: number } {
    for (let i = 0; i < ins.length; i++) {
        let { type, value } = ins[i];

        if (type === "N") {
            res.y += value;
        } else if (type === "S") {
            res.y -= value;
        } else if (type === "W") {
            res.x -= value;
        } else if (type === "E") {
            res.x += value;
        }
    }

    return res;
}

/*
    N
  W   E
    S
*/

function calcR(curF: string, R: number): string {
    let direction = ["east", "south", "west", "north"];
    let curIndex = direction.indexOf(curF);

    return direction[(curIndex + R / 90) % 4];
}

function calcL(curF: string, L: number): string {
    let direction = ["east", "north", "west", "south"];
    let curIndex = direction.indexOf(curF);

    return direction[(curIndex + L / 90) % 4];
}

function calculateHelper(
    res: { x: number; y: number },
    ins: { type: string; value: number }[]
): { x: number; y: number } {

    let currentDir = "east";

    for (let i = 0; i < ins.length; i++) {
      let { type, value } = ins[i];

      if(type === "F") {
        if (currentDir === "north") {
            res.y += value;
        } else if (currentDir === "south") {
            res.y -= value;
        } else if (currentDir === "west") {
            res.x -= value;
        } else if (currentDir === "east") {
            res.x += value;
        }
      }

      else if(type === "R") {
        currentDir = calcR(currentDir, value);
      }

      else if(type === "L") {
        currentDir = calcL(currentDir, value);
      }

    }

    return res;
}

function solve(inp: string[]): number {
    let result = { x: 0, y: 0 };

    let instructions = inp.map((x) => {
        let res = parseInp(x);
        return {
            type: res[0],
            value: res[1],
        };
    });

    let instructions_navigation = instructions.filter((x) =>
        navSet.has(x.type)
    );
    let instructions_helper = instructions.filter((x) => !navSet.has(x.type));

    let a = calculateNavigation({x: 0, y: 0}, instructions_navigation);
    let b = calculateHelper({x: 0, y: 0}, instructions_helper);

    result = { x: Math.abs( a.x + b.x ), y: Math.abs( a.y + b.y ) };

    console.log(result);

    return result.x + result.y;
}

console.log(solve(input));
