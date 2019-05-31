const LETTER_PLACEHOLDER = '_';

var Letter = function(letter) {
    this.character = letter;
    this.placeholder = (this.character === ' ' || (/[.']/.test(this.character))) ? this.character : LETTER_PLACEHOLDER;
    this.isGuessed = (this.character === ' ' || (/[.']/.test(this.character))) ? true : false;
};

EXAMPLE   Person.prototype.toString = function() {
  var greeting = 'My name is ' + this.name;
  
  if(this.yelling) {
    return greeting.toUpperCase();
  }

  return greeting;
}
// add toString method
Letter.prototype.toString =  function() {
    return (this.isGuessed) ? this.character : this.placeholder;
};

Letter.prototype.guessLetter = function(guess) {
    guess = guess.toUpperCase();

    if (this.character === guess) {
        this.isGuessed = true;
        // console.log("correct guess of " + guess);
        return true;
    }

    return false;
};

module.exports = Letter;