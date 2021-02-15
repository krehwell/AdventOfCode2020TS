"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .filter(function (x) { return x; });
var idraw = input[1].split(",").map(function (x) {
    if (x != "x") {
        return +x;
    }
    return x;
});
var id_only = idraw.filter(function (x) { return x !== "x"; }).map(function (x) { return +x; });
function parseInput(id) {
    var result = [];
    for (var _i = 0, id_1 = id; _i < id_1.length; _i++) {
        var _id = id_1[_i];
        result.push({
            id: _id,
            offset: idraw.indexOf(_id)
        });
    }
    return result;
}
function solve(inp) {
    var time = 0;
    var accumulator = inp[0].id;
    for (var i = 0; i < inp.length - 1; i++) {
        while ((time + inp[i + 1].offset) % inp[i + 1].id !== 0) {
            time += accumulator;
        }
        accumulator *= inp[i + 1].id;
    }
    return time;
}
var inputS = parseInput(id_only);
console.log("result:", solve(inputS));
console.log("data: ", inputS);
