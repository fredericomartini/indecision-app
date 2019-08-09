// var nameVar = 'Fred';
// console.log('nameVar', nameVar)

// const multiplier = (nums, multBy) => nums.map(num => num * multBy);


// console.log(multiplier([5, 2, 3], 2));

const multiplier = {
    numbers: [2, 5, 3, 8],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map(num => num * this.multiplyBy);
    }
}

console.log(multiplier.multiply());