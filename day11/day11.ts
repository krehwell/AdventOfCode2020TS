import * as fs from "fs";
const _input = fs.readFileSync("input1.txt", "utf-8").split("\n").filter(x => x)
  .map(x => x.concat(".")).map(x => ".".concat(x));
let input = [".".repeat(_input[0].length), ..._input, ".".repeat(_input[0].length)];

function evaluate(inp: string[]): [string, boolean] {

  let top = inp[0];
  let mid = inp[1];
  let bot = inp[2];

  let isChanged = false;
  // console.log(mid);

  let arrstring = "";

  for(let i = 1; i < mid.length - 1; i++){
    let adjacent = top[i] + top[i + 1] + top[i-1]
                 + bot[i] + bot[i + 1] + bot[i-1]
                 + mid[i - 1] + mid[i + 1];

    if(mid[i] === ".") {
        arrstring += "."
    }

    else if(mid[i] === "L") {
      let occupied = (adjacent.match(/#/g) || []).length;

      if(occupied === 0) {
        arrstring += "#"
        isChanged = true;

      } else {
        arrstring += "L";
      }

    }

    else if(mid[i] === "#") {
      let occupied = (adjacent.match(/#/g) || []).length;

      if(occupied >= 4) {
        arrstring += "L"
        isChanged = true;

      } else {
        arrstring += "#";
      }

    }

  }


  return [ "." + arrstring + ".", isChanged ];
}

function solve(inp: string[]): number {

  let keepCheck = false;

  do {

    keepCheck = false;

    for(let i = 1, inp_temp = [...inp]; i < inp.length - 1; i++) {
      let [result, kc] = evaluate( [ inp[i - 1], inp[i], inp[i + 1] ] );

      inp_temp[i] = result;

      if(!keepCheck) {
        keepCheck = kc;
      }

      if(i === inp.length - 2){
        inp = [...inp_temp];
      }
    }

  } while(keepCheck);

  console.table(inp);

  return inp.join("").match(/#/g)?.length || -1;
}

console.table(input);
console.log(solve(input));
