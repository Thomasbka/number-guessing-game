const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

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
    return "low";
  } else if (playerGuess > correctNumber) {
    return "high";
  } else {
    return "correct";
  }
};

const game = function(correctNumber, attempts = 0, maxAttempts = 10) {
  if (attempts >= maxAttempts) {
    console.log(`You have used all your ${maxAttempts} attempts! The correct number was ${correctNumber}.`);
    return;
  }

  const playerGuess = getPlayerGuess();
  attempts++;

  const result = checkGuess(playerGuess, correctNumber);
  switch (result) {
    case "low":
      console.log("Too low! Try again..");
      break;
    case "high":
      console.log("Too high! Try again..")
      break;
    case "correct":
      console.log(`Congratulations! You just guessed the correct number in ${attempts} attempts!`);
      const score = calculateScore(attempts);
      console.log(`Your score is: ${score}`);
      return;
  }
  game(correctNumber, attempts, maxAttempts);
};

const calculateScore = function(acttempts) {
  return 100 - (attempts -1) * 10;
};

game(generateRandomNumber());