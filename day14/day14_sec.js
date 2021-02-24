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
var readfile = fs
    .readFileSync("./input.txt", "utf-8")
    .split("\n")
    .filter(function (x) { return x; })
    .map(function (x) {
    var _a = x.split(" = "), type = _a[0], value = _a[1];
    if (/mask/.test(type)) {
        return { type: "mask", value: value };
    }
    else {
        var _type = type.match(/\d+/g)[0];
        return { type: "memory", memory: _type, value: value };
    }
}, {});
function dec2bin(dec) {
    var result = (dec >>> 0).toString(2);
    return "0".repeat(36 - result.length).concat(result);
}
function bin2dec(bin) {
    return parseInt(bin, 2);
}
function parse_input(inp) {
    for (var i = 0; i < inp.length; i++) {
        var _a = inp[i], type = _a.type, memory = _a.memory, value = _a.value;
        if (type === "memory") {
            inp[i].memory = dec2bin(+memory);
            inp[i].value = +value;
        }
    }
}
function apply_bitmask(bitmask, value) {
    for (var i = 0; i < bitmask.length; i++) {
        var temp_value = value.split("");
        if (bitmask[i] === "X") {
            temp_value[i] = "X";
        }
        else if (bitmask[i] === "1") {
            temp_value[i] = "1";
        }
        value = temp_value.join("");
    }
    return value;
}
function calculate_floating(memory) {
    if (memory === "") {
        return [""];
    }
    var memory_front = memory[0];
    var memory_rest = memory.slice(1);
    var partial_memory = calculate_floating(memory_rest);
    if (memory_front === "X") {
        return __spreadArrays(partial_memory.map(function (addr) { return '0' + addr; }), partial_memory.map(function (addr) { return '1' + addr; }));
    }
    else {
        return __spreadArrays(partial_memory.map(function (addr) { return memory_front + addr; }));
    }
}
function solve(inp) {
    var mask;
    parse_input(inp);
    // apply bitmask
    for (var i = 0; i < inp.length; i++) {
        var _a = inp[i], type = _a.type, memory = _a.memory, value = _a.value;
        if (type === "mask") {
            mask = value;
        }
        else if (type === "memory") {
            inp[i].memory = apply_bitmask(mask, memory);
        }
    }
    var memory_after_mask = inp.filter(function (x) { return x.type !== "mask"; });
    var product = {};
    // calculate the bitmask product
    for (var i = 0; i < memory_after_mask.length; i++) {
        var result = calculate_floating(memory_after_mask[i].memory);
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var item = result_1[_i];
            var decimal = bin2dec(item);
            product[decimal] = memory_after_mask[i].value;
        }
    }
    console.table(inp);
    console.log(product);
    var output = 0;
    for (var value in product) {
        output += product[value];
    }
    return output;
}
console.log("Result is:", solve(readfile));
