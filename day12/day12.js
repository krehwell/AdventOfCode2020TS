"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .filter(function (x) { return x; });
function parseInp(str) {
    var act = str.slice(0, 1);
    var val = +str.slice(1);
    return [act, val];
}
var navSet = new Set(["N", "S", "E", "W"]);
function calculateNavigation(res, ins) {
    for (var i = 0; i < ins.length; i++) {
        var _a = ins[i], type = _a.type, value = _a.value;
        if (type === "N") {
            res.y += value;
        }
        else if (type === "S") {
            res.y -= value;
        }
        else if (type === "W") {
            res.x -= value;
        }
        else if (type === "E") {
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
function calcR(curF, R) {
    var direction = ["east", "south", "west", "north"];
    var curIndex = direction.indexOf(curF);
    return direction[(curIndex + R / 90) % 4];
}
function calcL(curF, L) {
    var direction = ["east", "north", "west", "south"];
    var curIndex = direction.indexOf(curF);
    return direction[(curIndex + L / 90) % 4];
}
function calculateHelper(res, ins) {
    var currentDir = "east";
    for (var i = 0; i < ins.length; i++) {
        var _a = ins[i], type = _a.type, value = _a.value;
        if (type === "F") {
            if (currentDir === "north") {
                res.y += value;
            }
            else if (currentDir === "south") {
                res.y -= value;
            }
            else if (currentDir === "west") {
                res.x -= value;
            }
            else if (currentDir === "east") {
                res.x += value;
            }
        }
        else if (type === "R") {
            currentDir = calcR(currentDir, value);
        }
        else if (type === "L") {
            currentDir = calcL(currentDir, value);
        }
    }
    return res;
}
function solve(inp) {
    var result = { x: 0, y: 0 };
    var instructions = inp.map(function (x) {
        var res = parseInp(x);
        return {
            type: res[0],
            value: res[1]
        };
    });
    var instructions_navigation = instructions.filter(function (x) {
        return navSet.has(x.type);
    });
    var instructions_helper = instructions.filter(function (x) { return !navSet.has(x.type); });
    var a = calculateNavigation({ x: 0, y: 0 }, instructions_navigation);
    var b = calculateHelper({ x: 0, y: 0 }, instructions_helper);
    result = { x: Math.abs(a.x + b.x), y: Math.abs(a.y + b.y) };
    console.log(result);
    return result.x + result.y;
}
console.log(solve(input));
