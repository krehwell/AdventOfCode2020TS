import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").split("\n").filter(x => x);

function parseInput(inp: string[]) {
  let ip = inp.map(x=> {
      x = x.replace(/bags/g, "bag").replace(/bag/g, "");
      x = x.replace(/\d/g, "").replace(".", "").replace(/\s+/g, " ");
      x = x.replace("no other", "nothing").trim();
      let newX = x.split(/ contain/).filter(x => x);
      return [ newX[0], newX[1]?.split(",").map(y => y.trim())];
  })

  return ip;
}

function traverse(bag: string, inp: any[], set = new Set()): number{
  console.log("searching for", bag);

  if(set.has(bag)){
    // console.log(set);
    return 0;
  }
  else {
    set.add(bag);
  }

  for(let i = 0; i < inp.length; i++){
    let slot = inp[i];

    if(slot[1].includes(bag)){
      // console.log("found one at", slot[0]);
      traverse(slot[0], inp, set);
    }

  }

  return set.size - 1;
}

function solve(inp: string[]): number{
  let pInp = parseInput(inp);

  return traverse("shiny gold", pInp);
}

console.log(solve(input));
