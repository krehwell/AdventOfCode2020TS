"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var fs = require("fs");
var _input = fs.readFileSync("input1.txt", "utf-8").split("\n").filter(function (x) { return x; })
    .map(function (x) { return x.concat("."); }).map(function (x) { return ".".concat(x); });
var input = __spreadArrays([".".repeat(_input[0].length)], _input, [".".repeat(_input[0].length)]);
function evaluate(inp) {
    var top = inp[0];
    var mid = inp[1];
    var bot = inp[2];
    var isChanged = false;
    // console.log(mid);
    var arrstring = "";
    for (var i = 1; i < mid.length - 1; i++) {
        var adjacent = top[i] + top[i + 1] + top[i - 1]
            + bot[i] + bot[i + 1] + bot[i - 1]
            + mid[i - 1] + mid[i + 1];
        if (mid[i] === ".") {
            arrstring += ".";
        }
        else if (mid[i] === "L") {
            var occupied = (adjacent.match(/#/g) || []).length;
            if (occupied === 0) {
                arrstring += "#";
                isChanged = true;
            }
            else {
                arrstring += "L";
            }
        }
        else if (mid[i] === "#") {
            var occupied = (adjacent.match(/#/g) || []).length;
            if (occupied >= 4) {
                arrstring += "L";
                isChanged = true;
            }
            else {
                arrstring += "#";
            }
        }
    }
    return ["." + arrstring + ".", isChanged];
}
function solve(inp) {
    var _a;
    var keepCheck = false;
    do {
        keepCheck = false;
        for (var i = 1, inp_temp = __spreadArrays(inp); i < inp.length - 1; i++) {
            var _b = evaluate([inp[i - 1], inp[i], inp[i + 1]]), result = _b[0], kc = _b[1];
            inp_temp[i] = result;
            if (!keepCheck) {
                keepCheck = kc;
            }
            if (i === inp.length - 2) {
                inp = __spreadArrays(inp_temp);
            }
        }
    } while (keepCheck);
    console.table(inp);
    return ((_a = inp.join("").match(/#/g)) === null || _a === void 0 ? void 0 : _a.length) || -1;
}
console.table(input);
console.log(solve(input));
