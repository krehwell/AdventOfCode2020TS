export {};

interface INumbers {
    (start: number): { last: number; secondLast: number };
}

class Numbers {
    numbers: INumbers;
    latestNumber: number;
    initialLength: number;
    range: number;

    constructor(inp: number[], r: number) {
        this.numbers = <INumbers>{};

        for (let i = 0; i < inp.length; i++) {
            let num = inp[i];
            this.numbers[num] = { last: i + 1, previousBeforeLast: undefined };
        }

        this.initialLength = inp.length;
        this.latestNumber = inp[inp.length - 1];
        this.range = r;
    }

    AddNumber(val: number, indexFound: number) {
        if (!this.numbers.hasOwnProperty(val)) {
            this.numbers[val] = { last: indexFound };
        } else {
            const { last } = this.numbers[val];
            this.numbers[val] = { last: indexFound, secondLast: last };
        }

        this.latestNumber = val;

        // debug
        // console.log(this.numbers);
        // console.log("latest Number to search:", this.latestNumber);
    }

    GetNumberDifference() {
        const { last, secondLast } = this.numbers[this.latestNumber];
        return last - secondLast;
    }

    CheckOccurence() {
        let occurence = 0;

        if (this.numbers[this.latestNumber].last) {
            occurence++;
        }

        if (this.numbers[this.latestNumber].secondLast) {
            occurence++;
        }

        return occurence;
    }

    Solve() {
        for (let i = this.initialLength + 1; i <= this.range; i++) {
            if (this.CheckOccurence() > 1) {
                let newNumber = this.GetNumberDifference();
                this.AddNumber(newNumber, i);
            } else {
                this.AddNumber(0, i);
            }
        }

        return this.latestNumber;
    }
}

// ############## TESTING ################

const Q = new Numbers([16, 1, 0, 18, 12, 14, 19], 30000000);
const Q1 = new Numbers([1, 3, 2], 2020);
const Q2 = new Numbers([2, 1, 3], 2020);
const Q3 = new Numbers([1, 2, 3], 2020);
const Q4 = new Numbers([2, 3, 1], 2020);
const Q5 = new Numbers([3, 2, 1], 2020);
const Q6 = new Numbers([3, 1, 2], 2020);
const Q7 = new Numbers([0, 3, 6], 10); // default question from example

console.table([
    Q.Solve(),
    // Q1.Solve(),
    // Q2.Solve(),
    // Q3.Solve(),
    // Q4.Solve(),
    // Q5.Solve(),
    // Q6.Solve(),
    // Q7.Solve(),
]);
