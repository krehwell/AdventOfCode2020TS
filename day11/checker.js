"use strict";
exports.__esModule = true;
exports.BottomLeft = exports.BottomRight = exports.TopLeft = exports.TopRight = exports.Left = exports.Right = exports.Top = exports.Bottom = void 0;
function Top(pos, inp) {
    var i = pos[0], j = pos[1];
    var found = false;
    if (i > 0) {
        if (inp[i][j] === "L") {
            return false;
        }
        if (inp[i][j] !== "#") {
            found = Top([i - 1, j], inp);
        }
        if (inp[i][j] === "#") {
            return true;
        }
    }
    return found;
}
exports.Top = Top;
function Bottom(pos, inp) {
    var i = pos[0], j = pos[1];
    var found = false;
    if (i < inp.length - 1) {
        if (inp[i][j] === "L") {
            return false;
        }
        if (inp[i][j] !== "#") {
            found = Bottom([i + 1, j], inp);
        }
        if (inp[i][j] === "#") {
            return true;
        }
    }
    return found;
}
exports.Bottom = Bottom;
function Left(pos, inp) {
    var i = pos[0], j = pos[1];
    var found = false;
    if (j > 0) {
        if (inp[i][j] === "L") {
            return false;
        }
        if (inp[i][j] !== "#") {
            found = Left([i, j - 1], inp);
        }
        if (inp[i][j] === "#") {
            return true;
        }
    }
    return found;
}
exports.Left = Left;
function Right(pos, inp) {
    var i = pos[0], j = pos[1];
    var found = false;
    if (j < inp[i].length - 1) {
        if (inp[i][j] === "L") {
            return false;
        }
        if (inp[i][j] !== "#") {
            found = Right([i, j + 1], inp);
        }
        if (inp[i][j] === "#") {
            return true;
        }
    }
    return found;
}
exports.Right = Right;
function TopRight(pos, inp) {
    var i = pos[0], j = pos[1];
    var found = false;
    if (i > 0 && j < inp[i].length - 1) {
        if (inp[i][j] === "L") {
            return false;
        }
        if (inp[i][j] !== "#") {
            found = TopRight([i - 1, j + 1], inp);
        }
        if (inp[i][j] === "#") {
            return true;
        }
    }
    return found;
}
exports.TopRight = TopRight;
function TopLeft(pos, inp) {
    var i = pos[0], j = pos[1];
    var found = false;
    if (i > 0 && j > 0) {
        if (inp[i][j] === "L") {
            return false;
        }
        if (inp[i][j] !== "#") {
            found = TopLeft([i - 1, j - 1], inp);
        }
        if (inp[i][j] === "#") {
            return true;
        }
    }
    return found;
}
exports.TopLeft = TopLeft;
function BottomRight(pos, inp) {
    var i = pos[0], j = pos[1];
    var found = false;
    if (i < inp.length - 1 && j < inp[i].length) {
        if (inp[i][j] === "L") {
            return false;
        }
        if (inp[i][j] !== "#") {
            found = BottomRight([i + 1, j + 1], inp);
        }
        if (inp[i][j] === "#") {
            return true;
        }
    }
    return found;
}
exports.BottomRight = BottomRight;
function BottomLeft(pos, inp) {
    var i = pos[0], j = pos[1];
    var found = false;
    if (i < inp.length - 1 && j > 0) {
        if (inp[i][j] === "L") {
            return false;
        }
        if (inp[i][j] !== "#") {
            found = BottomLeft([i + 1, j - 1], inp);
        }
        if (inp[i][j] === "#") {
            return true;
        }
    }
    return found;
}
exports.BottomLeft = BottomLeft;
