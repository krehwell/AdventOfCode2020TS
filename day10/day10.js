"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("input1.txt", "utf-8").split("\n").filter(function (x) { return x; }).map(function (x) { return +x; });
input.push(0, Math.max.apply(Math, input) + 3);
input.sort(function (a, b) { return a - b; });
function solve(inp) {
    var result = { one: 0, three: 0 };
    console.log(inp);
    for (var i = 0; i < inp.length + 1; i++) {
        var acc = inp[i + 1] - inp[i];
        if (acc === 1) {
            result["one"]++;
        }
        if (acc === 3) {
            result["three"]++;
        }
    }
    console.log(result);
    return result["one"] * result["three"];
}
console.log(solve(input));
