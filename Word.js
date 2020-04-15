let Letter = require('word.js');

function Word(word) {
    this.letterArray = function () {
        let splitWord = word.split('');
        const letterMap = splitWord.map(letter => {
            return new Letter(letter)
        });
        return letterMap;
    }

    this.printWord = function (userGuess) {

        const checkMap = this.letterArray.map(letter => {
            return letter.display(userGuess)
        });

        return checkMap.join(' ');
    }

    this.checkLetter = function (userGuess) {
        this.letterArray.forEach(letter => {
            letter.check(userGuess);
        })
    }

}

module.exports = Word;