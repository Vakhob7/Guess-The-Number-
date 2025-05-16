const NumberInput = document.getElementById('Number-Input');
const InputValue = NumberInput.value;
const CheckButton = document.getElementById('Check-Button');
const body = document.getElementById('bg');

const RestartButton = document.getElementById('Restart-Button');

let SecretNumber = Math.floor(Math.random() * 50);
console.log(`The secret number is ${SecretNumber}`);

let TriesLeft = 20;

const TriesText = document.getElementById('Tries-Text');
const numberhelper = document.getElementById('number-helper');

CheckButton.addEventListener('click', function () {
  const guess = Number(NumberInput.value);

  if (guess === SecretNumber) {
    numberhelper.textContent = '🎉 Correct! You guessed the number!';
    numberhelper.style.color = '#1dd1a1';
    title.textContent = `YOU WON 🎉 The number was ${SecretNumber}`;
    CheckButton.disabled = true;
    CheckButton.textContent = 'You Did It!';
    body.classList.toggle('win');
    return;
  }

  if (guess > SecretNumber) {
    numberhelper.textContent = 'Too high! Try a lower number.';
    numberhelper.style.color = '#ff6b6b';
  } else if (guess < SecretNumber) {
    numberhelper.textContent = 'Too low! Try a higher number.';
    numberhelper.style.color = '#48dbfb';
  }

  TriesLeft--;
  TriesText.textContent = `Tries: ${TriesLeft}`;
  console.log(TriesLeft);

  if (TriesLeft === 0) {
    numberhelper.textContent = 'You Lost! Try Again By Clicking Restart!';
    numberhelper.style.color = "red";
    CheckButton.disabled = true;
  }
});

RestartButton.addEventListener('click', function () {
  TriesLeft = 20;
  TriesText.textContent = `Tries: ${TriesLeft}`;
  CheckButton.disabled = false;
  title.textContent = `GUESS THE NUMBER (1-50)`;
  SecretNumber = Math.floor(Math.random() * 50);
  console.log(`The secret number is ${SecretNumber}`);
  NumberInput.value = '';
  numberhelper.textContent = 'Start The Game By Typing In A Number And Clicking Check.';
  numberhelper.style.color = "white";
});
