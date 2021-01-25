"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n\n")
    .filter(function (x) { return x; });
function constructObject(arr) {
    return arr.reduce(function (acc, val) {
        // @ts-ignore
        var key = val[0], value = val[1];
        acc[key] = value;
        return acc;
    }, {});
}
function parse(inp) {
    var pInput = [];
    var pp = [];
    for (var i = 0; i < inp.length; i++) {
        var p = inp[i].replace(/\n/g, " ").trim().split(" ");
        pp.push(p.map(function (x) { return x.split(":"); }));
    }
    for (var i = 0; i < inp.length; i++) {
        pInput.push(constructObject(pp[i]));
    }
    return pInput;
}
function byrCheck(dat) {
    if (+dat >= 1920 && +dat <= 2002) {
        return true;
    }
    console.log("byr");
    return false;
}
function iyrCheck(dat) {
    if (+dat >= 2010 && +dat <= 2020) {
        return true;
    }
    console.log("iyr");
    return false;
}
function eyrCheck(dat) {
    if (dat >= 2020 && dat <= 2030) {
        return true;
    }
    console.log("eyr");
    return false;
}
function hgtCheck(dat) {
    var _a = dat.split(/(cm|in)/), num = _a[0], type = _a[1];
    if (type === "cm") {
        if (+num >= 150 && +num <= 193) {
            return true;
        }
    }
    else if (type === "in") {
        if (+num >= 59 && +num <= 76) {
            return true;
        }
    }
    console.log("hgt");
    return false;
}
function hclCheck(dat) {
    var _a = dat.split("#"), hash = _a[0], color = _a[1];
    if (/^([a-f0-9]){6}$/.test(color)) {
        return true;
    }
    console.log("hcl");
    return false;
}
function eclCheck(dat) {
    if (/^(amb|blu|brn|gry|grn|hzl|oth)$/.test(dat)) {
        return true;
    }
    console.log("ecl");
    return false;
}
function pidCheck(dat) {
    if (/^\d{9}$/.test(dat)) {
        return true;
    }
    console.log("pid");
    return false;
}
function isValid(dat) {
    var id = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
    var b = true;
    id.forEach(function (x) {
        if (!dat.hasOwnProperty(x)) {
            return (b = false);
        }
    });
    return b;
}
function solve(inp) {
    var inpParse = parse(inp);
    var validData = [];
    for (var i = 0; i < inpParse.length; i++) {
        if (isValid(inpParse[i])) {
            validData.push(inpParse[i]);
        }
    }
    var isValidCount = 0;
    for (var i = 0; i < validData.length; i++) {
        var element = validData[i];
        if (!byrCheck(+element.byr))
            continue;
        if (!eyrCheck(+element.eyr))
            continue;
        if (!iyrCheck(+element.iyr))
            continue;
        if (!hgtCheck(element.hgt))
            continue;
        if (!hclCheck(element.hcl))
            continue;
        if (!eclCheck(element.ecl))
            continue;
        if (!pidCheck(element.pid))
            continue;
        console.log(element);
        isValidCount++;
    }
    return isValidCount;
}
console.log(solve(input));
