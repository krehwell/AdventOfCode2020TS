"use strict";
exports.__esModule = true;
var fs = require("fs");
var readfile = fs
    .readFileSync("input1_sec.txt", "utf-8")
    .split("\n")
    .filter(function (x) { return x; })
    .map(function (x) {
    var _a = x.split(" = "), type = _a[0], value = _a[1];
    if (/mask/.test(type)) {
        return { type: "mask", value: value };
    }
    else {
        var _type = type.match(/\d+/g)[0];
        return { type: _type, value: value };
    }
}, {});
function parse_input(inp) {
    for (var i = 0; i < inp.length; i++) {
        var _a = inp[i], type = _a.type, value = _a.value;
        if (type !== "mask") {
            inp[i].value = dec2bin(+value);
        }
    }
    return inp;
}
function dec2bin(dec) {
    var result = (dec >>> 0).toString(2);
    return "0".repeat(36 - result.length).concat(result);
}
function bin2dec(bin) {
    return parseInt(bin, 2);
}
function apply_bitmask(bitmask, value) {
    for (var i = 0; i < bitmask.length; i++) {
        if (bitmask[i] !== "X") {
            var temp_value = value.split("");
            temp_value[i] = bitmask[i];
            value = temp_value.join("");
        }
    }
    return value;
}
function solve(inp) {
    var mask;
    inp = parse_input(inp);
    // apply mask
    for (var i = 0; i < inp.length; i++) {
        var _a = inp[i], type = _a.type, value = _a.value;
        if (type === "mask") {
            mask = value;
        }
        else {
            inp[i].value = apply_bitmask(mask, value);
        }
    }
    // calculate value
    var inp_product = {};
    for (var i = 0; i < inp.length; i++) {
        var _b = inp[i], type = _b.type, value = _b.value;
        if (type !== "mask") {
            inp_product[type] = bin2dec(value);
        }
    }
    console.log(inp);
    console.log(inp_product);
    var result = 0;
    for (var value in inp_product) {
        result += inp_product[value];
    }
    return result;
}
console.log(solve(readfile));
