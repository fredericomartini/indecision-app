"use strict";

// var nameVar = 'Fred';
// console.log('nameVar', nameVar)

// const multiplier = (nums, multBy) => nums.map(num => num * multBy);


// console.log(multiplier([5, 2, 3], 2));

var multiplier = {
    numbers: [2, 5, 3, 8],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (num) {
            return num * _this.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
