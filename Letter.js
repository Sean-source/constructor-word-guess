

function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.display = function (userGuess) {
        if (this.guessed || this.letter == userGuess) {
            return this.letter;
        }
        else {
            return "_";
        }
    }
    this.check = function (userGuess) {
        if (this.letter == userGuess) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;