"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs
    .readFileSync("./input.txt", "utf-8")
    .split("\n\n")
    .filter(function (x) { return x; })
    .map(function (x) { return x.replace(/\n/g, " "); });
function parseInput(inp) {
    console.log(inp);
    // parse class
    var classstring = inp[0];
    var classParse = classstring.match(/\d+-\d+/g);
    var boundaries = classParse.map(function (x) {
        var ranges = x.split("-");
        return [+ranges[0], +ranges[1]];
    });
    console.log(boundaries);
    // parse nearby
    var nearbystring = inp[2];
    var nearbyparse = nearbystring.match(/\d+/g);
    var nearby = nearbyparse.map(function (x) { return +x; });
    // console.log(nearby);
    return { boundaries: boundaries, nearby: nearby };
}
function checkValid(range, val) {
    for (var i = 0; i < range.length; i++) {
        var min = range[i][0];
        var max = range[i][1];
        if (val >= min && val <= max) {
            return true;
        }
    }
    return false;
}
function solve(data) {
    var invalidTicket = [];
    var boundaries = data.boundaries, nearby = data.nearby;
    for (var i = 0; i < nearby.length; i++) {
        if (!checkValid(boundaries, nearby[i])) {
            invalidTicket.push(nearby[i]);
        }
    }
    console.log(invalidTicket);
    return invalidTicket.reduce(function (acc, val) { return acc += val; });
}
var data = parseInput(input);
console.log("result is", solve(data));
