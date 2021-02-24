export{};

function countOccurence(nums: number[], num: number): number {

    let occurence = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === num) {
            occurence++;
        }
    }

    return occurence;
}

function getDifference(nums: number[], num: number): number {

    let lastSpoken: number = undefined;
    let recentlyBeforeLast: number = undefined;

    for (let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] === num) {
            if(!lastSpoken) {
                lastSpoken = i;
            } else {
                recentlyBeforeLast = i;
                break;
            }
        }
    }

    return lastSpoken - recentlyBeforeLast;
}

function solve(inp: number[], range: number): number {

    // console.log(inp);

    let numbers = [ ...inp ];

    for (let i = 0, j = inp.length; j < range; i++) {

        let lastNumber = numbers[numbers.length - 1];

        if (countOccurence(numbers, lastNumber) > 1) {
            numbers.push(getDifference(numbers, lastNumber));
        } else {
            numbers.push(0);
        }

        j++;
    }

    // console.log(numbers);

    return numbers[numbers.length - 1];
}

const input = [16, 1, 0, 18, 12, 14, 19];
const input1 = [1, 3, 2];
const input2 = [2, 1, 3];
const input3 = [1, 2, 3];
const input4 = [2, 3, 1];
const input5 = [3, 1, 2];
const input6 = [0, 3, 6];  // default question from example

console.log(solve(input6, 10));

console.log(solve(input1, 2020));
console.log(solve(input2, 2020));
console.log(solve(input3, 2020));
console.log(solve(input4, 2020));
console.log(solve(input5, 2020));
console.log("puzzle answer:", solve(input, 2020));
