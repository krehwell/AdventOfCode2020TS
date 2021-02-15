"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("input.txt", "utf-8").split("\n").filter(function (x) { return x; });
var estimateTime = +input[0];
var id = (input[1].split(",").filter(function (x) { return x !== "x"; })).map(function (x) { return +x; });
function countTimestamp(mul, max) {
    for (var i = max, keepSearch = true; keepSearch; i++) {
        for (var _i = 0, mul_1 = mul; _i < mul_1.length; _i++) {
            var id_1 = mul_1[_i];
            if (i % id_1 === 0) {
                return id_1 * (i - max);
            }
        }
    }
    return -1;
}
function solve(inp) {
    var estimateTime = inp.estimateTime, id = inp.id;
    console.log(estimateTime, id);
    return countTimestamp(id, estimateTime);
}
console.log(solve({ estimateTime: estimateTime, id: id }));
