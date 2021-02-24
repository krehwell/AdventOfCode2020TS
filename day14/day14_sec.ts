import * as fs from "fs";
const readfile: IInput[] = fs
    .readFileSync("./input.txt", "utf-8")
    .split("\n")
    .filter((x) => x)
    .map((x) => {
        let [type, value] = x.split(" = ");

        if (/mask/.test(type)) {
            return { type: "mask", value };
        } else {
            let _type = type.match(/\d+/g)[0];
            return { type: "memory", memory: _type, value: value };
        }
    }, {});

type TValue = number | string;

interface IInput {
    type: "mask" | "memory";
    memory?: string;
    value: TValue;
}

function dec2bin(dec: number): string {
    let result = (dec >>> 0).toString(2);
    return "0".repeat(36 - result.length).concat(result);
}

function bin2dec(bin: string): number {
    return parseInt(bin, 2);
}

function parse_input(inp: IInput[]) {
    for (let i = 0; i < inp.length; i++) {
        let {type, memory, value} = inp[i];

        if (type === "memory") {
            inp[i].memory = dec2bin(+memory);
            inp[i].value = +value;
        }
    }
}

function apply_bitmask(bitmask: string, value: string): string {

    for (let i = 0; i < bitmask.length; i++) {
        let temp_value = value.split("");

        if (bitmask[i] === "X") {
            temp_value[i] = "X";
        } else if (bitmask[i] === "1") {
            temp_value[i] = "1";
        }

        value = temp_value.join("");
    }

    return value;
}

function calculate_floating(memory: string): string[] {

    if (memory === "") {
        return [""];
    }

    let memory_front = memory[0];
    let memory_rest = memory.slice(1);
    let partial_memory = calculate_floating(memory_rest);

    if(memory_front === "X") {
        return [
            ...partial_memory.map(addr => '0' + addr),
            ...partial_memory.map(addr => '1' + addr),
        ]
    } else {
        return [
            ...partial_memory.map(addr => memory_front + addr)
        ]
    }
}

function solve(inp: IInput[]): number {

    let mask: string;
    parse_input(inp);

    // apply bitmask
    for (let i = 0; i < inp.length; i++) {
        let {type, memory, value} = inp[i];

        if (type === "mask") {
            mask = value as string;
        } else if (type === "memory") {
            inp[i].memory = apply_bitmask(mask, memory);
        }

    }

    let memory_after_mask = inp.filter(x => x.type !== "mask");
    let product = {};

    // calculate the bitmask product
    for (let i = 0; i < memory_after_mask.length; i++) {

        let result = calculate_floating(memory_after_mask[i].memory);

        for(let item of result) {
            let decimal = bin2dec(item);
            product[decimal] = memory_after_mask[i].value;
        }

    }

    console.table(inp);
    console.log(product);

    let output = 0;
    for (let value in product) {
        output += product[value];
    }

    return output;
}

console.log("Result is:", solve(readfile));

