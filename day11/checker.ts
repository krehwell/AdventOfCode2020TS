type Pos = [number, number];

function Top(pos: Pos, inp:readonly string[][]): boolean {
    let [i, j] = pos;
    let found = false;

    if(i > 0) {
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

function Bottom(pos: Pos, inp:readonly string[][]): boolean {
    let [i, j] = pos;
    let found = false;

    if(i < inp.length - 1) {
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

function Left(pos: Pos, inp:readonly string[][]): boolean {
    let [i, j] = pos;
    let found = false;

    if(j > 0) {
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

function Right(pos: Pos, inp:readonly string[][]): boolean {
    let [i, j] = pos;
    let found = false;

    if(j < inp[i].length - 1) {
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

function TopRight(pos: Pos, inp:readonly string[][]): boolean {
    let [i, j] = pos;
    let found = false;

    if(i > 0 && j < inp[i].length -1 ){
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

    return found
}

function TopLeft(pos: Pos, inp:readonly string[][]): boolean {
    let [i, j] = pos;
    let found = false;

    if(i > 0 && j > 0 ){
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

    return found
}

function BottomRight(pos: Pos, inp:readonly string[][]): boolean {
    let [i, j] = pos;
    let found = false;

    if(i < inp.length - 1 && j < inp[i].length ){
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

    return found
}

function BottomLeft(pos: Pos, inp:readonly string[][]): boolean {
    let [i, j] = pos;
    let found = false;

    if(i < inp.length - 1 && j > 0 ){
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

    return found
}

export { Pos, Bottom, Top, Right, Left, TopRight, TopLeft, BottomRight, BottomLeft };
