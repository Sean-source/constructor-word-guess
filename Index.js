let inquirer = require("inquirer");
let Word = require("./Word.js");
let randomwordArray = ["array", "linkedlist", "stack", "queue", "deque"];
let userGuesses = [];
let guessesRemaining;
let initializeWord;
let initialWord;
initialize();

//Initialize a random word and then prompts the user
function initialize() {
    guessesRemaining = 6;
    initializeWord = generaterandomWord();
    initialWord = new Word(initializeWord);
    initialWord.initializeLetterArray();
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
    if (initialWord.checkWord()) {
        console.log("Congrats! You won the game.");
        return newGame();
    }
    inquirer.prompt([
        {
            type: "input",
            message: "Please choose a lowercase letter.",
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


        if (guessesRemaining <= 0) {
            console.log("You lose.");
            return newGame();
        }
        if (!initialWord.word.includes(input.user)) {
            guessesRemaining--;
            console.log("That is incorrect. Guesses Remaining: " + guessesRemaining);
            console.log(initialWord.printWord(input.user));
            return prompts();
        }


        if (userGuesses.includes(input.user)) {
            console.log("That letter has already been guessed. Guess another letter.")
            console.log(initialWord.printWord(input.user));
            return prompts();
        }

        if (initialWord.word.includes(input.user) && guessesRemaining > 0 && !userGuesses.includes(input.user) && !initialWord.checkWord()) {

            userGuesses.push(input.user);
            initialWord.checkLetter(input.user);
            console.log(initialWord.printWord(input.user));
            return prompts();

        }



    })


}
function newGame() {
    inquirer.prompt([{
        type: "confirm",
        message: "Would you like to play again Y / N?",
        name: "user"
    }]).then(function (input) {
        if (input.user == true) {
            return initialize();
        }
        else {
            return;
        }

    })
}
