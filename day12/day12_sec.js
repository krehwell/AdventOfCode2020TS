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
var parseInstruction = function (x) {
    var res = parseInp(x);
    return {
        type: res[0],
        value: res[1]
    };
};
function calculateForward(sp, wp, val) {
    var wpx = wp.x * val;
    var wpy = wp.y * val;
    sp.x += wpx;
    sp.y += wpy;
}
function calculateRotation(wp, ty, deg) {
    var _a, _b;
    var cycleTimes = deg / 90;
    var x = wp.x, y = wp.y;
    for (var i = 0; i < cycleTimes; i++) {
        if (ty === "R") {
            _a = [y, -1 * x], x = _a[0], y = _a[1];
        }
        else if (ty === "L") {
            _b = [-1 * y, x], x = _b[0], y = _b[1];
        }
    }
    return { x: x, y: y };
}
function solve(inp) {
    var instructions = inp.map(parseInstruction);
    var ship = { x: 0, y: 0 };
    var waypoint = { x: 10, y: 1 };
    for (var i = 0; i < inp.length; i++) {
        var _a = instructions[i], type = _a.type, value = _a.value;
        if (type === "N") {
            waypoint.y += value;
        }
        else if (type === "S") {
            waypoint.y -= value;
        }
        else if (type === "E") {
            waypoint.x += value;
        }
        else if (type === "W") {
            waypoint.x -= value;
        }
        else if (type === "F") {
            calculateForward(ship, waypoint, value);
        }
        else if (type === "R" || type === "L") {
            waypoint = calculateRotation(waypoint, type, value);
        }
    }
    console.log(ship);
    console.log(waypoint);
    return Math.abs(ship.x) + Math.abs(ship.y);
}
console.log(solve(input));
