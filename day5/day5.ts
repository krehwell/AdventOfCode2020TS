import * as fs from "fs";
let input: string[] = fs.readFileSync("input.txt", "utf-8").split("\n").filter(x => x);

interface ds { row: string; col: string; r?: number; c?: number; id?: number; }

function parseinp(inp: string[]): ds[] {
  let res: ds[] = [];

  for (let i = 0; i < inp.length; i++) {
    const row = inp[i].slice(0, 7);
    const col = inp[i].slice(7);
    res.push({ row, col })
  }

  return res;
}

function findrc(str: string, range: {lh:number, uh:number}): number {
  let {lh, uh} = range;
  let res: number = -1;

  for(let i = 0; i < str.length; i++){
    if(str[i] === "F" || str[i] === "L" ){
      res = uh = Math.floor((lh + uh) / 2);
    }

    else if(str[i] === "B" || str[i] === "R"){
      res = lh = Math.ceil((lh + uh) / 2);
    }
  }

  return res;
}

function findId(inp: ds[]): ds[] {
  for (let i = 0; i < inp.length; i++) {
    inp[i].r = findrc(inp[i].row, {lh: 0, uh: 127});
    inp[i].c = findrc(inp[i].col, {lh: 0, uh: 7});
    // @ts-ignore
    inp[i].id = inp[i].r * 8 + inp[i].c;
  }

  return inp;
}

function solve(inp: string[]): number{
  let pi = parseinp(inp);
  let iwi = findId(pi);

  // console.log(iwi);
  let aid = iwi.map(x => x.id).sort((a:any, b:any)=>a-b) as number [];
  let seat = -1;
  for(let i = 0; i < aid.length; i++){
    if(aid[i]+1 !== aid[i + 1]){
      seat = aid[i] + 1;
      break;
    }
  }

  console.table(aid);
  console.log("your seat is no.", seat);


  // @ts-ignore
  return Math.max(...iwi.map(x => x.id));
}

console.log(solve(input));
