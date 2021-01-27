"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("input.txt", "utf-8").split("\n\n")
    .filter(function (x) { return x; })
    .map(function (x) { return x.replace(/\n/g, ""); });
function findYes(str) {
    var yes = new Set(str);
    return yes.size;
}
function solve(inp) {
    var yesCount = [];
    for (var i = 0; i < inp.length; i++) {
        yesCount.push(findYes(inp[i]));
    }
    return yesCount.reduce(function (acc, x) { return acc += x; });
}
console.log(solve(input));
