"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("input.txt", "utf-8").split("\n").filter(function (x) { return x; });
function parseInput(inp) {
    var ip = inp.map(function (x) {
        var _a;
        x = x.replace(/bags/g, "bag").replace(/bag/g, "");
        x = x.replace(/\d/g, "").replace(".", "").replace(/\s+/g, " ");
        x = x.replace("no other", "nothing").trim();
        var newX = x.split(/ contain/).filter(function (x) { return x; });
        return [newX[0], (_a = newX[1]) === null || _a === void 0 ? void 0 : _a.split(",").map(function (y) { return y.trim(); })];
    });
    return ip;
}
function traverse(bag, inp, set) {
    if (set === void 0) { set = new Set(); }
    console.log("searching for", bag);
    if (set.has(bag)) {
        // console.log(set);
        return 0;
    }
    else {
        set.add(bag);
    }
    for (var i = 0; i < inp.length; i++) {
        var slot = inp[i];
        if (slot[1].includes(bag)) {
            // console.log("found one at", slot[0]);
            traverse(slot[0], inp, set);
        }
    }
    return set.size - 1;
}
function solve(inp) {
    var pInp = parseInput(inp);
    return traverse("shiny gold", pInp);
}
console.log(solve(input));
