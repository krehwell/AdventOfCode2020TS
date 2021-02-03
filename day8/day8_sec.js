"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .filter(function (x) { return x; })
    .map(function (x) {
    var _a = x.split(" "), key = _a[0], value = _a[1];
    return { operation: key, value: +value };
});
function traverse(inp, index, acc, set, allowFlip) {
    if (set === void 0) { set = new Set(); }
    if (allowFlip === void 0) { allowFlip = true; }
    if (index === inp.length) {
        return acc;
    }
    if (set.has(index)) {
        return -Infinity;
    }
    else {
        set.add(index);
    }
    var _a = inp[index], operation = _a.operation, value = _a.value;
    var clone_set = new Set(set);
    if (operation === "acc") {
        return traverse(inp, index + 1, acc + value, clone_set, allowFlip);
    }
    else if (operation === "nop") {
        var path = [traverse(inp, index + 1, acc, clone_set, allowFlip)];
        if (allowFlip) {
            path.push(traverse(inp, index + value, acc, clone_set, false));
        }
        return Math.max.apply(Math, path);
    }
    else if (operation === "jmp") {
        var path = [traverse(inp, index + value, acc, clone_set, allowFlip)];
        if (allowFlip) {
            path.push(traverse(inp, index + 1, acc, clone_set, false));
        }
        return Math.max.apply(Math, path);
    }
    console.log("SOME OPS HIT ME :(");
    return 0;
}
function solve(inp) {
    return traverse(inp, 0, 0);
}
console.log(solve(input));
