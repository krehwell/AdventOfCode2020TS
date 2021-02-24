import * as fs from "fs";
const readfile = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .filter((x) => x)
    .map((x) => {
        let [type, value] = x.split(" = ");

        if (/mask/.test(type)) {
            return { type: "mask", value };
        } else {
            let _type = type.match(/\d+/g)[0];
            return { type: _type, value: value };
        }
    }, {});

interface IInput {
    type: string;
    value: string;
}

function parse_input(inp: IInput[]) {
    for (let i = 0; i < inp.length; i++) {
        let { type, value } = inp[i];

        if (type !== "mask") {
            inp[i].value = dec2bin(+value);
        }
    }

    return inp;
}

function dec2bin(dec: number): string {
    let result = (dec >>> 0).toString(2);
    return "0".repeat(36 - result.length).concat(result);
}

function bin2dec(bin: string): number {
    return parseInt(bin, 2);
}

function apply_bitmask(bitmask: string, value: string): string {
    for (let i = 0; i < bitmask.length; i++) {
        if (bitmask[i] !== "X") {
            let temp_value = value.split("");
            temp_value[i] = bitmask[i];
            value = temp_value.join("");
        }
    }

    return value;
}

function solve(inp: IInput[]): number {
    let mask: string;

    inp = parse_input(inp);

    // apply mask
    for (let i = 0; i < inp.length; i++) {
        let { type, value } = inp[i];

        if (type === "mask") {
            mask = value;
        } else {
            inp[i].value = apply_bitmask(mask, value);
        }
    }

    // calculate value
    let inp_product = {} ;
    for (let i = 0; i < inp.length; i++) {
        let { type, value } = inp[i];

        if (type !== "mask") {
            inp_product[type] = bin2dec(value);
        }
    }

    console.log(inp);
    console.log(inp_product);

    let result = 0;
    for (let value in inp_product) {
        result += inp_product[value];
    }

    return result;
}

console.log(solve(readfile));
