alert(`
Welcome to the Number Guessing Game!
Here's how to play:
- Open the console in the Inspection Tools of your Browser. CMD + OPT + C (Mac) or CTRL + SHIFT + C (Windows) or Right Click and click Inspect.
- I will choose a number between 1 and 100.
- Your goal is to guess the correct number in 10 or fewer attempts.
- After each guess, I'll tell you whether your guess is too low, too high, or correct.
- To play, please use the console on your browser's inspection tool. 
Good luck! :)
`);

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const getPlayerGuess = function() {
  let guess = prompt("Enter a guess between 1 and 100: ");
  if (guess === null) {
    alert("Game ended.");
    return null; 
  }

  guess = parseInt(guess.trim(), 10);

  if (guess >= 1 && guess <= 100) {
    return guess;
  } else {
    alert("This input is not valid. Please enter a number between 1 and 100.");
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

const game = function(correctNumber = generateRandomNumber(), attempts = 0, maxAttempts = 10) {
  if (attempts >= maxAttempts) {
    console.log(`You have used all your ${maxAttempts} attempts! The correct number was ${correctNumber}.`);
    playAgain();
    return;
  }
  const playerGuess = getPlayerGuess();

  if (playerGuess === null) {
    return;
  }

  attempts++;
  const leftAttempts = maxAttempts - attempts;
  console.log(`Used attempts: ${attempts}, Left attempts: ${leftAttempts}`);
  const result = checkGuess(playerGuess, correctNumber);
  switch (result) {
    case "low":
      console.log(`${playerGuess} is too low!`);
      break;
    case "high":
      console.log(`${playerGuess} is too high!`);
      break;
    case "correct":
      console.log(`Congratulations! ${playerGuess} is the correct number. You needed ${attempts} attempts!`);
      const score = calculateScore(leftAttempts, true);
      console.log(`Your SCORE is ${score}!`);
      playAgain();
      return;
  }

  setTimeout(() => {
    game(correctNumber, attempts, maxAttempts); 
  }, 100);
};

const calculateScore = (leftAttempts, wasGuessed) => wasGuessed ? 20 + (leftAttempts * 10) : 0;

function playAgain() {
  let response = prompt("Do you want to play again? (yes/no)");
  
  if (response === null) {
    alert("Thanks for playing! See you next time.");
    return;
  }

  response = response.trim().toLowerCase();

  if (response === "yes") {
    console.clear();
    game();
  } else {
    alert("Thanks for playing! See you next time.");
  }
};

game();
