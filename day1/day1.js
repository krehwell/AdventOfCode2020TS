"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs
    .readFileSync("input1.txt", "utf-8")
    .split("\n")
    .filter(function (x) { return x; })
    .map(function (x) { return +x; });
input = input.sort(function (a, b) { return a - b; });
function Find2020(inp) {
    var lp = 0;
    var rp = inp.length - 1;
    while (lp < rp) {
        var current = inp[lp] + inp[rp];
        if (current == 2020) {
            return inp[lp] * inp[rp];
        }
        else if (current < 2020) {
            lp++;
        }
        else if (current > 2020) {
            rp--;
        }
    }
    return 1;
}
console.log(Find2020(input));
