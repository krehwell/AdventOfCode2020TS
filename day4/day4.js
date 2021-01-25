"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("input.txt", "utf-8").split("\n\n").filter(function (x) { return x; });
function parse(inp) {
    var pString = [];
    for (var i = 0; i < inp.length; i++) {
        // @ts-ignore
        pString.push(inp[i].match(/\w+:/g).map(function (x) { return x.replace(":", ""); }));
    }
    return pString;
}
function checkIsValid(inp) {
    var id = [
        "byr",
        "iyr",
        "eyr",
        "hgt",
        "hcl",
        "ecl",
        "pid"
    ];
    var b = true;
    id.forEach(function (x) {
        if (!inp.includes(x)) {
            return b = false;
        }
    });
    return b;
}
function solve(inp) {
    var pString = parse(inp);
    console.log(pString);
    var valid = 0;
    pString.forEach(function (x) {
        if (checkIsValid(x)) {
            valid++;
        }
    });
    return valid;
}
console.log(solve(input));
