"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("input1.txt", "utf-8")
    .split("\n")
    .filter(function (x) { return x; })
    .map(function (x) { return +x; });
function find2020(inp) {
    var pivot = 0;
    var lp = pivot + 1;
    var rp = inp.length - 1;
    var toFind = 2020 - inp[pivot];
    while (pivot < inp.length - 1) {
        var current = inp[lp] + inp[rp];
        if (current === toFind) {
            return inp[lp] * inp[rp] * inp[pivot];
        }
        else if (current < toFind) {
            lp++;
        }
        else if (current > toFind) {
            rp--;
        }
        if (lp === rp) {
            pivot++;
            lp = pivot + 1;
            rp = inp.length - 1;
            toFind = 2020 - inp[pivot];
        }
    }
    return -1;
}
console.log(find2020(input));
