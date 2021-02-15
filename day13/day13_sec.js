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
            t: idraw.indexOf(_id)
        });
    }
    return result;
}
function checkIsValid(inp) {
    var curtime = 0;
    for (var keepSearch = true; keepSearch;) {
        keepSearch = false;
        if (curtime % inp[0].id !== 0) {
            break;
        }
        curtime += inp[0].id;
        for (var _i = 0, inp_1 = inp; _i < inp_1.length; _i++) {
            var item = inp_1[_i];
            if ((curtime + item.t) % item.id !== 0) {
                keepSearch = true;
                break;
            }
        }
        // console.log(curtime);
    }
    return curtime;
}
function solve(inp) {
    console.log(inp);
    return checkIsValid(inp);
}
var inputS = parseInput(id_only);
console.log("result:", solve(inputS));
console.log(inputS);
