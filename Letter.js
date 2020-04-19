//Constructor for letter instantiations taking in letter and also having a guessed state with each letter
function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    //Whether or not to display a underscore or letter in the word
    this.display = function (userGuess) {
        if (this.guessed || this.letter == userGuess) {
            return this.letter;
        }
        else {
            return "_";
        }
    }
    //Sets the boolean for user guess
    this.check = function (userGuess) {
        if (this.letter == userGuess) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;