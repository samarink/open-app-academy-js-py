const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let secretNumber;

function askRange() {
  rl.question('Enter a max number: ', (max) => {
    rl.question('Enter a min number: ', (min) => {
      secretNumber = randomInRange(Number(min), Number(max));
      askGuess();
    });
  });
}

function askGuess() {
  rl.question('Enter a guess: ', (guess) => {
    const guessedRight = checkGuess(Number(guess));

    if (guessedRight) {
      console.log('YOU WON');
      rl.close();
    } else {
      askGuess();
    }
  });
}

function checkGuess(num) {
  if (num === secretNumber) {
    console.log('Correct!');
    return true;
  }

  if (num > secretNumber) {
    console.log('Too high.');
  } else {
    console.log('Too low.');
  }

  return false;
}

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

askRange();
