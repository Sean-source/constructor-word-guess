let inquirer = require("inquirer");
let Word = require("./Word.js");
let randomwordArray = ["array", "linked list", "stack", "queue", "deque"];
let userGuesses = [];
let guessesRemaining = 10;
let initializeWord;
let word;
initialize();

//Initialize a random word and then prompts the user
function initialize() {
    initializeWord = generaterandomWord();
    word = new Word(initializeWord);
    prompts();
}

//Generates a random word using Math.random
function generaterandomWord() {
    let randomIndex = Math.floor(Math.random() * randomwordArray.length);
    let randomWord = randomwordArray[randomIndex];
    return randomWord;

}

//Using inquirer.prompt asking the user to choose a letter.
function prompts() {
    inquirer.prompt([
        {
            type: "input",
            message: "Hello there, please choose a lowercase letter.",
            name: "user",
            validate: function (input) {
                if (/[a-z]/.test(input) && input.length == 1) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    ]).then(function (input) {//Javascript promise used to check input.

        if (guessesRemaining > 0 && !userGuesses.includes(input.user)) {
            word.checkLetter(input.user);
            console.log(word.printWord(input.user));
            prompts();
        }
        if (guessesRemaining == 0) {
            console.log("You lose. Would you like to play again?");
            return;
        }
        if (userGuesses.includes(input.user)) {
            console.log("That letter has already been guessed. Guess another letter.")
            prompts();
        }
        guessesRemaining--;




    })


}