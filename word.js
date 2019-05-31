
var Letter = require("./letter.js");

var WordCategories = [
    { "name": "All",
      "wordlist": ["Awkward", "Bagpipes", "Banjo", "Bungler", "Croquet", "Crypt", "Dwarves", "Fervid", "Fishhook", "Fjord", "Gazebo", "Gypsy", "Haiku", "Haphazard", "Hyphen", "Ivory", "Jazzy", "Jiffy", "Jinx", "Jukebox", "Kayak", "Kiosk", "Klutz", "Memento", "Mystify", "Numbskull", "Ostracize",  "Oxygen", "Pajama", "Phlegm", "Pixel", "Polka", "Quad", "Quip", "Rhythmic", "Rogue", "Sphinx", "Squawk", "Swivel","Toady", "Twelfth", "Unzip", "Waxy", "Wildebeest", "Yacht", "Zealous", "Zigzag", "Zippy", "Zombie"] }
 ];

var Word = function() {
    this.letters = [];
    this.guessWord = '';
    this.wordBank = WordCategories[0].wordlist;  

    this.selectRandomWord = function() {
        var randomEntry = Math.floor(Math.random() * this.wordBank.length);

        this.guessWord = this.wordBank[randomEntry].toUpperCase();

        for (i=0; i < this.guessWord.length; i++) {
            this.letters.push(new Letter(this.guessWord[i]));
        }
    };

    this.makeGuess = function(character) {
        var found = false;

        for (i=0;i < this.letters.length; i++) {
            var letterFound = this.letters[i].guessLetter(character);
            // console.log("letter guessed: " + this.letters[i].isGuessed);

            if (letterFound) {found = true;};
        }
        return found;
    };

    this.wordSolved = function() {

        for (i=0; i < this.letters.length; i++) {
            if (this.letters[i].isGuessed === false) {
                return false;
            }
        }

        return true;
    }
};

// toString method
Word.prototype.toString = function() {
    var gameWord = '';

    for (i=0;i < this.letters.length; i++) {
        gameWord = gameWord + " " + this.letters[i];
    }
    gameWord = gameWord + "\n";
    return gameWord;
};

module.exports = Word;
