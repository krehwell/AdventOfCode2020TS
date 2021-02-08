"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var check = require("./checker");
var fs = require("fs");
// Input Read
var _input = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .filter(function (x) { return x; })
    .map(function (x) { return x.concat("."); })
    .map(function (x) { return ".".concat(x); });
// Input Parser
var input = __spreadArrays([
    ".".repeat(_input[0].length)
], _input, [
    ".".repeat(_input[0].length),
]).map(function (x) { return x.split(""); });
function evaluate(pos, inp) {
    var i = pos[0], j = pos[1];
    var occurance = 0;
    if (i > 0) {
        if (check.Top([i - 1, j], inp)) {
            occurance++;
        }
    }
    if (i < inp.length - 1) {
        if (check.Bottom([i + 1, j], inp)) {
            occurance++;
        }
    }
    if (j > 0) {
        if (check.Left([i, j - 1], inp)) {
            occurance++;
        }
    }
    if (j < inp[i].length - 1) {
        if (check.Right([i, j + 1], inp)) {
            occurance++;
        }
    }
    if (i > 0 && j < inp[i].length - 1) {
        if (check.TopRight([i - 1, j + 1], inp)) {
            occurance++;
        }
    }
    if (i > 0 && j > 0) {
        if (check.TopLeft([i - 1, j - 1], inp)) {
            occurance++;
        }
    }
    if (i < inp.length - 1 && j < inp[i].length) {
        if (check.BottomRight([i + 1, j + 1], inp)) {
            occurance++;
        }
    }
    if (i < inp.length - 1 && j > 0) {
        if (check.BottomLeft([i + 1, j - 1], inp)) {
            occurance++;
        }
    }
    // ---------------- CHECK -----------------
    if (inp[i][j] === ".") {
        return [".", false];
    }
    if (inp[i][j] === "#") {
        if (occurance >= 5) {
            return ["L", true];
        }
    }
    if (inp[i][j] === "L") {
        if (occurance === 0) {
            return ["#", true];
        }
    }
    return [inp[i][j], false];
}
function solve(inp) {
    var keepIterate = false;
    do {
        keepIterate = false;
        var inp_sec = inp.map(function (arr) { return arr.slice(); });
        for (var i = 1; i < inp.length - 1; i++) {
            for (var j = 1; j < inp[i].length - 1; j++) {
                var _a = evaluate([i, j], inp), result = _a[0], isChanged = _a[1];
                inp_sec[i][j] = result;
                if (!keepIterate) {
                    keepIterate = isChanged;
                }
            }
        }
        // console.table(inp);
        inp = inp_sec;
    } while (keepIterate);
    // console.table(inp);
    var final = inp.map(function (x) { return x.join(""); });
    // console.table(final);
    return (final.join("").match(/#/g) || []).length;
}
console.log(solve(input));
// console.table(input);
