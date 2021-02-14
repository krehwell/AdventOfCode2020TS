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

const parseInstruction = (x: string) => {
    let res = parseInp(x);
    return {
        type: res[0],
        value: res[1]
    }
}

interface Structure {x: number, y: number}

function calculateForward(sp: Structure, wp: Structure, val: number): void {
    let wpx = wp.x * val;
    let wpy = wp.y * val;

    sp.x += wpx;
    sp.y += wpy;
}

function calculateRotation(wp: Structure, ty: "R" | "L", deg: number): Structure {
    let cycleTimes = deg / 90;
    let {x, y} = wp;
    for(let i = 0; i < cycleTimes; i++){
        if(ty === "R") {
            [x, y] = [y, -1 * x];
        }
        else if (ty === "L") {
            [x, y] = [-1 * y, x];
        }
    }

    return {x, y};
}

function solve(inp: string[]): number {

    let instructions = inp.map(parseInstruction);
    let ship = {x: 0, y: 0};
    let waypoint = {x: 10, y: 1};

    for(let i = 0; i < inp.length; i++) {
        let {type, value} = instructions[i];

        if(type === "N") {
            waypoint.y += value;
        }

        else if(type === "S") {
            waypoint.y -= value;
        }

        else if(type === "E") {
            waypoint.x += value;
        }

        else if(type === "W") {
            waypoint.x -= value;
        }

        else if(type === "F") {
            calculateForward(ship, waypoint, value);
        }

        else if(type === "R" || type === "L") {
            waypoint = calculateRotation(waypoint, type, value);
        }

    }

    console.log(ship);
    console.log(waypoint);

    return Math.abs(ship.x) + Math.abs(ship.y);
}

console.log(solve(input));
