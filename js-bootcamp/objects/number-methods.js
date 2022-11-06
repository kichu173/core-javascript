// Number utility methods
let num = 1.1;

console.log(Math.ceil(num)); // 2
console.log(Math.round(num)); // 1
console.log(Math.floor(num)); // 1

let otherNum = 103.94;
console.log(otherNum.toFixed(1)); // 103.9

let randomNum = Math.random(); // genearate random num b/n 0 - 1(.99999).
console.log(randomNum);

// TO GENEARATE random range b/n 10 - 20(only whole numbers - you will not get decimal digit for random num)
let min = 10;
let max = 20;
let random = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(random);

// challenge area
function makeGuess(guessNum) {
    let min = 1;
    let max = 5;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random === guessNum;
}

console.log(makeGuess(1));