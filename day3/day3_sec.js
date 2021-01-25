"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("input.txt", "utf-8").split("\n").filter(function (x) { return x; });
function solve(inp, r, d) {
    var tree = 0;
    for (var i = 0, j = r; i < inp.length - 1; i += d, j += r) {
        var hor = j % inp[i].length;
        if (inp[i + d][hor] === "#") {
            tree++;
        }
    }
    return tree;
}
var s11 = solve(input, 1, 1);
var s31 = solve(input, 3, 1);
var s51 = solve(input, 5, 1);
var s71 = solve(input, 7, 1);
var s12 = solve(input, 1, 2);
console.log(s11, s31, s51, s71, s12);
console.log(s11 * s31 * s51 * s71 * s12);
