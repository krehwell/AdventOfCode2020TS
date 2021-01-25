var fs = require("fs");
var input = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .filter(function (x) { return x; });
function parse(inp) {
    var parse = inp.map(function (x) { return x.split(" "); });
    var parseResult = [];
    for (var i = 0; i < parse.length; i++) {
        parseResult[i] = {
            lp: +parse[i][0].split("-")[0],
            rp: +parse[i][0].split("-")[1],
            char: parse[i][1].replace(":", ""),
            pattern: "#" + parse[i][2]
        };
    }
    return parseResult;
}
function solve(inp) {
    var valid = 0;
    for (var i = 0; i < inp.length; i++) {
        var _a = inp[i], lp = _a.lp, rp = _a.rp, char = _a.char, pattern = _a.pattern;
        var found = 0;
        if (pattern.charAt(lp) === char) {
            found++;
        }
        if (pattern.charAt(rp) === char) {
            found++;
        }
        if (found === 1) {
            valid++;
        }
    }
    return valid;
}
console.log(solve(parse(input)));
