"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("input.txt", "utf-8")
    .split("\n")
    .filter(function (x) { return x; })
    .map(function (x) { return +x; });
function isValid(inp, val) {
    for (var i = 0; i < inp.length; i++) {
        var find = Math.abs(val - inp[i]);
        if (inp.includes(find)) {
            return true;
        }
    }
    return false;
}
function solve(inp) {
    for (var i = 0; i < inp.length; i++) {
        var check = inp.slice(i, i + 25);
        // console.log(check);
        if (!isValid(check, inp[i + 25])) {
            return inp[i + 25];
        }
    }
    return -1;
}
console.log(solve(input));
