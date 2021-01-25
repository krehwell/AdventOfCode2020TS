"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .filter(function (x) { return x; });
function parseInput(inp) {
    var parse = inp.map(function (x) { return x.split(" "); });
    var parseresult = [];
    for (var i = 0; i < parse.length; i++) {
        parseresult[i] = {
            min: +parse[i][0].split("-")[0],
            max: +parse[i][0].split("-")[1],
            char: parse[i][1].replace(":", ""),
            pattern: parse[i][2]
        };
    }
    return parseresult;
}
function solve(inp) {
    var valid = 0;
    for (var i = 0; i < inp.length; i++) {
        var regex = new RegExp("" + inp[i].char, "g");
        var occurance = (inp[i].pattern.match(regex) || []).length;
        if (occurance >= inp[i].min && occurance <= inp[i].max) {
            valid++;
        }
    }
    return valid;
}
console.log(solve(parseInput(input)));
