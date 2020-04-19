let Letter = require('./Letter.js');
//Constructor initializing the word
function Word(word) {
    this.letterArray = function () {
        let splitWord = word.split(''); // splits the word into an array
        const letterMap = splitWord.map(letter => {
            return new Letter(letter)// Instantiating new letter objects
        });
        return letterMap;
    }
    // Prints word by checking whether or not to print an underscore or letter
    this.printWord = function (userGuess) {

        const checkMap = this.letterArray.map(letter => {
            return letter.display(userGuess)
        });

        return checkMap.join(' ');
    }
    // Maps each in the array to the alreadyGuessed state
    this.checkLetter = function (userGuess) {
        this.letterArray().forEach(letter => { //Calls the letter array function and checks users guess for each letter
            letter.check(userGuess);
        })
    }

}

module.exports = Word;