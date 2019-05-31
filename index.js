// 1. The completed game should be able to receive user input using the `inquirer` or `prompt` npm packages.
// 2. Your solution should have, at minimum, three files:
// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses
var inquirer = require("inquirer");
var Word = require("./word.js");

const MAX_GUESSES = 5;
const DEFAULT_CONSOLE_COLOR = "\x1b[0m";
const GREEN_CONSOLE_COLOR = "\x1b[32m";
const RED_CONSOLE_COLOR = "\x1b[31m";

var playGame = function() {

    var gameWord = new Word();
    var countIncorrectGuesses = 0;
    var guessedLetters = [];

    function displayWord (g) {
        console.log(g + '');
    }
        // get the random word
        gameWord.selectRandomWord();
        console.log("\n********** NEW GAME **********");
        console.log("\n" + gameWord.guessWord);
        displayWord(gameWord);
    
        var askForLetter = function() {
            if (countIncorrectGuesses < MAX_GUESSES) {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "Guess a letter!",
                        name: "letter"
                    }
                ])