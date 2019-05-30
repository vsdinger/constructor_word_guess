// 1. The completed game should be able to receive user input using the `inquirer` or `prompt` npm packages.
// 2. Your solution should have, at minimum, three files:
// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

// 5. **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`

// 6. **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: <https://jsbin.com/facawetume/edit?js,console>)
var inquirer = require("inquirer");
var Word = require("./word.js");

const MAX_GUESSES = 5;
const DEFAULT_CONSOLE_COLOR = "\x1b[0m";
const GREEN_CONSOLE_COLOR = "\x1b[32m";
const RED_CONSOLE_COLOR = "\x1b[31m";