import * as fs from "fs";
let input = fs
  .readFileSync("input.txt", "utf-8")
  .split("\n\n")
  .filter((x) => x);

interface id {
  byr?: number;
  iyr?: number;
  eyr?: number;
  hgt?: string;
  hcl?: string;
  ecl?: string; // "amb" | "blu" | "brn" | "gry" | "grn" | "hzl" |"oth";
  pid?: string;
}

function constructObject(arr: []) {
  return arr.reduce((acc, val) => {
    // @ts-ignore
    let [key, value] = val;
    acc[key] = value;
    return acc;
  }, {});
}

function parse(inp: string[]): Array<id | any> {
  let pInput: Array<any> = [];
  let pp: (string | any)[] = [];

  for (let i = 0; i < inp.length; i++) {
    let p = inp[i].replace(/\n/g, " ").trim().split(" ");
    pp.push(p.map((x) => x.split(":")));
  }

  for (let i = 0; i < inp.length; i++) {
    pInput.push(constructObject(pp[i]));
  }

  return pInput;
}

function byrCheck(dat: number): boolean {
  if(+dat >= 1920 && +dat <= 2002){
    return true;
  }
  console.log("byr");
  return false;
}

function iyrCheck(dat: number): boolean {
  if(+dat >= 2010 && +dat <= 2020){
    return true;
  }

  console.log("iyr");
  return false
}

function eyrCheck(dat: number): boolean {
  if(dat >= 2020 && dat <= 2030){
    return true;
  }

  console.log("eyr");
  return false
}

function hgtCheck(dat: string): boolean {
  let [num, type] = dat.split(/(cm|in)/);

  if(type === "cm"){
    if(+num >= 150 && +num <= 193){
      return true;
    }
  }

  else if(type === "in"){
    if(+num >= 59 && +num <= 76){
      return true;
    }
  }

  console.log("hgt");
  return false
}

function hclCheck(dat: string): boolean {
  let [hash, color] = dat.split("#");

  if(/^([a-f0-9]){6}$/.test(color)){
      return true;
  }

  console.log("hcl");
  return false
}

function eclCheck(dat: string): boolean {
  if(/^(amb|blu|brn|gry|grn|hzl|oth)$/.test(dat)){
    return true;
  }

  console.log("ecl");
  return false
}

function pidCheck(dat: string): boolean {
  if(/^\d{9}$/.test(dat)){
     return true;
  }

  console.log("pid");
  return false
}

function isValid(dat: {}) {
  const id = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

  let b = true;

  id.forEach((x) => {
    if (!dat.hasOwnProperty(x)) {
      return (b = false);
    }
  });

  return b;
}

function solve(inp: string[]): number {
  let inpParse = parse(inp);

  let validData = [];
  for (let i = 0; i < inpParse.length; i++) {
    if (isValid(inpParse[i])) {
      validData.push(inpParse[i]);
    }
  }

  let isValidCount = 0;

  for (let i = 0; i < validData.length; i++) {
    const element = validData[i];
    if(!byrCheck(+element.byr)) continue;
    if(!eyrCheck(+element.eyr)) continue;
    if(!iyrCheck(+element.iyr)) continue;
    if(!hgtCheck(element.hgt)) continue;
    if(!hclCheck(element.hcl)) continue;
    if(!eclCheck(element.ecl)) continue;
    if(!pidCheck(element.pid)) continue;

    console.log(element);

    isValidCount++;
  }

  return isValidCount;
}

console.log(solve(input));
