"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("input.txt", "utf-8").split("\n\n")
    .filter(function (x) { return x; })
    .map(function (x) { return x.split("\n").filter(function (x) { return x; }); });
function findYes(str) {
    var yes = 0;
    if (str.length === 1) {
        return str[0].length;
    }
    var fs = str[0];
    for (var i = 0; i < fs.length; i++) {
        var count = true;
        for (var j = 1; j < str.length; j++) {
            if (!str[j].includes(fs[i])) {
                count = false;
                break;
            }
        }
        count ? yes++ : yes;
    }
    return yes;
}
function solve(inp) {
    var yesCount = [];
    for (var i = 0; i < inp.length; i++) {
        yesCount.push(findYes(inp[i]));
    }
    return yesCount.reduce(function (acc, x) { return acc += x; });
}
console.log(input);
console.log(solve(input));
