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
        // console.log(g.letters);

        //using prototype with toString()
        console.log(g + '');
    }

    // get the random word
    gameWord.selectRandomWord();
    console.log("\n********** NEW GAME **********");
    // console.log("\n" + gameWord.guessWord);
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
            .then(function(answers){
                if (answers.letter.length === 1) {

                    // if the letter has not been guessed before, process it
                    if (guessedLetters.indexOf(answers.letter) === -1) {
                        guessedLetters.push(answers.letter);

                        var found = gameWord.makeGuess(answers.letter);

                        if (found) {
                            console.log(GREEN_CONSOLE_COLOR + "\nCORRECT!\n" + DEFAULT_CONSOLE_COLOR) ;
                        } else {
                            countIncorrectGuesses++;
                            console.log(RED_CONSOLE_COLOR + "\nINCORRECT.\n" + DEFAULT_CONSOLE_COLOR);
                            console.log(MAX_GUESSES - countIncorrectGuesses + " guess(es) remaining!!!\n");
                        };

                        if (MAX_GUESSES - countIncorrectGuesses != 0) { displayWord(gameWord); };

                        // console.log("Solved? " + gameWord.wordSolved());
                        if (!gameWord.wordSolved()) {
                            askForLetter();
                        } else {
                            console.log("You got it!!! Next word.");
                            // start new game
                            playGame();
                        }
                    } else {
                        console.log("\nThis letter has been guessed previously.  Guess again.\n");
                        askForLetter();
                    }

                } else {
                    console.log("\nEnter only one letter.  Guess again.\n");
                    askForLetter();
                }

            });
        } else {
            console.log("GAME OVER.\n");
            console.log("The answer was: " + gameWord.guessWord + ".  Play again.\n");
            playGame();
        }

    }

    askForLetter();
};

playGame();