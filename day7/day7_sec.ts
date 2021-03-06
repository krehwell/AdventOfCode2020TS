import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").split("\n").filter(x => x);

function mapToObj(inp: any[], obj: {}){
  let [key, value] = inp;
  let newVal = value.split(",").map((x: any) => x.trim());
  newVal = newVal.map((x:any) => {
    if(x === "nothing"){
      return ["nothing", 0];
    }
    let [no, val] = [parseInt(x[0]), x.slice(2)];
    return [val,no];
  });
  // @ts-ignore
  obj[key] = newVal;
}

function parseInput(inp: string[]) {

  let ip = inp.map(x=> {
      x = x.replace(/bags/g, "bag").replace(/bag/g, "");
      x = x.replace(".", "").replace(/\s+/g, " ");
      x = x.replace("no other", "nothing").trim();
      let newX = x.split(/ contain/).filter(x => x).map(x => x.trim());
      return newX;
  });

  let object = {};

  ip.forEach(x => {
    mapToObj(x, object);
  })

  return object;
}

function traverse(bag: string, inp:any): number {
  let count = 1;

  if(bag === "nothing"){
    return 0;
  }

  let destination = inp[bag];
  console.log(destination);

  for(let i = 0; i < destination.length; i++) {
    let [color, val] = destination[i];
    console.log("searching for", color, val);
    count += val * traverse(color, inp);
  }

  return count;
}

function solve(inp: string[]): number {
  const pInp = parseInput(inp);

  console.log(pInp);

  return traverse("shiny gold", pInp) - 1;
}

console.log(solve(input));
