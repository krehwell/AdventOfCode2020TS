import * as fs from "fs";
let input = fs.readFileSync("input.txt", "utf-8").split("\n\n").filter(x => x);

function parse(inp: string[]): Array<string[]>{

  let pString: Array<string[]> = [];

  for(let i = 0; i < inp.length; i++){
    /// @ts-ignore
    pString.push(inp[i].match(/\w+:/g).map(x => x.replace(":", "")));
  }

  return pString;
}

function checkIsValid(inp: string[]): boolean {
  const id = [
    "byr",
		"iyr",
		"eyr",
		"hgt",
		"hcl",
		"ecl",
		"pid"
  ]

  let b = true;
  id.forEach(x => {
    if(!inp.includes(x)){
      return b = false;
    }
  })

  return b;
}

function solve(inp: string[]): number{
  let pString = parse(inp);

  let valid = 0;

  pString.forEach(x => {
    if(checkIsValid(x)){
      valid++;
    }
  })

  return valid;
}

console.log(solve(input));
