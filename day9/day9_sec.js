"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("input.txt", "utf-8")
    .split("\n")
    .filter(function (x) { return x; })
    .map(function (x) { return +x; });
function solve(inp, pivot) {
    for (var i = 0, j = 1; j < inp.length;) {
        var arr = inp.slice(i, j);
        var temp_result = arr.reduce(function (prev, cur) { return cur + prev; });
        // console.log(temp_result);
        if (temp_result === pivot) {
            return Math.min.apply(Math, arr) + Math.max.apply(Math, arr);
        }
        if (temp_result > pivot) {
            i++;
        }
        else if (temp_result < pivot) {
            j++;
        }
    }
    return -1;
}
console.log(solve(input, 25918798));
