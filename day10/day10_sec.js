"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("input.txt", "utf-8").split("\n").filter(function (x) { return x; }).map(function (x) { return +x; });
input.push(0, Math.max.apply(Math, input) + 3);
input.sort(function (a, b) { return a - b; });
function getValid(inp) {
    var arr = [0];
    for (var i = 0; i < inp.length + 1; i++) {
        var acc = inp[i + 1] - inp[i];
        if (acc === 1) {
            arr.push(inp[i + 1]);
        }
        else if (acc === 3) {
            arr.push(inp[i + 1]);
        }
    }
    return arr;
}
function traverse(inp, index, memo) {
    if (memo === void 0) { memo = {}; }
    if (index === inp.length - 1) {
        console.log('hit the base');
        return 1;
    }
    if (memo.hasOwnProperty(index)) {
        console.log(inp[index], memo[index]);
        return memo[index];
    }
    var temp_result = 0;
    for (var i = 1; i <= 3; i++) {
        if (inp[index + i] - inp[index] <= 3) {
            temp_result += traverse(inp, index + i, memo);
        }
    }
    memo[index] = temp_result;
    return temp_result;
}
function solve(inp) {
    var vArr = getValid(inp);
    console.log(vArr);
    return traverse(vArr, 0);
}
console.log(solve(input));
