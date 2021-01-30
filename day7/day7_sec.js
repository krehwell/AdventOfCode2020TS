"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("input.txt", "utf-8").split("\n").filter(function (x) { return x; });
function mapToObj(inp, obj) {
    var key = inp[0], value = inp[1];
    var newVal = value.split(",").map(function (x) { return x.trim(); });
    newVal = newVal.map(function (x) {
        if (x === "nothing") {
            return ["nothing", 0];
        }
        var _a = [parseInt(x[0]), x.slice(2)], no = _a[0], val = _a[1];
        return [val, no];
    });
    // @ts-ignore
    obj[key] = newVal;
}
function parseInput(inp) {
    var ip = inp.map(function (x) {
        x = x.replace(/bags/g, "bag").replace(/bag/g, "");
        x = x.replace(".", "").replace(/\s+/g, " ");
        x = x.replace("no other", "nothing").trim();
        var newX = x.split(/ contain/).filter(function (x) { return x; }).map(function (x) { return x.trim(); });
        return newX;
    });
    var object = {};
    ip.forEach(function (x) {
        mapToObj(x, object);
    });
    return object;
}
function traverse(bag, inp) {
    var count = 1;
    if (bag === "nothing") {
        return 0;
    }
    var destination = inp[bag];
    console.log(destination);
    for (var i = 0; i < destination.length; i++) {
        var _a = destination[i], color = _a[0], val = _a[1];
        console.log("searching for", color, val);
        count += val * traverse(color, inp);
    }
    return count;
}
function solve(inp) {
    var pInp = parseInput(inp);
    console.log(pInp);
    return traverse("shiny gold", pInp) - 1;
}
console.log(solve(input));
