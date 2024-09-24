const generateRandomNumber = function() {
  return Math.floor(Math.random() * 100) + 1;
}

const getPlayerGuess = function() {
  const guess = Number(prompt("Enter a guess between 1 and 100: "));

  if (guess >= 1 && guess <= 100) {
    return guess;
  } else {
    alert("This input is not valid. Please enter a number between 1 and 100");
    return getPlayerGuess();
  }
};

const checkGuess = function(playerGuess, correctNumber) {
  if (playerGuess < correctNumber) {
    return "Your guess is too low! Try again..";
  } else if (playerGuess > correctNumber) {
    return "Your guess is too high! Try again..";
  } else {
    return "Your guess is correct!";
  }
};

