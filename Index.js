let inquirer = require("inquirer");
let word = require("word.js");
let randomwordArray = ["Array", "Linked List", "Stack", "Queue", "Deque"];

function initialize() {
    let initializeWord = generaterandomWord();
}

function generaterandomWord() {
    let randomIndex = Math.floor(Math.random() * randomwordArray.length);
    let randomWord = randomwordArray[randomIndex];
    return randomWord;

}