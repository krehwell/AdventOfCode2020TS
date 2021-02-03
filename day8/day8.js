"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .filter(function (x) { return x; });
function traverse(inp, op, cur, acc, set) {
    if (acc === void 0) { acc = 0; }
    if (set === void 0) { set = new Set(); }
    console.log(set, acc);
    if (set.has(cur)) {
        return acc;
    }
    else {
        set.add(cur);
    }
    var _a = op.split(" "), operation = _a[0], temp_value = _a[1];
    var value = +temp_value;
    console.log(operation, value);
    if (operation === "acc") {
        acc = traverse(inp, inp[cur + 1], cur + 1, acc + value, set);
    }
    else if (operation === "jmp") {
        acc = traverse(inp, inp[cur + value], cur + value, acc, set);
    }
    else if (operation === "nop") {
        acc = traverse(inp, inp[cur + 1], cur + 1, acc, set);
    }
    else {
        console.log("Something bad happened");
    }
    return acc;
}
function solve(inp) {
    return traverse(inp, inp[0], 0);
}
console.log(solve(input));
