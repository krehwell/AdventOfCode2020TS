"use strict";
exports.__esModule = true;
var Numbers = /** @class */ (function () {
    function Numbers(inp, r) {
        this.numbers = {};
        for (var i = 0; i < inp.length; i++) {
            var num = inp[i];
            this.numbers[num] = { last: i + 1, previousBeforeLast: undefined };
        }
        this.initialLength = inp.length;
        this.latestNumber = inp[inp.length - 1];
        this.range = r;
    }
    Numbers.prototype.AddNumber = function (val, indexFound) {
        if (!this.numbers.hasOwnProperty(val)) {
            this.numbers[val] = { last: indexFound };
        }
        else {
            var last = this.numbers[val].last;
            this.numbers[val] = { last: indexFound, secondLast: last };
        }
        this.latestNumber = val;
        // debug
        // console.log(this.numbers);
        // console.log("latest Number to search:", this.latestNumber);
    };
    Numbers.prototype.GetNumberDifference = function () {
        var _a = this.numbers[this.latestNumber], last = _a.last, secondLast = _a.secondLast;
        return last - secondLast;
    };
    Numbers.prototype.CheckOccurence = function () {
        var occurence = 0;
        if (this.numbers[this.latestNumber].last) {
            occurence++;
        }
        if (this.numbers[this.latestNumber].secondLast) {
            occurence++;
        }
        return occurence;
    };
    Numbers.prototype.Solve = function () {
        for (var i = this.initialLength + 1; i <= this.range; i++) {
            if (this.CheckOccurence() > 1) {
                var newNumber = this.GetNumberDifference();
                this.AddNumber(newNumber, i);
            }
            else {
                this.AddNumber(0, i);
            }
        }
        return this.latestNumber;
    };
    return Numbers;
}());
// ############## TESTING ################
var Q = new Numbers([16, 1, 0, 18, 12, 14, 19], 30000000);
var Q1 = new Numbers([1, 3, 2], 2020);
var Q2 = new Numbers([2, 1, 3], 2020);
var Q3 = new Numbers([1, 2, 3], 2020);
var Q4 = new Numbers([2, 3, 1], 2020);
var Q5 = new Numbers([3, 2, 1], 2020);
var Q6 = new Numbers([3, 1, 2], 2020);
var Q7 = new Numbers([0, 3, 6], 10); // default question from example
console.table([
    Q.Solve(),
]);
