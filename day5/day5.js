"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("input.txt", "utf-8").split("\n").filter(function (x) { return x; });
function parseinp(inp) {
    var res = [];
    for (var i = 0; i < inp.length; i++) {
        var row = inp[i].slice(0, 7);
        var col = inp[i].slice(7);
        res.push({ row: row, col: col });
    }
    return res;
}
function findrc(str, range) {
    var lh = range.lh, uh = range.uh;
    var res = -1;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "F" || str[i] === "L") {
            res = uh = Math.floor((lh + uh) / 2);
        }
        else if (str[i] === "B" || str[i] === "R") {
            res = lh = Math.ceil((lh + uh) / 2);
        }
    }
    return res;
}
function findId(inp) {
    for (var i = 0; i < inp.length; i++) {
        inp[i].r = findrc(inp[i].row, { lh: 0, uh: 127 });
        inp[i].c = findrc(inp[i].col, { lh: 0, uh: 7 });
        // @ts-ignore
        inp[i].id = inp[i].r * 8 + inp[i].c;
    }
    return inp;
}
function solve(inp) {
    var pi = parseinp(inp);
    var iwi = findId(pi);
    // console.log(iwi);
    var aid = iwi.map(function (x) { return x.id; }).sort(function (a, b) { return a - b; });
    var seat = -1;
    for (var i = 0; i < aid.length; i++) {
        if (aid[i] + 1 !== aid[i + 1]) {
            seat = aid[i] + 1;
            break;
        }
    }
    console.table(aid);
    console.log("your seat is no.", seat);
    // @ts-ignore
    return Math.max.apply(Math, iwi.map(function (x) { return x.id; }));
}
console.log(solve(input));
