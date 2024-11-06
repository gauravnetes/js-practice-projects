// generating a random number
let randNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const userGuesses = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid number!`);
  } else if (guess < 1) {
    alert(`Please enter a number greater than 1!`);
  } else if (guess > 100) {
    alert(`Please enter a number lesser than 100!`);
  } else {
    prevGuess.push(guess);
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randNum) {
    displayMessage(`You guessed it Rigt! Congratss`);
    endGame();
  } else if (guess < randNum) {
    displayMessage(`Number is tooo low!`);
  } else if (guess > randNum) {
    displayMessage(`Number is tooo high!`);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  userGuesses.innerHTML += `${guess}   `;
  numGuesses++;
  remainingGuesses.innerHTML = `${11 - numGuesses}`;
}
function displayMessage(message) {
  lowOrhigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 1;
    userGuesses = '';
    remainingGuesses.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute('disable');
    startOver.removeChild(p);
    playGame = true;
  });
}
