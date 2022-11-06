function Hangman(word, guessLimit) {// if function name starts with capital Letter we should assume that as a constructor function.
    this.word = word.toLowerCase().split(''); // this gives the access to set the attributes to custom object created by new operator.
    this.letterGuessed = [];
    this.guessLimit = guessLimit;
    this.status = 'playing';
}

Hangman.prototype.getPuzzle = function() {// inside prototype function you can use arrow functions for callbacks to include this, which does not work in regular functions.
    let puzzle = ''; 

    // ['c'].includes('c') | ['a','m','c','d'].includes('c')
    // true
    this.word.forEach((letter) => {
        if(this.letterGuessed.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += "*";
        }
    })

    return puzzle;
}

Hangman.prototype.makeGuess = function(guessWord) {
    guessWord = guessWord.toLowerCase();
    const isUnique = !this.letterGuessed.includes(guessWord);
    const isBadGuess = !this.word.includes(guessWord);

    if(this.status !== 'playing') {
        return;
    }

    if(isUnique) {
        this.letterGuessed.push(guessWord);
    }

    //unique bad guess, then decrement guessLimit
    if(isUnique && isBadGuess) {
        this.guessLimit--;
    }

    this.calcStatus();
}

Hangman.prototype.calcStatus = function() {
    //second way to approach to modify status to finished.
    // every only works if every single item in the array passes your test function. returns true or false.
    const finished = this.word.every((letter) => {
        return this.letterGuessed.includes(letter) || letter === ' ';
    })

    //first way to approach to modify status to finished.
    // let finished = true;

    // this.word.forEach((letter) => {
    //     if (this.letterGuessed.includes(letter)) {

    //     } else {
    //         finished = false;
    //     }
    // })

    if (this.guessLimit === 0) {
        this.status = 'failed';
    } else if (finished) {
        this.status = 'finished';
    } else {
        this.status = 'playing';
    }
}

Hangman.prototype.getStatusMessage = function() {
    if (this.status === 'playing') {
        return `Guesses left: ${this.guessLimit}`
    } else if (this.status === 'failed') {
        return `Nice try! The word was "${this.word.join('')}".`
    } else {
        return 'Great Work! You guessed the word.';
    }
}

let hangman1 = new Hangman('car Parts', 2);
const hangman2 = new Hangman('New Jersey', 4);// new operator over here creates an instance of constructor function which return the attributes and we set values for attributes from here.

console.log(hangman1);
console.log(hangman2);

const puzzleEl = document.querySelector('#display-puzzle');
const guessEl = document.querySelector('#display-guess-limit');

let game1;

// puzzleEl.textContent = hangman1.getPuzzle();
// guessEl.textContent = hangman1.getStatusMessage();

window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render();
})

function render() {
    puzzleEl.textContent = game1.getPuzzle();
    guessEl.textContent = game1.getStatusMessage();
}

async function startGame() {
    const puzzle = await getPuzzle('2');
    game1 = new Hangman(puzzle, 5);
    render();
}

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

// This is for practice and understand concepts.
// Using fetch api from request.js
getPuzzle('1').then(function(puzzle) {
    console.log(puzzle);
}).catch(function(error) {
    console.log(`Error: ${error}`);
})

//challenge 16. async await
getCurrentCountry().then(function (country) {
    console.log(country.name); // India
}).catch(function (error) {
    console.log(`Error: ${error}`);
});
