"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .filter(function (x) { return x; });
function solve(inp) {
    var tree = 0;
    for (var i = 0, j = 3; i < inp.length - 1; i++, j += 3) {
        var hor = j % inp[i].length;
        if (inp[i + 1][hor] === "#") {
            tree++;
        }
    }
    console.log(inp);
    return tree;
}
console.log(solve(input));
