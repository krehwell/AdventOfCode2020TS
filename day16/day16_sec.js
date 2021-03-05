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
var input = fs
    .readFileSync("./input.txt", "utf-8")
    .split("\n\n")
    .filter(function (x) { return x; });
function getBoundParse(str) {
    var str_p = str.match(/\d+-\d+/g);
    var s = str_p.map(function (x) {
        var ranges = x.split("-");
        return [+ranges[0], +ranges[1]];
    });
    return s;
}
function parseInput(inp) {
    // parse boundaries
    var boundariesstr = inp[0].split("\n");
    var boundaries = {
        departureLocation: getBoundParse(boundariesstr[0]),
        departureStation: getBoundParse(boundariesstr[1]),
        departurePlatform: getBoundParse(boundariesstr[2]),
        departureTrack: getBoundParse(boundariesstr[3]),
        departureDate: getBoundParse(boundariesstr[4]),
        departureTime: getBoundParse(boundariesstr[5]),
        arrivalLocation: getBoundParse(boundariesstr[6]),
        arrivalStation: getBoundParse(boundariesstr[7]),
        arrivalPlatform: getBoundParse(boundariesstr[8]),
        arrivalTrack: getBoundParse(boundariesstr[9]),
        "class": getBoundParse(boundariesstr[10]),
        duration: getBoundParse(boundariesstr[11]),
        price: getBoundParse(boundariesstr[12]),
        route: getBoundParse(boundariesstr[13]),
        row: getBoundParse(boundariesstr[14]),
        seat: getBoundParse(boundariesstr[15]),
        train: getBoundParse(boundariesstr[16]),
        type: getBoundParse(boundariesstr[17]),
        wagon: getBoundParse(boundariesstr[18]),
        zone: getBoundParse(boundariesstr[19])
    };
    // parse your ticket
    var yourticketstr = inp[1];
    var yourticket = yourticketstr.match(/\d+/g).map(function (x) { return +x; });
    // parse nearby ticket
    var nearbystr = inp[2].split("\n").filter(function (x) { return x; });
    nearbystr.shift();
    var nearby = nearbystr.map(function (x) { return x.match(/\d+/g).map(function (x) { return +x; }); });
    var tickets = __spreadArrays([yourticket], nearby);
    return { boundaries: boundaries, tickets: tickets };
}
function parseRow(data) {
    var tickets = data.tickets;
    var ticketsRow = [];
    var _loop_1 = function (i) {
        ticketsRow.push(tickets.map(function (x) { return x[i]; }));
    };
    for (var i = 0; i < tickets[0].length; i++) {
        _loop_1(i);
    }
    return ticketsRow;
}
function findBoundaryOrder(ticketsRow, data) {
    var boundaries = data.boundaries, tickets = data.tickets;
    console.log(boundaries);
}
function solve(data) {
    var boundaries = data.boundaries, tickets = data.tickets;
    var ticketsRow = parseRow(data);
    findBoundaryOrder(ticketsRow, data);
    return -1;
}
var data = parseInput(input);
// console.table(data.boundaries);
console.log("result is", solve(data));
