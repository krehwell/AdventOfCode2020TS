"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
function countOccurence(nums, num) {
    var occurence = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === num) {
            occurence++;
        }
    }
    return occurence;
}
function getDifference(nums, num) {
    var lastSpoken = undefined;
    var recentlyBeforeLast = undefined;
    for (var i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === num) {
            if (!lastSpoken) {
                lastSpoken = i;
            }
            else {
                recentlyBeforeLast = i;
                break;
            }
        }
    }
    return lastSpoken - recentlyBeforeLast;
}
function solve(inp, range) {
    // console.log(inp);
    var numbers = __spreadArrays(inp);
    for (var i = 0, j = inp.length; j < range; i++) {
        var lastNumber = numbers[numbers.length - 1];
        if (countOccurence(numbers, lastNumber) > 1) {
            numbers.push(getDifference(numbers, lastNumber));
        }
        else {
            numbers.push(0);
        }
        j++;
    }
    // console.log(numbers);
    return numbers[numbers.length - 1];
}
var input = [16, 1, 0, 18, 12, 14, 19];
var input1 = [1, 3, 2];
var input2 = [2, 1, 3];
var input3 = [1, 2, 3];
var input4 = [2, 3, 1];
var input5 = [3, 1, 2];
var input6 = [0, 3, 6]; // default question from example
console.log(solve(input6, 10));
console.log(solve(input1, 2020));
console.log(solve(input2, 2020));
console.log(solve(input3, 2020));
console.log(solve(input4, 2020));
console.log(solve(input5, 2020));
console.log("puzzle answer:", solve(input, 2020));
