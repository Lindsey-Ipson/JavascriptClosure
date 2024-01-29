function guessingGame () {
  let randomNumber = Math.floor(Math.random() * 100);
  let guessCount = 0;
  let won = false;
  return function checkGuess (guess) {
    if (won) {
      return `The game is over, you already won!`
    }
    else if (guess === randomNumber) {
      guessCount ++;
      won = true;
      return `You win! You found ${randomNumber} in ${guessCount} guesses.`
    }
    else {
      guessCount ++;
      if (guess > randomNumber) {
        return `${guess} is too high!`
      }
      else return `${guess} is too low!`
    }
  } 
}

module.exports = { guessingGame };