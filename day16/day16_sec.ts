import * as fs from "fs";

const input = fs
    .readFileSync("./input.txt", "utf-8")
    .split("\n\n")
    .filter((x) => x);

interface IInputStructure {
    boundaries: IBoundaries;
    tickets: number[][];
}

interface IBoundaries {
    departureLocation: number[][];
    departureStation: number[][];
    departurePlatform: number[][];
    departureTrack: number[][];
    departureDate: number[][];
    departureTime: number[][];
    arrivalLocation: number[][];
    arrivalStation: number[][];
    arrivalPlatform: number[][];
    arrivalTrack: number[][];
    class: number[][];
    duration: number[][];
    price: number[][];
    route: number[][];
    row: number[][];
    seat: number[][];
    train: number[][];
    type: number[][];
    wagon: number[][];
    zone: number[][];
}

function getBoundParse(str: string) {
    let str_p = str.match(/\d+-\d+/g);

    let s = str_p.map(x => {
        let ranges = x.split("-");
        return [+ranges[0], +ranges[1]];
    })

    return s;
}

function parseInput(inp: string[]): IInputStructure {

    // parse boundaries
    let boundariesstr = inp[0].split("\n");
    let boundaries = {
        departureLocation : getBoundParse(boundariesstr[0]),
        departureStation : getBoundParse(boundariesstr[1]),
        departurePlatform : getBoundParse(boundariesstr[2]),
        departureTrack : getBoundParse(boundariesstr[3]),
        departureDate : getBoundParse(boundariesstr[4]),
        departureTime :getBoundParse(boundariesstr[5]),
        arrivalLocation : getBoundParse(boundariesstr[6]),
        arrivalStation : getBoundParse(boundariesstr[7]),
        arrivalPlatform : getBoundParse(boundariesstr[8]),
        arrivalTrack : getBoundParse(boundariesstr[9]),
        class : getBoundParse(boundariesstr[10]),
        duration : getBoundParse(boundariesstr[11]),
        price : getBoundParse(boundariesstr[12]),
        route : getBoundParse(boundariesstr[13]),
        row : getBoundParse(boundariesstr[14]),
        seat : getBoundParse(boundariesstr[15]),
        train : getBoundParse(boundariesstr[16]),
        type : getBoundParse(boundariesstr[17]),
        wagon : getBoundParse(boundariesstr[18]),
        zone : getBoundParse(boundariesstr[19]),
    }

    // parse your ticket
    let yourticketstr = inp[1];
    let yourticket = yourticketstr.match(/\d+/g).map(x => +x);

    // parse nearby ticket
    let nearbystr = inp[2].split("\n").filter(x => x);
    nearbystr.shift();
    let nearby = nearbystr.map(x => x.match(/\d+/g).map(x => +x));

    let tickets = [yourticket, ...nearby];

    return {boundaries, tickets}
}

function parseRow(data: IInputStructure): [number][] {
    let {tickets} = data;
    let ticketsRow = [];

    for (let i = 0; i < tickets[0].length; i++) {
        ticketsRow.push(tickets.map(x => x[i]));
    }

    return ticketsRow;
}

function findBoundaryOrder(ticketsRow: [number][], data: IInputStructure) {
    let {boundaries, tickets} = data;

    console.log(boundaries);

}

function solve(data: IInputStructure): number {
    let {boundaries, tickets} = data;
    let ticketsRow = parseRow(data);
    findBoundaryOrder(ticketsRow, data);
    return -1;
}

let data = parseInput(input);
// console.table(data.boundaries);

console.log("result is", solve(data));
